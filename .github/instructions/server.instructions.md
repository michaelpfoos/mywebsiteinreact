---
applyTo: "server/**"
description: "Use when working in the Express server, API routes, controllers, models, file uploads, authentication, or database code."
---

# Server Instructions

- This folder is an Express.js application running on Node.js.
- Entry point is `server/server.js`.
- Route definitions are under `server/routes/`.
- Request handling logic is under `server/controller/`.
- Mongoose models are under `server/models/`.
- Uploaded static assets are under `server/resources/static/assets/uploads/`.
- Keep route, controller, and model responsibilities separated.
- Avoid coupling server code to frontend implementation details beyond the API contract.
- When changing response shapes or auth behavior, check whether matching updates are needed in `client/`.