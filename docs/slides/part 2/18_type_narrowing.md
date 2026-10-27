---

# 7 Type Narrowing

---

## 7.1 typeof Narrowing

- `typeof x === "string"` narrows `x` to `string` in the true branch:
```typescript
function format(x: string | number) {
  if (typeof x === "string") return x.toUpperCase(); // string
  return x.toFixed(2);                               // number
}
```
---

## 7.2 instanceof Narrowing

- Narrows to a class / built-in constructor:
  ```typescript
  if (x instanceof Date) {
    console.log(x.toISOString()); // x: Date
  }
  ```
- Works across module boundaries as long as the same prototype is used
- Fails across iframes / realms — use a structural guard for cross-realm values

---

## 7.3 in Operator

- Narrows by checking property presence:
  ```typescript
  type Cat = { meow(): void };
  type Dog = { bark(): void };
  function speak(a: Cat | Dog) {
    if ("meow" in a) a.meow();
    else a.bark();
  }
  ```
- Great for untagged unions where you can't add a `kind` discriminant

---

## 7.4 Equality Narrowing

- `===` and `!==` narrow both operands:
  ```typescript
  function cmp(x: string | number, y: string | boolean) {
    if (x === y) {
      // x and y both narrowed to string
    }
  }
  ```
- Literal equality narrows unions to that literal

---

## 7.5 Truthiness Narrowing

- `if (x)` removes falsy members:
  ```typescript
  function len(s: string | null | undefined) {
    if (s) return s.length; // narrowed to string
    return 0;
  }
  ```
- Gotcha: `0`, `""`, `NaN` are also falsy — may drop valid values
- Prefer explicit `x != null` when you want to keep empty strings/zero

---

## 7.6 Type Predicates

- User-defined guards via `x is T` return type:
  ```typescript
  function isString(x: unknown): x is string {
    return typeof x === "string";
  }
  const arr = ["a", 1, "b"];
  const strings = arr.filter(isString); // string[]
  ```
- You must get the runtime check right — TS trusts the predicate blindly

---

## 7.7 Assertion Functions

- Throw on failure, narrow on success:
  ```typescript
  function assertIsString(x: unknown): asserts x is string {
    if (typeof x !== "string") throw new Error("not a string");
  }
  function use(x: unknown) {
    assertIsString(x);
    x.toUpperCase(); // narrowed to string
  }
  ```
---

- `asserts cond` variant narrows based on a boolean expression:
  ```typescript
  function assert(cond: unknown): asserts cond {
    if (!cond) throw new Error();
  }
  ```

---

## 7.8 Discriminated Union Narrowing

- Switch or if on a shared literal tag narrows automatically:
  ```typescript
  type Result =
    | { status: "ok"; data: string }
    | { status: "error"; message: string };

  function handle(r: Result) {
    if (r.status === "ok") return r.data;
    return r.message;
  }
  ```
- Gold standard for modeling state, API responses, reducers actions

---

## 7.9 Exhaustiveness Checks

- Assign the fall-through value to `never` to force all cases to be handled:
  ```typescript
  function area(s: Shape): number {
    switch (s.kind) {
      case "circle": return Math.PI * s.radius ** 2;
      case "square": return s.side ** 2;
      default:
        const _exhaustive: never = s; // compile error if Shape grows
        return _exhaustive;
    }
  }
  ```
- Make this a habit for state machines and action reducers

---

## 7.10 Control-Flow Analysis

- TS tracks narrowing through branches, assignments, returns, throws
- Reassignment can widen the type back to the declared one
- Narrowing persists into closures only when the variable is `const`
- `let` narrowing may be lost if TS can't prove it wasn't reassigned between use and narrow

---

## 7.11 never

- Bottom type — no value can inhabit it
- Return type of functions that always throw / loop forever:
  ```typescript
  function fail(msg: string): never { throw new Error(msg); }
  ```
- Unions with `never` collapse: `string | never === string`
- Indispensable for exhaustiveness checks and filtering in mapped types

---

## 7.12 unknown vs any

- `any` — opt out of checking; propagates; dangerous
- `unknown` — safe top type; must be narrowed before use:
  ```typescript
  async function loadUser(): Promise<User> {
    const raw: unknown = await (await fetch("/user")).json();
    if (isUser(raw)) return raw;
    throw new Error("bad shape");
  }
  ```
- Always prefer `unknown` for external/untrusted data (JSON, params, user input)
