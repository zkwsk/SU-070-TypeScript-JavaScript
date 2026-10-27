---
# TypeScript Course

---

# 1 - Setup

---

## 1.1 Introduction

- TypeScript = JavaScript + a static type system layered on top; all valid JS is valid TS
- TS is transpiled down to plain JS; the type system is erased at build time
- Course progression: core language → type modifiers → advanced types → utility types → narrowing → type-level programming → OOP → real-world patterns

---

- Goals:
  - Master every feature of the type system, from primitives to conditional/mapped types
  - Learn idiomatic, production-grade TS (not just syntax)
  - Build the muscle to read library types (React, tRPC, Zod, etc.)
  - Integrate TS with tooling: ESLint, bundlers, test runners, CI
- Who it's for: JS developers who want type safety; teams scaling codebases beyond what JSDoc can handle

---

- Value proposition:
  - Errors caught at compile time instead of 3 AM pager alerts
  - Self-documenting code — types are the first-class docs
  - Editor superpowers: autocomplete, rename, go-to-definition, extract refactor
  - Onboarding: new devs can hover over any symbol and learn the API
  - Safer refactors: change a type, get a list of every call site to fix

---
 
## 1.2 Installing TypeScript

- Global install (handy for one-offs): `npm install -g typescript`
- Per-project (preferred in real apps — pins the version):
```bash
npm install --save-dev typescript
```

---

- Binary is `tsc` — the TypeScript compiler
- Bootstrap a config: 
```bash
tsc --init
```
- Generates a commented `tsconfig.json`
- Compile a file: `tsc file.ts` → emits `file.js`
- Watch mode for dev loops: 
```bash
tsc --watch
```
- Type-check only (no emit — common in CI):
```bash
tsc --noEmit
```
---

## 1.3 tsconfig.json

- Central compiler config — describes files, targets, and strictness
---
- Key options and why they matter:
  - `target`: JS version to emit (`ES2020`, `ESNext`)
  - `module`: module format (`CommonJS`, `ESNext`)
  - `strict: true` — enables all strict flags
  - `noUncheckedIndexedAccess: true`
  - `outDir` / `rootDir` — where source lives
  - `include` / `exclude` — glob-based file selection
  - `lib` — ambient libraries available (`DOM`, `ES2020`, `WebWorker`)
  - `jsx` — JSX handling (`react-jsx` for modern React)
---
  - `esModuleInterop: true` — lets you `import x from "cjs-module"` cleanly
  - `skipLibCheck: true` — skip type-check of `node_modules` `.d.ts` (speeds up builds)
  - `paths` + `baseUrl` — path aliases like `@/components/*`
  - `declaration: true` — emits `.d.ts` files for library authors
---
- Example:
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "ESNext",
      "strict": true,
      "noUncheckedIndexedAccess": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "outDir": "./dist",
      "paths": { "@/*": ["./src/*"] }
    },
    "include": ["src"]
  }
  ```
---

- Enable strict mode from day one — retrofitting later is exponentially more painful

---

## 1.4 Running TypeScript

- `tsc` only transpiles — it doesn't run code
- Options to execute TS:
  - Compile then run: `tsc && node dist/index.js`
  - Run directly via `ts-node` (classic) or `tsx` (modern, faster)
  - Bundle with Vite / esbuild / swc — they strip types and bundle in one pass
  - Deno / Bun support TS natively, no extra setup
---
- For library authors: ship JS + `.d.ts` declaration files; consumers never see your `.ts`
- For apps: usually a bundler handles everything; 
- Source maps (`sourceMap: true`) let debuggers map emitted JS back to your TS

---

## 1.5 Editor & Tooling

- VS Code is the de-facto editor — TS is developed by the same team
- Essential features out of the box: hover types, go-to-def, find-all-refs, rename symbol, inline errors, code actions
- Pair TS with:
  - ESLint + `@typescript-eslint/parser` + `@typescript-eslint/eslint-plugin` for lint rules

---

  - Prettier for formatting (separate concern — doesn't type-check)
  - Husky + lint-staged to enforce `tsc --noEmit` and lint on commit
- Workspace TS vs bundled TS: use "TypeScript: Select Version" so every dev uses the project's pinned version
- CI gate: `tsc --noEmit` + `eslint .` + tests — no merges unless all three pass
