## ADDED Requirements

### Requirement: Client routing dependency SHALL be upgraded to the newest supported release
The client application MUST use the newest stable `react-router-dom` release that is compatible with the repository runtime and React version constraints.

#### Scenario: Dependency manifest reflects upgraded router version
- **WHEN** the client dependency manifest is reviewed after the change
- **THEN** `react-router-dom` is pinned to the newest compatible stable version

### Requirement: Route behavior MUST remain functionally equivalent after upgrade
Upgrading router dependencies MUST preserve existing route-level user behavior for core application pages.

#### Scenario: Core routes render expected views
- **WHEN** a user navigates to existing home, auth, blog listing, blog detail, and blog create/edit paths
- **THEN** each path resolves and renders the expected view without upgrade-caused regressions

### Requirement: Navigation interactions SHALL remain compatible with upgraded APIs
Client navigation and route parameter handling MUST be updated as needed so runtime navigation continues to work with the upgraded router APIs.

#### Scenario: In-app navigation succeeds with upgraded router
- **WHEN** users trigger existing links, redirects, or programmatic navigation
- **THEN** navigation completes to the intended routes without runtime errors