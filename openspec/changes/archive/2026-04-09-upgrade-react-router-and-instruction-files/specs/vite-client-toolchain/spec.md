## MODIFIED Requirements

### Requirement: Migration MUST preserve client runtime behavior
Client dependency and routing upgrades MUST preserve existing client routes and core feature behavior so end-user functionality remains equivalent after maintenance updates.

#### Scenario: Core routes remain functional
- **WHEN** the upgraded client is run
- **THEN** existing key routes (home, auth, blog listing, blog create/edit, blog post detail) render and function without upgrade-caused regressions

## ADDED Requirements

### Requirement: Repository guidance MUST reflect supported router baseline
Instruction files that define client implementation constraints MUST align with the current supported React Router baseline after dependency upgrades.

#### Scenario: Instruction files no longer reference outdated router constraints
- **WHEN** contributors consult repository instruction files for client work
- **THEN** router-version guidance reflects the upgraded supported baseline and does not instruct preservation of outdated router assumptions