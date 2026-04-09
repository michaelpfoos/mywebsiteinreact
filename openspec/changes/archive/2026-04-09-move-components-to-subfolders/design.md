## Context

The current client component directory is flat (`client/src/components/*`). As more features are added, this layout makes ownership and related dependencies harder to identify, and import updates become noisy. The change should improve structure without changing user-facing behavior, route behavior, or server contracts.

## Goals / Non-Goals

**Goals:**
- Introduce a feature-oriented directory structure under `client/src/components`.
- Keep colocated CSS modules with their components after moves.
- Preserve existing behavior while updating all import references.
- Minimize migration risk by applying deterministic move and import-update steps.

**Non-Goals:**
- Refactoring component logic, props, or rendering behavior.
- Changing API requests, routes, authentication flow, or data shape.
- Introducing new runtime dependencies or a new state management pattern.

## Decisions

### Decision: Use feature-oriented subfolders under `client/src/components`
The components will be grouped by domain:
- `components/blog/`: `Blog`, `BlogIndex`, `BlogPost`, `EditBlog`, `PostBlog`, `DeleteButton`
- `components/auth/`: `Login`, `Registration`
- `components/layout/` (or `components/pages/`): `NavBar`, `Home`, `AboutMe`

Rationale:
- Matches how views consume components (blog/auth/layout concerns).
- Improves discoverability and local reasoning.

Alternatives considered:
- Keep flat structure and rely on naming conventions only: rejected because cognitive load continues to grow.
- Split by component type (forms, content, navigation): rejected because domain cohesion is weaker for this codebase.

### Decision: Update imports directly first, then optionally add barrel exports
Initial migration will update imports to explicit paths so resolution is clear. Barrel exports can be introduced afterward as a cleanup step.

Rationale:
- Reduces ambiguity during migration and makes failures easier to diagnose.

Alternatives considered:
- Add barrel exports first and update all imports to barrel immediately: rejected for initial move because it combines two change vectors.

### Decision: Execute migration in a single branch with verification after move
Perform file moves and import updates together, then run build/tests before merge.

Rationale:
- Avoids partial states where moved files exist but imports still point to old paths.

Alternatives considered:
- Multi-PR phased move: rejected for this scope because it increases temporary churn and conflicts.

## Risks / Trade-offs

- [Broken import paths after file move] -> Mitigation: update component-internal and view imports in one pass and run client build/tests.
- [Merge conflicts with active branches touching components] -> Mitigation: communicate migration timing and keep branch short-lived.
- [Folder naming mismatch (layout vs pages)] -> Mitigation: choose and document one folder convention before implementation starts.

## Migration Plan

1. Finalize folder naming (`layout` vs `pages`) and create target directories.
2. Move files and CSS modules into target subfolders.
3. Update imports in `client/src/views/*` and moved components.
4. Run client build/tests and fix path regressions.
5. Optional: add barrel exports and normalize imports if desired.
6. Validate no API/server files changed as part of this refactor.

Rollback:
- Revert the migration commit if unresolved import regressions are found.

## Open Questions

- Should `Home` and `AboutMe` live in `layout/` or `pages/` for this project’s naming style?
- Do we want to enforce folder and import style with lint rules in a follow-up change?