# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/portal website for WATPRO Consultants — a React 19 + TypeScript + Vite 7 + Tailwind CSS 4 single-page app. There is no backend: all persistence (auth, registrations, contact messages) lives in browser `localStorage`.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (via `vite-plugin-singlefile`, the entire app — JS, CSS, base64 images — is inlined into one `dist/index.html`)
- `npm run preview` — preview the production build
- Type checking: `npx tsc --noEmit` (strict mode; `noUnusedLocals`/`noUnusedParameters` are on, so unused imports fail the check). There is no lint or test setup.

## Architecture

- **Routing**: `src/App.tsx` uses `HashRouter` (required because the build is a single static HTML file). All routes render inside `components/Layout.tsx` (nav + footer + floating widgets). Route guards (`RequireClient`, `RequireAdmin`, `RedirectIf*`) are defined inline in `App.tsx`.
- **Auth**: `src/context/AuthContext.tsx` implements dual, independent sessions (client and admin can be logged in simultaneously). Users are stored in `localStorage` (`watpro_users_v1` / `watpro_sessions_v1`); a default admin (`admin@watpro.com` / `watpro2026`) is seeded if none exists. Passwords are stored in plaintext — this is a demo-grade auth system by design.
- **Data**: All site content (services, industries, case studies, events, page meta, etc.) is hardcoded in `src/data/watproContent.ts` and `src/data/blogContent.ts` with typed interfaces. Editing site copy means editing these files.
- **Form storage**: `src/utils/store.ts` persists training registrations and contact messages to `localStorage`; the admin dashboard reads them back.
- **Images**: Inlined as base64 data URIs in `src/assets.ts` (do not read this file whole — it's mostly base64). Files in `public/` are the raw sources.
- **UI kit**: Shared primitives (buttons, cards, section headers) live in `src/components/ui.tsx`; class merging via `cn()` in `src/utils/cn.ts` (clsx + tailwind-merge). Animations use framer-motion, icons use lucide-react.
- **SEO/meta**: Pages call `useDocumentMeta` (`src/hooks/useDocumentMeta.ts`) with a `PageMeta` object from `watproContent.ts` to set title/meta tags.
- **Styling**: Tailwind CSS 4 (Vite plugin, no tailwind.config file). Global theme is dark (`#07111e` background) set in `src/index.css`. Path alias `@/` → `src/`.
