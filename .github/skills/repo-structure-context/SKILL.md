---
name: repo-structure-context
description: "Use when you need a quick refresher on this repository's client/server split, folder ownership, or stack before making a change. Keywords: client folder, server folder, Vite, React frontend, Express, API backend."
---

# Repo Structure Context

Use this skill to ground work in the correct part of the repository before implementing changes.

## Layout

- `client/` contains the frontend application.
- `server/` contains the backend API.
- `openspec/` contains specification and change artifacts.

## Frontend

- Built with Vite (migrated from Create React App).
- Uses React 17, Vite 5.4+, and react-router-dom v6.
- Most application code lives in `client/src/components/` and `client/src/views/`.
- Dev/build commands: `npm run dev` (development), `npm run build` (production), `npm run preview` (preview).
- Environment variables use `VITE_` prefix and are accessed via `import.meta.env.VITE_*`.

## Backend

- Built with Express.js on Node.js.
- Uses Mongoose models, route files, and controllers.
- Main backend entry point is `server/server.js`.

## How To Apply This Context

- For UI behavior, routing, styling, and browser rendering, work in `client/`.
- For API endpoints, database logic, auth, uploads, and request handling, work in `server/`.
- For end-to-end features, identify both the backend contract change and the frontend consumer change before editing.