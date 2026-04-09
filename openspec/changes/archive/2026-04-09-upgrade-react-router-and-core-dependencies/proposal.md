## Why

The client is on older React and router baselines and has vulnerable/outdated dependency warnings that increase maintenance and security risk. Upgrading now keeps the app aligned with supported ecosystems and reduces recurring audit noise.

## What Changes

- Upgrade `react` and `react-dom` to the latest stable major versions supported by the toolchain.
- Upgrade `react-router-dom` to the latest stable release and adapt route/navigation code as needed.
- Upgrade frontend tooling dependencies (including Vite React plugin) required for compatibility with newer React/router versions.
- Update or replace vulnerable/outdated dependencies that currently trigger warnings: `decode-uri-component`, `follow-redirects`, `lodash`, `axios`, and `moment`.
- Add regression verification for core routes and confirm the client build remains successful.
- Update contributor instruction files to reflect the new dependency and routing baseline.

## Capabilities

### New Capabilities
- `frontend-dependency-hygiene`: Defines requirements for resolving known high-priority dependency warnings in the client dependency graph.

### Modified Capabilities
- `react-router-upgrade`: Expand upgrade requirements to include latest React + router compatibility and route behavior preservation.
- `vite-client-toolchain`: Update toolchain and contributor guidance requirements to match the upgraded React/router baseline.

## Impact

- Affected code: `client/package.json`, lockfile, router setup, and route-aware views/components.
- Affected dependencies: `react`, `react-dom`, `react-router-dom`, `@vitejs/plugin-react`, and warning-related packages (`decode-uri-component`, `follow-redirects`, `lodash`, `axios`, `moment`) directly or through overrides.
- Affected guidance: `.github/instructions/client.instructions.md` and related workflow guidance if version assumptions change.
- Constraints:
  - Preserve core route behavior (home, about, blog listing/detail, admin/auth, post/edit).
  - Keep server API contracts unchanged.
- Acceptance criteria:
  - Client builds successfully after upgrades.
  - Core routes continue to render and navigate without regressions.
  - Dependency warning targets are remediated or documented with explicit mitigation.
  - Updated instructions reflect the new supported baseline.