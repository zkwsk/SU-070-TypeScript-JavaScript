---

# Type Modifiers

---

## 4.1 readonly

- Blocks reassignment of the marked property
- Works on object properties, arrays, tuples, class fields:
```typescript
type Point = { readonly x: number; readonly y: number };
const p: Point = { x: 1, y: 2 };
// p.x = 3; // Error
```
- `readonly` on arrays removes mutating methods (`push`, `pop`, `splice`):
```typescript
const xs: readonly number[] = [1, 2, 3];
// xs.push(4); // Error
```

---
## 4.1 readonly

- `Readonly<T>` utility maps every property to readonly:
```typescript
type FrozenUser = Readonly<User>;
```
- Shallow only — nested objects still mutable unless you recurse
- `readonly` is compile-time; objects remain mutable at runtime unless `Object.freeze`

---

## 4.2 Optional (`?`)

- On parameters — makes argument optional:
```typescript
function greet(name?: string) {}
greet(); // allowed
```
- On properties — key may be absent entirely:
```typescript
type User = { name: string; email?: string };
```
- Pairs naturally with default values for ergonomic APIs
- Distinct from:
```typescript
email: string | undefined // key must be present (even if the value is `undefined`)
```

---

## 4.3 `public` / `private` / `protected`

- Access modifiers on class members:
```typescript
class User {
  public name: string;       // default
  private password: string;  // class only
  protected role: string;    // class + subclasses
  constructor(name: string, pw: string, role: string) {
    this.name = name;
    this.password = pw;
    this.role = role;
  }
}
```

---

- Parameter properties — shorthand for declare+assign:
```typescript
class User {
  constructor(public name: string, private password: string) {}
}
```
- `private` is TS-only (enforced at compile time) — at runtime the field is accessible via JS
- For true runtime privacy, use ECMAScript `#` fields:
```typescript
class User {
  #password: string;
  constructor(pw: string) { this.#password = pw; }
}
```

---

## 4.4 `static`

- Belongs to the class, not instances:
  ```typescript
  class Counter {
    static instances = 0;
    constructor() { Counter.instances++; }
  }
  ```
- Access with `ClassName.member`
- Use cases: factory methods, counters, shared constants, utility functions
- Static members can't reference class-level generic type parameters

---

## 4.5 `abstract`

- Class marked `abstract` cannot be instantiated directly — only extended
- Abstract methods declare a contract subclasses must implement:
  ```typescript
  abstract class Shape {
    abstract area(): number;
    describe() { return `Area: ${this.area()}`; }
  }
  class Circle extends Shape {
    constructor(public r: number) { super(); }
    area() { return Math.PI * this.r ** 2; }
  }
  ```
- Great for base classes with shared partial implementation + required slots

---

## 4.6 `override`

- Explicit marker that a method overrides a parent's:
  ```typescript
  class Animal { speak() {} }
  class Dog extends Animal {
    override speak() { console.log("woof"); }
  }
  ```
- With `noImplicitOverride: true` in tsconfig, omitting `override` on an override is an error
- Catches typos and silent behavior changes when parents are renamed

---

## Exercises (1/5)

1. Create a `Seat` type with readonly `row: string` and `number: number`, and an optional `reserved: boolean`. Try to change `row`.
2. Create `const hall: readonly Seat[]`. Try `hall.push(...)`, then add a seat to a new array with spread syntax instead.

---

## Exercises (2/5)

3. Create one type with `email?: string` and one with `email: string | undefined`. Which of them accepts `{}`?

---

## Exercises (3/5)

4. Create a class `Ticket` with the parameter properties `public movie`, `private price` and `protected seat`. Try to read `ticket.price` outside the class.

---

## Exercises (4/5)

5. Add a `static issued` counter that goes up in the constructor, and a static factory `Ticket.complimentary(movie, seat)`.
6. Create `abstract class Screening` with `abstract ticketPrice(): number` and a `summary()` method. Implement `StandardScreening` and `ImaxScreening`.

---

## Exercises (5/5)

7. Change `summary()` in `ImaxScreening` using `override`. Turn on `noImplicitOverride` and remove the keyword. What happens?
