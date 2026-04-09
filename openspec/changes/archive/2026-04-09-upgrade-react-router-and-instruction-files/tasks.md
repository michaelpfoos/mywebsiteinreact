## 1. Dependency Upgrade Preparation

- [x] 1.1 Audit current client router usage (`Routes`, `Route`, navigation hooks, and route params) across views and shared components
- [x] 1.2 Update `client/package.json` with the newest compatible stable `react-router-dom` version and refresh lockfile
- [x] 1.3 Install dependencies and verify local compatibility constraints (Node/npm + React 17)

## 2. Router Integration Updates

- [x] 2.1 Refactor route configuration code to satisfy upgraded router APIs while preserving existing route paths
- [x] 2.2 Update programmatic navigation and parameter handling call sites impacted by API changes
- [x] 2.3 Ensure fallback and nested route behavior remains valid under upgraded router semantics

## 3. Validation and Regression Coverage

- [x] 3.1 Run client build and tests; fix any router-related compile/runtime regressions
- [x] 3.2 Execute route-focused verification for home, auth, blog list, blog detail, and blog create/edit flows
- [x] 3.3 Add or update routing tests where coverage is missing for upgraded navigation behavior

## 4. Instruction File Alignment

- [x] 4.1 Review scoped instruction files for router-version assumptions that are now outdated
- [x] 4.2 Update instruction text to reflect the upgraded supported router baseline and expected contributor behavior
- [x] 4.3 Re-verify instruction guidance is consistent with current client dependencies and routing implementation

## 5. Release Readiness

- [x] 5.1 Document upgrade notes and any compatibility caveats in the change artifacts
- [x] 5.2 Confirm rollback approach is documented and feasible (single revert path for router upgrade)