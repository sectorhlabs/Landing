# AGENTS.md — Instructions for AI agents

## Project: Sector H Labs Landing
Repo: `sectorhlabs/landing` on GitLab
Vercel team: `sector-h-labs` (logged in as `sectorhlabs`)

## How to deploy to Vercel

This project is NOT linked to Vercel via Git integration. Deployments are done manually via CLI.

### 1. Deploy to production

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

## GitLab

- Repo: `sectorhlabs/landing` on gitlab.com
- Clone: `git clone https://gitlab.com/sectorhlabs/landing.git`
- Push directly to `master`, no PR needed for this repo
- Auth: credentials are stored via `git credential-store`, no setup needed

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
