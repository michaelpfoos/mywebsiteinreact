---
applyTo: "client/**"
description: "Use when working in the React client, Vite frontend, components, views, routing, styling, or browser-side behavior."
---

# Client Instructions

- This folder is a Vite-powered React application (migrated from Create React App).
- Main source code is under `client/src/`.
- Reusable UI pieces are under `client/src/components/`.
- View-level composition is under `client/src/views/`.
- Build/dev commands use Vite: `npm run dev` (dev), `npm run build` (prod), `npm run preview` (preview).
- Environment variables use the `VITE_` prefix and are accessed via `import.meta.env.VITE_*` (e.g., `import.meta.env.VITE_API_URL`).
- Current framework baseline is React 19 with `react-router-dom` 7.x and Vite 7.x + `@vitejs/plugin-react` 5.x.
- Keep routing and framework changes compatible with this baseline unless a task explicitly includes another major migration.
- When using `react-helmet`, prefer `react-helmet-async` for React 19 compatibility.
- Prefer focused component changes over broad rewrites.
- Keep browser-only logic in the client and avoid introducing server concerns here.
- When changing API calls, verify the corresponding Express route exists in `server/routes/` and stays compatible.