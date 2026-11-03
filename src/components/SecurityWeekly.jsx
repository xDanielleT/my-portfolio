import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { links } from "../data/content";

// Briefs are written to public/briefs/ by agent/build-brief.mjs (run weekly by GitHub Actions).
const BRIEFS = "briefs/";
const REPO = `${links.github}/my-portfolio`;

const SEVERITY = {
  critical: { label: "Critical", color: "#b91c1c", bg: "#fef2f2" },
  high: { label: "High", color: "#c2410c", bg: "#fff7ed" },
  medium: { label: "Medium", color: "#a16207", bg: "#fefce8" },
  low: { label: "Low", color: "#1d4ed8", bg: "#eff6ff" },
};

const safeUrl = (u) => (/^https?:\/\//.test(u || "") ? u : null);

const Pill = ({ color, bg, children }) => (
  <span className="tag" style={{ color, background: bg }}>{children}</span>
);

const BriefItem = ({ item }) => {
  const sev = SEVERITY[item.severity] ?? SEVERITY.low;
  const url = safeUrl(item.url);
  return (
    <article className="sw-item" style={{ borderLeftColor: sev.color }}>
      <div className="flex flex-wrap gap-2 mb-3">
        <Pill color={sev.color} bg={sev.bg}>{sev.label}</Pill>
        {item.exploited && <Pill color="#b91c1c" bg="#fef2f2">Actively exploited</Pill>}
        {item.affectsMyStack && <Pill>My stack: {item.matched.join(", ")}</Pill>}
      </div>
      <h2 className="text-lg font-semibold text-[var(--navy)] leading-snug">{item.title}</h2>
      <p className="mt-2 leading-relaxed text-[var(--muted)]">{item.summary}</p>
      <p className="mt-3 text-[0.95rem]">
        <span className="font-semibold text-[var(--navy)]">What to do: </span>
        <span className="text-[var(--muted)]">{item.action}</span>
      </p>
      <p className="mt-1 text-[0.95rem]">
        <span className="font-semibold text-[var(--navy)]">Help desk angle: </span>
        <span className="text-[var(--muted)]">{item.helpDesk}</span>
      </p>
      <p className="mt-4 text-xs text-[var(--soft)] flex flex-wrap items-center gap-x-2">
        <span>{item.source}</span>·<span>{item.date}</span>
        {url && (
          <>
            ·
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--primary)] font-medium">
              Read source <FiExternalLink />
            </a>
          </>
        )}
      </p>
    </article>
  );
};

export const SecurityWeekly = () => {
  const [index, setIndex] = useState(null);
  const [file, setFile] = useState(null);
  const [brief, setBrief] = useState(null);
  const [stackOnly, setStackOnly] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${BRIEFS}index.json`)
      .then((r) => r.json())
      .then((data) => {
        setIndex(data);
        if (data.length) setFile(data[0].file);
      })
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    if (!file) return;
    fetch(BRIEFS + file)
      .then((r) => r.json())
      .then(setBrief)
      .catch(() => setError(true));
  }, [file]);

  const items = (brief?.items ?? []).filter((i) => !stackOnly || i.affectsMyStack);

  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <main className="container-x max-w-[880px] py-10 sm:py-14">
        <a href="./" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
          <FiArrowLeft /> Back to portfolio
        </a>

        <header className="mt-6">
          <p className="eyebrow mb-3">AI Agent · Personal Project</p>
          <h1 className="section-title">Security Weekly</h1>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Plain-language cybersecurity news, published every Monday by an agent I built.
          </p>
        </header>

        <section className="sw-how mt-6" aria-label="How it works">
          <p className="font-semibold text-[var(--navy)]">How it works</p>
          <ol className="mt-2 space-y-1 text-sm text-[var(--muted)] list-decimal pl-5">
            <li><b>Gather:</b> CISA's Known Exploited Vulnerabilities list plus security news feeds.</li>
            <li><b>Filter:</b> last 7 days, duplicates removed, anything touching tools I use flagged.</li>
            <li><b>Summarize:</b> Claude rewrites each item: what happened, what to do, why it matters.</li>
            <li><b>Publish:</b> GitHub Actions commits the brief and Netlify redeploys this page.</li>
          </ol>
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4">
            <FaGithub /> View Code
          </a>
        </section>

        {error && <p className="mt-8 text-[var(--muted)]">No briefs published yet. Check back Monday.</p>}

        {index?.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 mt-8 mb-4">
            <label htmlFor="week" className="text-sm font-medium text-[var(--navy)]">Week of</label>
            <select id="week" className="filter-pill" value={file ?? ""} onChange={(e) => setFile(e.target.value)}>
              {index.map((b) => (
                <option key={b.file} value={b.file}>
                  {b.date}{b.stackHits ? ` (${b.stackHits} affect my stack)` : ""}
                </option>
              ))}
            </select>
            <button
              className={`filter-pill ${stackOnly ? "active" : ""}`}
              aria-pressed={stackOnly}
              onClick={() => setStackOnly((s) => !s)}
            >
              Affects my stack only
            </button>
          </div>
        )}

        {brief?.overview && <p className="text-[1.05rem] leading-relaxed text-[var(--ink)] mb-5">{brief.overview}</p>}

        <div aria-live="polite">
          {brief && items.length === 0 && <p className="text-[var(--muted)]">Nothing here this week.</p>}
          {items.map((item) => <BriefItem key={item.title} item={item} />)}
        </div>

        <p className="mt-10 text-xs text-[var(--soft)]">
          Summaries are AI-generated from public sources. Always check the linked source for full details.
        </p>
      </main>
    </>
  );
};
