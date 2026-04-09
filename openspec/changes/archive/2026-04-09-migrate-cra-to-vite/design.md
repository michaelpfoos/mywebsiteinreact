## Context

The React client currently uses Create React App (`react-scripts`) while the rest of the repository is an Express backend with unchanged API contracts. CRA is feature-stable but less aligned with current frontend tooling. A migration to Vite is a build-tool replacement, not a product feature change, so the core requirement is preserving existing runtime behavior while changing developer/build infrastructure.

## Goals / Non-Goals

**Goals:**
- Migrate `client/` from CRA to Vite with React support.
- Preserve existing routes, component behavior, API calls, and static asset usage.
- Improve local startup/build performance and keep CI/deploy build steps reliable.
- Document any required environment variable naming updates.

**Non-Goals:**
- Redesign UI or alter user-facing feature behavior.
- Change backend APIs, authentication model, or database behavior.
- Introduce unrelated dependency upgrades outside migration requirements.

## Decisions

1. Use Vite with React plugin as the standard client toolchain.
- Rationale: Minimal, well-supported migration path for React projects.
- Alternative considered: stay on CRA with custom overrides; rejected due to long-term maintenance friction.

2. Keep source layout and application entry behavior functionally equivalent.
- Rationale: Reduces migration risk and regression surface.
- Alternative considered: simultaneous folder/architecture refactor; rejected to keep change isolated.

3. Translate environment access to Vite conventions where needed.
- Rationale: Vite uses `import.meta.env` and `VITE_` prefixes for exposed client variables.
- Alternative considered: compatibility shim everywhere; rejected as unnecessary complexity.

4. Preserve output/deploy compatibility via explicit script updates and verification.
- Rationale: Build tooling changes can break CI/deploy pipelines even when app code is unchanged.
- Alternative considered: defer CI/deploy verification; rejected due to risk of late failure.

## Risks / Trade-offs

- [Env variable mismatch] Existing `REACT_APP_*` variables may not map automatically. -> Mitigation: Inventory and migrate required vars to `VITE_*`, then verify runtime usage.
- [Asset/import edge cases] CRA-specific import assumptions may fail under Vite resolution. -> Mitigation: Run full build and smoke-test critical routes.
- [Deployment path differences] Hosting may assume CRA output patterns. -> Mitigation: Validate generated build artifact locations and update deploy scripts if required.
- [Dependency drift] Migration may trigger transitive version conflicts. -> Mitigation: Keep package changes minimal and lock versions intentionally.

## Migration Plan

1. Replace CRA dev/build scripts with Vite scripts in `client/package.json`.
2. Add Vite config and React plugin; remove `react-scripts` usage.
3. Update HTML entry and environment variable access for Vite conventions.
4. Run local dev server and production build; fix compatibility issues.
5. Validate core user flows (home, auth, blog list/post/edit).
6. Update documentation/CI commands to use Vite.
7. Rollback strategy: restore prior `client/package.json` scripts/dependencies and CRA entry configuration from git if regression is discovered.

## Open Questions

- Which deployment target consumes the client build output, and does it require path/config changes after migration?
- Are there existing `REACT_APP_*` vars currently used in runtime that must be mapped before implementation starts?