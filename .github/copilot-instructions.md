# Copilot instructions — Mluleki Moloi Portfolio

Short objective: help AI agents become productive fast by documenting the app layout, build & dev workflows, and project-specific coding conventions.

## Project at a glance 🔧

- Framework: React + TypeScript (Vite project)
- Entry: `src/main.tsx` → `src/App.tsx` (Routing handled by `react-router-dom`)
- Pages: `src/pages/*` (one file per route, e.g. `Home.tsx`, `CV.tsx`)
- Reusable components: `src/Components/*` (e.g. `Nav.tsx`, `Footer.tsx`)
- Static assets: `public/` for public files; `src/Images/` for imported assets (e.g. PDF used by `src/pages/CV.tsx`)

## Local dev & build commands ▶️

- Install: `npm install`
- Start dev server: `npm run dev` (Vite → default port 5173)
- Build production: `npm run build` (runs `tsc -b` then `vite build`)
- Preview production build: `npm run preview` (Vite preview)
- Lint: `npm run lint` (uses ESLint; files are `.ts/.tsx` and JS)

Note: `build` runs TypeScript project references (`tsc -b`) — preserve `tsconfig.*` settings when adding files.

## TypeScript & linting notes ⚙️

- Strict TS compiler options in `tsconfig.app.json` (`strict`, `noUnusedLocals`, `noFallthroughCasesInSwitch`, `noEmit`, `jsx: 'react-jsx'`).
- Keep imports and types explicit; the project opts for strict type safety.
- ESLint is configured as the primary linter (`eslint .`).

## Routing & adding pages 🧭

- Add a new page: create `src/pages/YourPage.tsx`, export default the component, then:
  1. Add a `<Route path="/your" element={<YourPage />} />` to `src/App.tsx`.
  2. If needed, add a link in `src/Components/Nav.tsx` and `Footer.tsx`.

Example: `src/pages/CV.tsx` demonstrates importing an asset (`src/Images/Mluleki-CV.pdf`) and providing a download link using a dynamic anchor element.

## Styling & assets 🎨

- Global styles: `src/App.css` and `src/modern-styles.css` — components rely on class names (no CSS-in-JS used).
- Keep CSS class names consistent with existing components (e.g., `.nav-container`, `.cv-header`) to reuse styles.

## Conventions & patterns ✔️

- Components and pages use PascalCase filenames and default exports (e.g., `Home.tsx`, `Nav.tsx`).
- Prefer small, focused components in `src/Components/` and full-page components in `src/pages/`.
- Routing uses client-side paths (no server-side routes).

## Integration points & external deps 🔗

- `react-router-dom` for navigation (v7-style `Routes` + `Route` components).
- No server/API integrations present in the repository (static portfolio site).

## Quick troubleshooting tips ⚠️

- If build fails with TS errors, run `npx tsc -b` to see the full type-check trace.
- For dev server CORS/host issues, check `vite.config.ts` (currently `server.allowedHosts: true`).

## What not to change without confirmation

- `tsconfig.*` settings (strictness and `noEmit`) — changing them affects CI/build behavior.
- `package.json` scripts used in CI or deployment flows (e.g., `build`, `preview`).

---

If anything here is unclear or you want more examples (unit tests, CI steps, or adding a new component), tell me which area to expand and I'll update this file. ✅
