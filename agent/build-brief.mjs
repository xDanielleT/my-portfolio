// Security Weekly agent
// Loop: GATHER (CISA KEV + news RSS) -> FILTER (last 7 days, dedupe, watchlist) -> SUMMARIZE (Claude) -> PUBLISH (JSON files)
// Run locally:  ANTHROPIC_API_KEY=sk-... node agent/build-brief.mjs

import fs from "node:fs/promises";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import Anthropic from "@anthropic-ai/sdk";

const DAYS_BACK = 7;
const MAX_ITEMS_TO_SUMMARIZE = 25;
const BRIEFS_DIR = path.resolve("public/briefs");
const MODEL = "claude-haiku-5-5"; // fast + cheap; swap for claude-sonnet-5-5 for richer summaries

const NEWS_FEEDS = [
  { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/feed/" },
  { name: "The Hacker News", url: "https://feeds.feedburner.com/TheHackersNews" },
  { name: "Krebs on Security", url: "https://krebsonsecurity.com/feed/" },
];
const KEV_URL =
  "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";

const cutoff = new Date(Date.now() - DAYS_BACK * 24 * 60 * 60 * 1000);
const today = new Date().toISOString().slice(0, 10);

// ---------- 1. GATHER ----------
async function getKev() {
  const res = await fetch(KEV_URL);
  if (!res.ok) throw new Error(`CISA KEV fetch failed: ${res.status}`);
  const data = await res.json();
  return data.vulnerabilities
    .filter((v) => new Date(v.dateAdded) >= cutoff)
    .map((v) => ({
      source: "CISA KEV",
      title: `${v.vendorProject} ${v.product}: ${v.vulnerabilityName} (${v.cveID})`,
      snippet: `${v.shortDescription} Required action: ${v.requiredAction}`,
      url: `https://nvd.nist.gov/vuln/detail/${v.cveID}`,
      date: v.dateAdded,
      exploited: true,
    }));
}

async function getFeed({ name, url }) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "security-weekly-agent" } });
    const xml = await res.text();
    const parsed = new XMLParser().parse(xml);
    const items = parsed?.rss?.channel?.item ?? [];
    return (Array.isArray(items) ? items : [items])
      .filter((i) => new Date(i.pubDate) >= cutoff)
      .map((i) => ({
        source: name,
        title: String(i.title ?? "").trim(),
        // keep only a short snippet; we summarize, never republish articles
        snippet: String(i.description ?? "").replace(/<[^>]+>/g, "").slice(0, 300),
        url: i.link,
        date: new Date(i.pubDate).toISOString().slice(0, 10),
        exploited: false,
      }));
  } catch (err) {
    console.warn(`Skipping ${name}: ${err.message}`);
    return [];
  }
}

// ---------- 2. FILTER ----------
function dedupe(items) {
  const seen = new Set();
  return items.filter((i) => {
    const key = i.title.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 60);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function tagWatchlist(items, keywords) {
  return items.map((i) => {
    const text = `${i.title} ${i.snippet}`.toLowerCase();
    const hits = keywords.filter((k) => text.includes(k.toLowerCase()));
    return { ...i, watchlistHits: hits };
  });
}

function rank(items) {
  // watchlist hits first, then actively exploited (CISA), then newest
  return items.sort(
    (a, b) =>
      b.watchlistHits.length - a.watchlistHits.length ||
      Number(b.exploited) - Number(a.exploited) ||
      b.date.localeCompare(a.date)
  );
}

// ---------- 3. SUMMARIZE ----------
async function summarize(items) {
  const client = new Anthropic(); // reads ANTHROPIC_API_KEY
  const prompt = `You write a weekly cybersecurity brief for an entry-level IT / help desk professional.
For EACH item below, return an object with:
- "title": short plain-English headline (rewrite, don't copy)
- "summary": 1-2 sentences in your own words: what happened and who is affected
- "action": one sentence: what a regular user or help desk tech should do
- "helpDesk": one sentence: why this matters for a help desk / IT support role
- "severity": "critical" | "high" | "medium" | "low"  (actively exploited = at least "high")
- "index": the item's index number
Also return "overview": 2-3 sentences summarizing the week.
Skip items that are ads, webinars or not security news.
Respond with ONLY valid JSON: {"overview": "...", "items": [...]}

ITEMS:
${items.map((i, n) => `[${n}] (${i.source}${i.exploited ? ", actively exploited" : ""}) ${i.title} — ${i.snippet}`).join("\n")}`;

  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });
  const text = msg.content.map((c) => c.text ?? "").join("");
  const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
  return JSON.parse(json);
}

// ---------- 4. PUBLISH ----------
async function publish(brief) {
  await fs.mkdir(BRIEFS_DIR, { recursive: true });
  await fs.writeFile(path.join(BRIEFS_DIR, `${today}.json`), JSON.stringify(brief, null, 2));

  const indexPath = path.join(BRIEFS_DIR, "index.json");
  let index = [];
  try { index = JSON.parse(await fs.readFile(indexPath, "utf8")); } catch {}
  index = index.filter((e) => e.date !== today);
  index.unshift({
    date: today,
    file: `${today}.json`,
    itemCount: brief.items.length,
    stackHits: brief.items.filter((i) => i.affectsMyStack).length,
  });
  await fs.writeFile(indexPath, JSON.stringify(index, null, 2));
}

// ---------- RUN ----------
const { keywords } = JSON.parse(await fs.readFile("agent/watchlist.json", "utf8"));
const raw = [...(await getKev()), ...(await Promise.all(NEWS_FEEDS.map(getFeed))).flat()];
const candidates = rank(tagWatchlist(dedupe(raw), keywords)).slice(0, MAX_ITEMS_TO_SUMMARIZE);
console.log(`Gathered ${raw.length} items, summarizing top ${candidates.length}`);

const ai = await summarize(candidates);
const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
const items = ai.items
  .map((s) => {
    const src = candidates[s.index];
    if (!src) return null;
    return {
      title: s.title,
      summary: s.summary,
      action: s.action,
      helpDesk: s.helpDesk,
      severity: s.severity,
      exploited: src.exploited,
      affectsMyStack: src.watchlistHits.length > 0,
      matched: src.watchlistHits,
      source: src.source,
      url: src.url,
      date: src.date,
    };
  })
  .filter(Boolean)
  .sort(
    (a, b) =>
      Number(b.affectsMyStack) - Number(a.affectsMyStack) ||
      severityOrder[a.severity] - severityOrder[b.severity]
  );

await publish({ date: today, overview: ai.overview, items });
console.log(`Published public/briefs/${today}.json with ${items.length} items`);
