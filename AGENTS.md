# AGENTS.md — Instructions for AI agents

## Project: Sector H Labs Landing
Repo: `sectorhlabs/landing` on GitHub
Vercel team: `sector-h-labs` (logged in as `sectorhlabs`)

## How to deploy to Vercel

This project IS linked to Vercel via Git integration. **Pushing to `master` auto-deploys to
production** (https://www.sectorhlabs.es). No CLI needed for the normal flow — just commit and push.

Manual CLI deploy is only a fallback (e.g. to redeploy without a commit):

### 1. Deploy to production (fallback)

```bash
vercel --prod --scope sector-h-labs
```

### 2. Deploy preview (no prod)

```bash
vercel --scope sector-h-labs
```

### 3. Check existing deployments

```bash
vercel list --scope sector-h-labs
```

### 4. Check existing projects

```bash
vercel projects ls --scope sector-h-labs
```

## Important notes

- Always use `--scope sector-h-labs` in every `vercel` command. Without it, Vercel defaults to the personal account which may have different projects.
- The project is a static site (HTML/CSS/JS), no build step needed. Vercel auto-detects static projects.
- If Vercel asks for framework, answer "Other" or just press Enter for auto-detect.
- Root directory is `.` (project root).
- No build command or output directory needed — it's all static files.

## GitHub

- Org: `Sector-H-Labs`
- Clone: `git clone https://github.com/sectorhlabs/landing.git`
- Push directly to `master`, no PR needed for this repo

## File structure

```
landing/
├── index.html          # main page
├── css/styles.css      # all styles
├── js/main.js          # all JS (Lenis smooth scroll, reveal animations)
├── assets/             # images, logo, etc.
├── .gitignore
└── AGENTS.md           # this file
```

## Known tech stack

- Plain HTML/CSS/JS (no framework)
- Lenis smooth scroll (CDN: unpkg.com/lenis@1.3.23)
- Google Fonts: Inter + JetBrains Mono
- No build step, no npm dependencies
