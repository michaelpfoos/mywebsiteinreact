## Why

The client currently depends on an older React Router setup, which increases maintenance risk and can block newer fixes and ecosystem compatibility. Upgrading to the newest supported router version now reduces long-term upgrade cost and aligns project guidance with current routing patterns.

## What Changes

- Upgrade `react-router-dom` in the client to the newest stable release compatible with the project runtime.
- Update route composition and navigation APIs in the client where required by the upgrade.
- Validate key user flows (home, blog listing, post details, auth screens, create/edit blog pages) under the new router behavior.
- Update repository instruction files that currently encode router-version assumptions so future contributors follow the updated baseline.
- Add or update tests and checks for routing behavior affected by the upgrade.

## Capabilities

### New Capabilities
- `react-router-upgrade`: Defines required behavior and compatibility outcomes when upgrading the client router dependency and route wiring.

### Modified Capabilities
- `vite-client-toolchain`: Updates dependency and project guidance requirements to reflect the upgraded router baseline for the Vite React client.

## Impact

- Affected code: client routing setup, route wrappers, navigation calls, and route-based views.
- Affected dependencies: `react-router-dom` and any directly related router packages in `client/package.json`.
- Affected guidance: instruction files under `.github/instructions/` that mention router constraints.
- Acceptance criteria:
  - Client builds and runs with the upgraded router dependency.
  - Existing core routes continue to resolve and render expected views.
  - Instruction files no longer reference outdated router-version constraints.
  - Tasks are defined for implementation, verification, and regression checks.