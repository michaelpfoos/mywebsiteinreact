## Why

The client uses Create React App, which has slower startup/build times and less flexible modern tooling than Vite. Migrating now improves developer feedback loops and maintainability while keeping user-visible behavior stable.

## What Changes

- Replace CRA tooling in `client/` with Vite while preserving React behavior and routing.
- Update build, start, and preview scripts in `client/package.json` to Vite equivalents.
- Move CRA-specific entry assumptions to Vite-compatible setup (HTML template, env variable access, asset handling).
- Keep runtime dependencies stable where possible; only adjust versions required for Vite compatibility.
- Preserve API integration with the existing Express backend and current deployment paths.

Scope:
- In scope: client build tooling migration, client config updates, and import/env compatibility fixes.
- Out of scope: backend API redesign, UI redesign, or feature additions unrelated to migration.

Constraints:
- Keep existing application functionality and routes unchanged.
- Minimize breaking environment-variable changes; document any required rename from CRA conventions.
- Ensure production build output remains deployable in the current workflow.

Acceptance criteria:
- `client` dev server runs via Vite and app loads without module resolution errors.
- Production build completes successfully with Vite.
- Existing core user flows (home, auth, blog listing/post/edit) remain functional.

## Capabilities

### New Capabilities
- `vite-client-toolchain`: Defines required behavior for Vite-based development and production builds in the React client.

### Modified Capabilities
- None.

## Impact

- Affected code: `client/` project configuration, entry HTML, environment variable usage, and any import paths requiring Vite compatibility.
- Dependencies: Add Vite and related plugins; remove `react-scripts` and CRA-only tooling.
- Systems: Local developer workflow, CI build commands, and deployment scripts that call client build tasks.