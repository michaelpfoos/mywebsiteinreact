## MODIFIED Requirements

### Requirement: Client routing dependency SHALL be upgraded to the newest supported release
The client application MUST use the newest stable `react-router-dom` release that is compatible with the upgraded `react` and `react-dom` versions and repository runtime constraints.

#### Scenario: Dependency manifest reflects upgraded router and React baseline
- **WHEN** the client dependency manifest is reviewed after the change
- **THEN** `react`, `react-dom`, and `react-router-dom` versions are aligned to the newest mutually compatible stable set

### Requirement: Navigation interactions SHALL remain compatible with upgraded APIs
Client navigation and route parameter handling MUST be updated as needed so runtime navigation continues to work with upgraded React Router APIs and React rendering behavior.

#### Scenario: In-app navigation succeeds with upgraded router and React
- **WHEN** users trigger existing links, redirects, or programmatic navigation
- **THEN** navigation completes to intended routes without runtime errors or compatibility warnings caused by outdated APIs