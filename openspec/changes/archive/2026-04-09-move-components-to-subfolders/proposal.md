## Why

The `client/src/components` directory is flat, which makes it harder to find related UI pieces and increases import churn as the app grows. Reorganizing components into feature-oriented subfolders improves discoverability and keeps related files together without changing runtime behavior.

## What Changes

- Move components from a single flat folder into feature-focused subfolders under `client/src/components`.
- Group blog-related components together (`Blog`, `BlogIndex`, `BlogPost`, `EditBlog`, `PostBlog`, `DeleteButton`).
- Group auth-related components together (`Login`, `Registration`).
- Group primary page/layout components together (`Home`, `AboutMe`, `NavBar`).
- Keep each component with its CSS module where applicable.
- Update imports in `client/src/views/*` and internal component imports to match new paths.
- Add optional barrel exports (`index.js`) per subfolder and at `components/` root to reduce fragile relative imports.

## Capabilities

### New Capabilities

- `component-folder-organization`: Defines and enforces a feature-based component directory structure in the client.

### Modified Capabilities

- None.

## Impact

- Affected code:
  - `client/src/components/*` (file moves and optional local index exports)
  - `client/src/views/*` (import path updates)
  - `client/src/components/*` (internal import path updates where components reference each other)
- APIs: No server API contract or route changes.
- Dependencies: No new runtime dependencies required.
- Risk:
  - Broken imports during transition if paths are only partially updated.
  - Higher merge conflict likelihood for active branches touching `client/src/components` during move.