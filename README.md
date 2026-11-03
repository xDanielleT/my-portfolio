# Danielle Turner Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS.

This project has two working directions:
- `main` keeps the original developer portfolio version.
- DaniBytes is my personal portfolio website, showcasing client websites, personal projects, and my growth as a frontend developer, from building sites to maintaining them and exploring. 

## Live Site

- https://danibytes.dev/

## Tech Stack

- React
- Vite
- Tailwind CSS
- Netlify Forms

## Features

- Responsive layout for mobile and desktop
- Loading intro screen and scroll reveal animations
- Project showcase with external demo/repo links
- Contact form using Netlify Forms
- Accessibility-focused contrast updates

## Local Development

```bash
npm install
npm run dev
```

## Lint

```bash
npm run lint
```

## Notes

DaniBytes is my personal portfolio website, showcasing my web development projects, technical skills, and journey as a developer.

## Security Weekly (AI agent)

`security-weekly.html` shows a weekly cybersecurity brief written by an agent in `agent/`.

**Gather → Filter → Summarize → Publish**

1. Pulls CISA's Known Exploited Vulnerabilities list and security news RSS feeds
2. Keeps the last 7 days, removes duplicates, flags items matching `agent/watchlist.json`
3. Claude summarizes each item: what happened, what to do, the help desk angle
4. `.github/workflows/security-weekly.yml` runs every Monday, commits `public/briefs/YYYY-MM-DD.json`, and Netlify redeploys

Setup: add an `ANTHROPIC_API_KEY` repository secret in GitHub (Settings → Secrets and variables → Actions), then run the workflow once from the Actions tab. Delete the sample brief in `public/briefs/` after the first real one publishes.

Run locally: `ANTHROPIC_API_KEY=your-key npm run brief`
