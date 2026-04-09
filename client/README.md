# Client (Vite + React 17)

This client now runs on Vite instead of Create React App.

## Scripts

- `npm run dev` or `npm start`: Start the Vite development server.
- `npm run build`: Build production assets into `client/build/`.
- `npm run preview`: Preview the built app locally.

## Environment Variables

Vite exposes only variables prefixed with `VITE_`.

- `VITE_API_URL`: Base URL for API and file endpoints.

Example:

```env
VITE_API_URL=http://localhost:8000/
```

A template is provided in `.env.example`.

## Backend Compatibility

The client continues to call the same server routes:

- `/api/users/register/`
- `/api/users/login/`
- `/api/users/logout/`
- `/api/blog/` and `/api/blog/:id`
- `/api/upload`
- `/files/*`

If `VITE_API_URL` is not set, the client falls back to `http://localhost:8000/`.

## Rollback Notes

If migration issues are found, rollback by restoring these files from git:

- `client/package.json` and `client/package-lock.json`
- `client/public/index.html`
- `client/src/*` env access changes
- remove `client/index.html` and `client/vite.config.js`

Then reinstall dependencies with `npm install` in `client/`.
