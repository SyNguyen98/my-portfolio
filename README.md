# SyNguyen's Portfolio

Personal portfolio SPA for **SyNguyen** — a developer who loves coding.

🌐 Live site: [synguyen.id.vn](https://www.synguyen.id.vn)

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (configured via `@tailwindcss/vite`, no `tailwind.config.js`)
- **MUI v9** with Emotion for complex UI components
- **i18next** — bilingual support (`en` / `vn`)
- **Framer Motion** — entrance animations (`WelcomeScreen`)
- **AOS** — scroll-triggered animations
- **Swiper** — carousel/slider components
- **React Router v7** — client-side routing
- Deployed to **Azure Static Web Apps**

## Project Structure

```
src/
├── App.tsx                  # Routes & AOS initialization
├── components/              # Co-located by section
│   ├── homepage/
│   ├── about/
│   ├── projects/
│   ├── project-detail/
│   ├── achievements/
│   ├── tech-stacks/
│   ├── contact/
│   ├── footer/
│   └── navbar/
├── constants/               # All static content (never hardcoded in components)
├── models/                  # TypeScript types
├── providers/               # LanguageProvider (i18n context)
└── translation/             # en.json, vi.json, i18n setup
```

## Getting Started

```bash
npm install
npm run dev        # Start dev server with HMR
```

## Scripts

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check (tsc -b) then build
npm run lint       # ESLint check
npm run test       # Vitest in watch mode
npm run test:ci    # Vitest with coverage (text/json/html)
npm run preview    # Preview production build locally
```

## Pages & Routing

| Route       | Description                                             |
|-------------|---------------------------------------------------------|
| `/`         | Single-page layout with all sections stacked vertically |
| `/projects` | Project detail page (navigated to with router state)    |

`staticwebapp.config.json` configures the SPA fallback to `index.html` for Azure Static Web Apps.

## i18n

- Locale codes: `en` (English) and `vn` (Vietnamese) — note: **`vn`**, not `vi`
- Translation files: `src/translation/en.json` and `src/translation/vi.json`
- `description` and `features` fields in `src/constants/projects.ts` are translation keys, not literal strings

## Adding a Project

1. Add an entry to `PROJECTS` in `src/constants/projects.ts`
2. Add translation keys `projects.list.<id>.description` and `projects.list.<id>.features.*` to both `en.json` and
   `vi.json`
3. Upload the project image to the CDN repo and reference it as:
   `https://cdn.jsdelivr.net/gh/SyNguyen98/image-storage@main/my-portfolio/projects/<name>.webp`

## Infrastructure

Terraform configuration is in `terraform/` and provisions the Azure Static Web App resource.
