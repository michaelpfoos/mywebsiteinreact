# Repository Agent Guidance

This repository is a split React and Express application.

## Structure

- Client-side code lives in `client/`.
- Server-side code lives in `server/`.
- OpenSpec files live in `openspec/`.

## Stack

- `client/` is a Vite-powered React application using React 17 and Vite 5.4+.
- `server/` is a Node.js Express application with Mongoose models, route files, and controllers.

## Working Rules

- Use the scoped instruction files in `.github/instructions/` for folder-specific guidance.
- Keep frontend changes inside `client/` unless a request explicitly requires API or schema updates.
- Keep backend changes inside `server/` unless a request explicitly requires frontend integration.
- When a change spans both sides, update the API contract and the consuming client code together.