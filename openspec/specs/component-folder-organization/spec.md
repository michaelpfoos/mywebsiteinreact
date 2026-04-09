## Purpose
Define how React components are organized under `client/src/components` to improve discoverability and maintain import reliability after restructuring.

## Requirements

### Requirement: Components SHALL be grouped by feature-oriented subfolders
The client codebase MUST organize React components under `client/src/components` using feature-oriented subfolders so related components and style modules are colocated.

#### Scenario: Existing components are moved into domain folders
- **WHEN** the component directory is reorganized
- **THEN** page/layout components (`Home`, `AboutMe`, `NavBar`) are placed in a page or layout folder
- **AND** blog components (`Blog`, `BlogIndex`, `BlogPost`, `EditBlog`, `PostBlog`, `DeleteButton`) are placed in a blog folder
- **AND** auth components (`Login`, `Registration`) are placed in an auth folder

### Requirement: Imports MUST remain valid after component moves
After components are moved, all imports in the client application MUST resolve to the new file locations without runtime or build errors caused by stale paths.

#### Scenario: Views compile with updated component imports
- **WHEN** views import components from `client/src/components`
- **THEN** each import path references the new subfolder location
- **AND** the client build and tests do not fail due to missing module resolution for moved component files
