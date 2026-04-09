## MODIFIED Requirements

### Requirement: Client build toolchain SHALL use Vite
The client application MUST continue to use Vite as the development and production build toolchain and MUST remain compatible with the upgraded React and router dependency baseline.

#### Scenario: Vite build remains compatible with upgraded React stack
- **WHEN** developers run client dev or production build commands after dependency upgrades
- **THEN** Vite tooling starts and builds successfully without framework-version incompatibility errors

### Requirement: Repository guidance MUST reflect supported router baseline
Instruction files that define client implementation constraints MUST align with the current supported React and router baseline after dependency upgrades.

#### Scenario: Instruction files reflect upgraded React and router guidance
- **WHEN** contributors consult repository instruction files for client work
- **THEN** guidance reflects the upgraded React/router baseline and avoids outdated version assumptions