## ADDED Requirements

### Requirement: Client build toolchain SHALL use Vite
The client application MUST use Vite as the development and production build toolchain instead of Create React App tooling.

#### Scenario: Vite development server starts successfully
- **WHEN** a developer runs the client development command
- **THEN** a Vite-powered dev server starts without requiring `react-scripts`

#### Scenario: Vite production build completes
- **WHEN** a production build is run for the client
- **THEN** the build completes successfully using Vite tooling

### Requirement: Migration MUST preserve client runtime behavior
The migration MUST preserve existing client routes and core feature behavior so end-user functionality remains equivalent after toolchain replacement.

#### Scenario: Core routes remain functional
- **WHEN** the migrated client is run
- **THEN** existing key routes (home, auth, blog listing, blog create/edit) render and function without migration-caused regressions

### Requirement: Environment variable usage MUST be Vite-compatible
Client-exposed environment variables MUST follow Vite conventions and be accessible through Vite-supported runtime access.

#### Scenario: Client configuration values resolve at runtime
- **WHEN** the client reads build-time environment variables
- **THEN** values resolve through Vite-compatible conventions and do not depend on CRA-only behavior

### Requirement: Migration MUST maintain backend integration compatibility
The migrated client MUST continue to communicate with existing Express API endpoints without requiring backend contract changes.

#### Scenario: API integration remains unchanged
- **WHEN** the client performs existing API requests for auth and blog features
- **THEN** requests continue to work against current server routes and payload contracts