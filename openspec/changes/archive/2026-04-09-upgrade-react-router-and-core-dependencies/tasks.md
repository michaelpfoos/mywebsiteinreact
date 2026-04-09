## 1. Compatibility Planning and Baseline

- [x] 1.1 Determine and document the latest mutually compatible stable versions for `react`, `react-dom`, `react-router-dom`, and Vite React plugin
- [x] 1.2 Audit current client usage of router/navigation APIs and identify call sites likely impacted by major upgrades

## 2. Core Dependency Upgrades

- [x] 2.1 Update client dependency manifests for React, React DOM, React Router, and required tooling/plugin packages
- [x] 2.2 Refresh lockfile and resolve immediate install/peer dependency conflicts from framework upgrades
- [x] 2.3 Apply required code updates for upgraded router and React compatibility in route config and route-aware views

## 3. Dependency Warning Remediation

- [x] 3.1 Remediate targeted warning packages (`decode-uri-component`, `follow-redirects`, `lodash`, `axios`, `moment`) via direct upgrades, replacements, or safe overrides
- [x] 3.2 Verify targeted warning packages are updated or explicitly mitigated in the resulting dependency graph
- [x] 3.3 Document any residual warning risk with rationale and follow-up action if full remediation is blocked

## 4. Validation and Regression Checks

- [x] 4.1 Run client build and configured test commands; fix upgrade-caused regressions
- [x] 4.2 Perform route-focused verification for home, about, blog list/detail, auth/admin, and post/edit flows
- [x] 4.3 Add or update route/dependency regression tests where coverage is missing for changed behavior

## 5. Instruction and Release Readiness

- [x] 5.1 Update scoped instruction files to reflect upgraded React/router baseline and compatibility constraints
- [x] 5.2 Confirm rollback path is documented and feasible as a single revert boundary for dependency and compatibility changes