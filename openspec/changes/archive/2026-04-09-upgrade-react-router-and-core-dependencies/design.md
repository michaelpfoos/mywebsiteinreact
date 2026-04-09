## Context

The client currently runs on React 17-era dependencies with older router and transitive packages that surface warning/audit noise. The requested change combines framework upgrades (React + router), toolchain compatibility updates, and targeted dependency hygiene work (`decode-uri-component`, `follow-redirects`, `lodash`, `axios`, `moment`) while preserving route and API behavior.

## Goals / Non-Goals

**Goals:**
- Upgrade `react`/`react-dom` and `react-router-dom` to the latest stable versions that are mutually compatible.
- Update required plugin/tooling dependencies for compatibility with upgraded React/router baselines.
- Resolve or explicitly mitigate dependency warnings tied to targeted packages (`decode-uri-component`, `follow-redirects`, `lodash`, `axios`, `moment`).
- Preserve route behavior across core pages and flows.
- Keep contributor guidance synchronized with the new baseline.

**Non-Goals:**
- Changing server APIs or data contracts.
- Redesigning app navigation architecture beyond compatibility fixes.
- Refactoring unrelated UI/component logic.

## Decisions

1. Upgrade React and router as a coordinated unit.
Rationale: Router major compatibility depends on React peer ranges; upgrading one without the other increases break risk.
Alternative considered: Router-only upgrade; rejected because latest router majors may require React upgrades.

2. Apply dependency warning remediation as part of the same change.
Rationale: Security/maintenance warnings are part of runtime risk and should be handled in one controlled dependency update.
Alternative considered: Separate cleanup change; rejected due to repeated lockfile churn and duplicated verification effort.

3. Prioritize behavior-preserving compatibility fixes.
Rationale: Existing routes and API usage should remain stable while dependencies move forward.
Alternative considered: Concurrent architecture cleanup; rejected to minimize regression surface.

4. Use explicit verification gates (build + route checks + dependency checks).
Rationale: Framework and dependency upgrades can introduce subtle regressions not caught by install alone.
Alternative considered: Install-only verification; rejected as insufficient.

## Risks / Trade-offs

- [Breaking API changes in React/router/tooling] -> Mitigation: upgrade incrementally within one branch and patch call sites immediately.
- [Transitive warning packages not directly pinned] -> Mitigation: use direct updates and/or overrides/resolutions with lockfile verification.
- [Behavior regressions in route rendering/navigation] -> Mitigation: run focused route checks and add/update route tests.
- [Audit warnings remain after upgrade due to ecosystem lag] -> Mitigation: document residual risk and pin mitigated versions where possible.

## Migration Plan

1. Identify latest compatible React/router/plugin version set.
2. Update dependency manifests and lockfile.
3. Address compile/runtime breakages introduced by upgrades.
4. Remediate targeted warning dependencies (`decode-uri-component`, `follow-redirects`, `lodash`, `axios`, `moment`) via direct updates or overrides.
5. Validate build and route behavior.
6. Update instruction files with the new supported baseline.
7. Rollback plan: revert the change commit to restore prior dependency graph and routing/tooling behavior.

## Open Questions

- Which package manager/lockfile policy should be preferred for overrides if a warning cannot be resolved by direct version bump?
- Are any downstream deployment/runtime environments pinned to versions that constrain React major upgrades?

## Implementation Notes

- Selected mutually compatible upgrade set:
	- `react`/`react-dom`: `19.2.0`
	- `react-router-dom`: `7.14.0`
	- `vite`: `7.3.2`
	- `@vitejs/plugin-react`: `5.2.0`
- Targeted warning package outcomes:
	- `axios` -> `1.15.0`
	- `follow-redirects` -> `1.15.11` (via axios)
	- `moment` -> `2.30.1`
	- `decode-uri-component` and `lodash` warnings removed by upgrading testing utilities (notably `@testing-library/jest-dom` `6.9.1`) and lockfile refresh.
- Router/navigation audit hotspots validated during upgrade:
	- `client/src/App.js`
	- `client/src/index.js`
	- `client/src/views/BlogView.js`
	- `client/src/views/EditBlogView.js`
	- `client/src/components/auth/Login.js`
	- `client/src/components/blog/BlogPost.js`
	- `client/src/components/blog/PostBlog.js`
	- `client/src/components/blog/EditBlog.js`
	- `client/src/components/layout/NavBar.js`
- Build/test/audit validation outcome:
	- `npm run build` succeeded
	- configured `npm run test` command executed (placeholder script remains by project design)
	- `npm audit` reports zero vulnerabilities
- Residual warning risk: none observed in final audit state.

## Rollback Confirmation

- Rollback remains feasible as a single revert boundary that restores dependency versions, lockfile state, and compatibility code updates together.