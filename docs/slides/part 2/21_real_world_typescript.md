---

# 10 Real World TypeScript

---

## 10.1 Project Setup

- Bootstrap
```typescript
tsc --init
```
- ...then harden:
```typescript
strict: true
noUncheckedIndexedAccess: true` // makes `arr[i]` be `T | undefined
exactOptionalPropertyTypes: true` // distinguishes missing from undefined
noImplicitOverride: true
```

---

- Pick a modern `target` (`ES2020+`) and `module` matching your runtime
- Share a base tsconfig in monorepos: 
```typescript
"extends": "@acme/tsconfig/base.json"
```
- Add ESLint with `@typescript-eslint` + Prettier from day one

---

## 10.2 Module & Import Patterns

- `import type` (type-only imports; erased by compiler):
  ```typescript
  import type { User } from "./types";
  ```
- Path aliases in tsconfig:
```json
{ "baseUrl": ".", "paths": { "@/*": ["src/*"] } }
```
- Bundler must also understand the aliases (Vite/tsconfig-paths/etc.)
- Barrel files (`index.ts` that re-exports everything) — nice DX, but hurts tree-shaking at scale

---

## 10.3 Declaration Files (`.d.ts`)

- Pure type declarations — no runtime code:
```typescript
// types.d.ts
declare module "legacy-lib" {
  export function doThing(x: number): string;
}
declare global {
  interface Window { __APP_VERSION__: string }
}
```
- Ship your library with `"declaration": true` so consumers get types

---

## 10.3 Declaration Files (`.d.ts`)

- To type untyped packages without owning them:
```
declare module "x" { ... }
``` 
- Augment existing modules (e.g. add a property to Express `Request`)

---

## 10.4 Migrating JS → TS

- Incremental rename: `.js` → `.ts`, fix errors, commit, repeat
- Enable `allowJs: true` and `checkJs: true` — get TS errors inside `.js`
- Use `// @ts-check` at the top of JS files for per-file opt-in
- Annotate with JSDoc while still in JS:
```javascript
/** @param {string} name @returns {string} */
function greet(name) { return `Hi ${name}`; }
```

---

- Start with `any` + `// @ts-expect-error`, tighten iteratively
- Convert "from the bottom up" — files with the most dependents first so downstream code benefits
- Matt Pocock's Sentry anecdote: utility files converted first unlock the rest

---

## 10.5 Working with 3rd-party Libs

- Prefer libraries that ship their own types (most modern ones do)
- Fall back to DefinitelyTyped: `npm install -D @types/lodash`
- No types available? Write a local ambient declaration:
```typescript
// shims.d.ts
declare module "weird-legacy-lib";
```

---
## 10.5 Working with 3rd-party Libs

- Augment existing module types via module declaration merging
- Patch types temporarily with `patch-package` if upstream is wrong

---

## 10.6 Testing with TS

- Jest + `ts-jest` or `@swc/jest`; Vitest has native TS support
- Type your fixtures — catches tests that drift from production shapes
- Type-level tests with `expect-type` or `tsd`:
  ```typescript
  import { expectTypeOf } from "expect-type";
  expectTypeOf(add(1, 2)).toEqualTypeOf<number>();
  ```
- Treat broken types as broken tests — gate CI on `tsc --noEmit`

---

## 10.7 Error Handling

- With `useUnknownInCatchVariables: true`, caught errors are `unknown`:
  ```typescript
  try { /* ... */ } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
  ```

---

- Model domain errors as discriminated unions or Result types:
  ```typescript
  type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };
  ```
- Prefer returning Results over throwing across public APIs — types stay honest

---

## 10.8 Performance

- `skipLibCheck: true` — skip `.d.ts` in `node_modules` (usually safe, big speedup)
- Prefer `interface` over `type` for very large object shapes (interface caching is faster)
- Project references + build mode (`tsc -b`) for monorepos

---
## 10.8 Performance

- Incremental builds: `"incremental": true` + committed build info file
- Debug slow builds with `tsc --extendedDiagnostics` or `--generateTrace`
