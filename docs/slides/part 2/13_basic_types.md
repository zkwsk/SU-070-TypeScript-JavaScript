---

# 2. Basic Types

---

## 2.1 Primitive Types

- Seven primitives: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- Annotate explicitly when needed; otherwise let TS infer:
  ```typescript
  let name: string = "Mike";   // explicit
  let age = 30;                // inferred as number
  let isAdmin: boolean = true;
  ```
- Inference is usually the right default — annotate on function params, returns, and public APIs

---

- `any` — opts out of type checking entirely; silently accepts everything; avoid except as a last resort
- `unknown` — the "type-safe any"; must be narrowed before use:
  ```typescript
  function parse(input: unknown) {
    if (typeof input === "string") {
      return input.toUpperCase(); // narrowed to string
    }
  }
  ```
- `never` — bottom type; represents a value that can never exist (e.g. function that throws or infinite loops)
- `void` — function returns nothing meaningful; distinct from `undefined`

---

## 2.2 Arrays & Tuples

- Two array syntaxes (equivalent):
  ```typescript
  const nums: number[] = [1, 2, 3];
  const nums2: Array<number> = [1, 2, 3];
  ```
- Mixed arrays via unions: `(string | number)[]`

---

- Tuples — fixed length, fixed types per index:
```typescript
const pair: [string, number] = ["age", 30];
```
- Labeled tuples (improves hover docs):
```typescript
type RGB = [r: number, g: number, b: number];
```
- Rest in tuples: 
```typescript
type Args = [cmd: string, ...flags: string[]];
```

---

- Readonly arrays:
```typescript
const frozen: readonly number[] = [1, 2, 3];
// frozen.push(4); // Error: push doesn't exist on readonly
```
- `as const` — deeply freezes a literal into a readonly tuple of literal types:
```typescript
const COLORS = ["red", "green", "blue"] as const;
// type: readonly ["red", "green", "blue"]
type Color = typeof COLORS[number]; // "red" | "green" | "blue"
```

---

## 2.3 Objects

- Object shape inline:
```typescript
let user: { name: string; age: number } = { name: "Mike", age: 30 };
```
- Optional properties with `?`:
```typescript
type User = { name: string; age?: number };
```
- `readonly` on properties:
```typescript
type Point = { readonly x: number; readonly y: number };
```

---

- Excess property checks on object literals — catches typos:
```typescript
// Error: 'nmae' does not exist on type '{ name: string }'
const u: { name: string } = { nmae: "Mike" };
  ```
- Index signatures for dynamic keys:
```typescript
type Scores = { [player: string]: number };
```
- Combine fixed + index: 
```typescript
{
  total: number; // total must be present
  [month: string]: number // in addition, there can be other keys which must have number values
}
```

---

## 2.4 Type Aliases & Interfaces

- `type` alias — flexible, can alias anything:
```typescript
type ID = string | number;
type User = { name: string; id: ID };
```
- `interface` — describes object shapes; can be re-opened:
```typescript
interface User { name: string }
interface User { age: number } // declaration merging
// User now has both name and age
```

---

- Differences to remember:
  - `interface` can declare-merge (declare interface multiple times)
  - `type` can alias unions, primitives, tuples; `interface` cannot
  - Both support extension:
```typescript
interface Admin extends User { role: "admin" }
type Admin2 = User & { role: "admin" };
```

---

  - Error messages with `interface` are sometimes clearer
- Rule of thumb: `interface` for public object shapes (esp. in libraries), `type` for unions, intersections, mapped/conditional types

---

## 2.5 Literal & Union Types

- Literal types — a specific value as a type:
  ```typescript
  let dir: "up" | "down" | "left" | "right";
  let answer: 42;
  ```
- Unions — any one of several types:
  ```typescript
  type ID = string | number;
  type Status = "idle" | "loading" | "success" | "error";
  ```
- Great for state machines, enums without the `enum` keyword, variant modeling

---

## 2.5 Literal & Union Types

- Derive unions from runtime data with `as const`:

```typescript
const STATUSES = ["idle", "loading", "success", "error"] as const;
type Status = typeof STATUSES[number]; // literal union
```
