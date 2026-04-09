## 1. Baseline and migration setup

- [x] 1.1 Inventory current CRA scripts, env usage, and static asset assumptions in `client/`
- [x] 1.2 Add Vite and React plugin dependencies; remove `react-scripts` and CRA-only tooling
- [x] 1.3 Update `client/package.json` scripts for `dev`, `build`, and `preview` using Vite

## 2. Configure Vite project entry and build

- [x] 2.1 Create/adjust Vite configuration for React app behavior and compatible base/output settings
- [x] 2.2 Update client HTML entry template and startup wiring to Vite conventions
- [x] 2.3 Replace CRA-specific environment variable access with Vite-compatible access where needed

## 3. Resolve compatibility and integration

- [x] 3.1 Fix module, asset, and CSS import issues surfaced by Vite resolution/build behavior
- [x] 3.2 Verify API integration paths and requests remain compatible with existing Express routes
- [x] 3.3 Update docs/README and any CI commands that reference CRA scripts

## 4. Validate behavior and release safety

- [x] 4.1 Run Vite dev server and verify core flows (home, auth, blog list/create/edit)
- [x] 4.2 Run production build and confirm output is deployable in current workflow
- [x] 4.3 Capture rollback instructions and migration notes for any required env/deploy changes
