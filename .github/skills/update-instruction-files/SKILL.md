# Skill: Update Instruction Files

**Use this skill when**: A completed OpenSpec change affects the project's tech stack, architecture, or introduces new patterns that should be documented in instruction files for future work.

**Goal**: Ensure that scoped instruction files (`.github/instructions/*.md`) stay synchronized with architectural decisions, so future agents working in those areas have up-to-date guidance.

---

## When to Apply This Skill

After implementing a change that modifies:
- Build tooling or dev server setup (e.g., CRA → Vite)
- Language versions, frameworks, or major libraries
- API contracts or protocol conventions
- Folder structure, naming patterns, or asset handling
- Environment variable conventions or configuration

## Steps

### 1. Identify Affected Scopes

Determine which instruction files should be updated based on the change:

- **client.instructions.md**: Frontend framework, build tooling, dev environment, styling, routing, component patterns
- **server.instructions.md**: API conventions, database models, authentication, file uploads, route patterns
- **AGENTS.md**: New specialized agent modes or workflows introduced by the change

### 2. Review Current Instruction Content

Read the relevant instruction file(s) to understand their current scope and style.

**Questions to ask:**
- Does it mention specific tech stack versions or names?
- Does it describe build/test/deploy commands?
- Does it explain naming conventions or patterns?
- Are there references to deprecated or changed approaches?

### 3. Plan Changes

Document which lines/sections need updating:

- **Version/tool names**: Update references to old tooling (e.g., "Create React App" → "Vite")
- **Commands**: Update dev/build commands with new syntax
- **Environment variables**: Update naming conventions (e.g., `REACT_APP_*` → `VITE_*`)
- **Patterns**: Update guidance on how to use new features or follow new conventions
- **Preserve scope**: Keep instructions focused on *that folder's concerns* — don't introduce server/client cross-talk

### 4. Apply Updates

Edit the instruction file(s) with clear, concise guidance:
- Use bullet points for quick reference
- Include concrete examples (e.g., `npm run dev` vs `npm run build`)
- Link to AGENTS.md or SKILL files if new specialized guidance exists
- Update description in frontmatter if the high-level scope changed

### 5. Test Understanding

After updating, verify:
- An agent reading the updated file would understand how to work in that scope now
- Commands and patterns are accurate for the current state
- Preserved existing guidance that still applies (don't over-rewrite)

---

## Example: CRA → Vite Migration

**Changes made to `client.instructions.md`:**
- Updated description from "CRA frontend" → "Vite frontend"
- Updated title: "Create React App application" → "Vite-powered React application"
- Added Vite-specific commands: `npm run dev`, `npm run build`, `npm run preview`
- Added environment variable guidance: `VITE_` prefix and `import.meta.env.VITE_*` access pattern
- Preserved unchanged items: React 17, react-router-dom v6, component structure, API verification

---

## Integration with OpenSpec Changes

**Recommended**: Include an explicit task in future OpenSpec proposals for architecture changes:

```markdown
## 5. Update Documentation and Guidance

- [ ] Update `.github/instructions/<scope>.instructions.md` if this change affects how developers work in that folder
- [ ] Update `AGENTS.md` if this introduces new specialized workflows or constraints
```

This ensures toolchain changes are tracked alongside code changes.

---

## Quick Reference Checklist

- [ ] Identified which instruction files are affected
- [ ] Reviewed current content in each file
- [ ] Updated tool/version names with new ones
- [ ] Updated command syntax (dev, build, test, deploy)
- [ ] Updated environment variable conventions
- [ ] Preserved guidance that still applies
- [ ] Verified instructions are clear and actionable
