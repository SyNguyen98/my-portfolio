# AGENTS.md — AI Coding Agent Guide

## Project Overview

Personal portfolio SPA for **SyNguyen** built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4 and MUI v9,
deployed to **Azure Static Web Apps**.

## Architecture

### Page Structure

`App.tsx` defines two routes:

- `/` — single-page layout: `WelcomeScreen` → `Navbar` + `Background` + stacked sections (`Homepage`, `About`,
  `Projects`, `Achievements`, `TechStacks`, `Contact`, `Footer`)
- `/projects` — `ProjectDetail` + `Footer` (navigated to from `Projects` section, passing state via router)

Components are co-located by section under `src/components/<section-name>/`.

### Data Flow

All static content lives in `src/constants/` — never hardcoded in components:

- `src/constants/projects.ts` — `PROJECTS` array; `description` and `features` fields are **i18n translation keys**, not
  literal strings
- `src/constants/achievements.ts`, `src/constants/tech.ts` — same pattern
- `src/constants/index.ts` — external social/contact URLs

### i18n Pattern

- Languages: `en` and `vn` (not `vi`) — the locale code is `vn` throughout (see `src/translation/i18n.tsx`)
- Translation files: `src/translation/en.json` and `src/translation/vi.json`
- Language state bridged via `src/providers/LanguageProvider.tsx` (`LanguageContext`) wrapping i18next
- Always add new text as translation keys in both JSON files; reference the key in constants, not inline

### Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — configured in Vite)
- MUI v9 with Emotion for complex UI components
- `tailwind-merge` used to safely compose class strings
- Custom font: `src/assets/fonts/genshin.ttf` loaded via `src/assets/fonts/font.css`

### Animations

- **AOS** (Animate On Scroll) — initialized in `App.tsx`, re-initialized on resize with 250ms debounce
- **Framer Motion** — used for `WelcomeScreen` entrance via `AnimatePresence`
- **Swiper** — used for carousel/slider components

### Images

Project images are **not bundled** — hosted externally on jsDelivr CDN:
`https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/...`

## Developer Workflows

```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # Type-check (tsc -b) then build
npm run lint         # ESLint check
npm run test         # Vitest in watch mode
npm run test:ci      # Vitest with coverage (text/json/html reports)
```

Tests use **Vitest** with jsdom + `@testing-library/react`. Setup file: `src/setupTests.ts`. Only `Footer.test.tsx`
exists currently — new tests follow that co-location pattern.

## Deployment

Deployed to **Azure Static Web Apps**. `staticwebapp.config.json` configures SPA fallback to `index.html` (required for
client-side routing on `/projects`).

Terraform infra is in `terraform/` — `main.tf` / `variables.tf` / `terraform.tfvars`.

## Key Conventions

- **Adding a project**: add entry to `PROJECTS` in `src/constants/projects.ts`, add translation keys to both `en.json`
  and `vi.json` for `description` and each `features.*` key.
- **Tech icons** come from `react-icons` (`IconType`) — always typed via the `Project` model in `src/models/project.ts`.
- ESLint config: `eslint.config.js` (flat config, ESLint v9).

