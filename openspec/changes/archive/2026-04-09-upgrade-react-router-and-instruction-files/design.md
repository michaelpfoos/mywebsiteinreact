## Context

The client is a Vite + React 17 application that currently relies on a React Router setup that is behind the latest release line. The project also includes contributor instruction files that currently state assumptions tied to older router guidance. The upgrade must keep existing route behavior stable while aligning dependency and contributor guidance with the new baseline.

## Goals / Non-Goals

**Goals:**
- Upgrade client router dependencies to the newest stable React Router release that is compatible with the project runtime.
- Preserve behavior for existing navigation flows and route rendering (home, auth, blog list, blog post, create/edit blog).
- Update repository instruction files so future edits do not reintroduce outdated router assumptions.
- Keep API integration behavior unchanged.

**Non-Goals:**
- Redesigning site navigation or information architecture.
- Rewriting unrelated client components.
- Changing Express APIs, auth contracts, or server-side route behavior.

## Decisions

1. Upgrade in place rather than replacing routing architecture.
Rationale: The app already uses route-driven views; targeted API-level changes reduce risk and scope.
Alternative considered: Full route tree redesign; rejected because it adds unnecessary regression risk.

2. Validate through route-focused regression checks after dependency bump.
Rationale: Router upgrades can introduce subtle behavior changes in navigation and parameter handling.
Alternative considered: Dependency-only update without explicit route validation; rejected due to insufficient safety.

3. Treat instruction-file updates as part of the same change.
Rationale: Documentation drift causes future implementation inconsistency; guidance must match code expectations.
Alternative considered: Deferring instruction updates to a later cleanup; rejected because it leaves immediate ambiguity.

## Risks / Trade-offs

- Dependency compatibility mismatch with React 17 -> Pin to the newest compatible router version and verify install/build.
- Navigation behavior regressions in edge paths -> Execute route coverage checks across core flows before merge.
- Incomplete instruction-file updates -> Review all scoped instruction files mentioning router/version constraints and align wording.
- Slightly larger scope by combining code and instruction updates -> Keep implementation bounded to router integration and guidance only.

## Migration Plan

1. Update router dependency versions in the client package manifest.
2. Refactor route configuration and navigation usage where API changes require updates.
3. Run client build/test and manually verify core route flows.
4. Update instruction files that reference outdated router assumptions.
5. Prepare rollback by retaining a single commit boundary for dependency and routing changes so the update can be reverted cleanly if regressions appear.

## Open Questions

- Are there route-guard or nested-route behaviors in this codebase that require additional focused tests beyond core path rendering?

## Implementation Notes

- Router dependency is upgraded to `react-router-dom` `6.30.3`, which is the newest release line compatible with React 17.
- `react-router-dom` v7+ is intentionally out of scope for this change because it requires React 18 peers.
- Route configuration now includes an explicit wildcard fallback route that redirects unknown paths to `/`.
- Route parameter handling in `EditBlogView` was corrected so auth state comes from view props and only `blogId` is sourced from URL params.

## Rollback Confirmation

- Rollback remains feasible as a single revert path: revert this change's commit boundary to restore prior router dependency version, route config, and instruction guidance text together.