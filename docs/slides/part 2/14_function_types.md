---

# 3 Function Types

---

## 3.1 Function Signatures

- Annotate parameters and return type:
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
- Return types are usually inferred (annotate on public APIs)
- Arrow functions work identically:
```typescript
const add = (a: number, b: number): number => a + b;
```

---

## 3.1 Function Signatures

- Extract as a reusable function type:
```typescript
type BinaryOp = (a: number, b: number) => number;
const mul: BinaryOp = (a, b) => a * b; // params inferred
```
- `void` return — caller shouldn't use the value:
```typescript
function log(msg: string): void { console.log(msg); }
```

---

## 3.2 Optional & Default Params

- Optional parameters with `?` — implicit `T | undefined`:
```typescript
function greet(name?: string) {
  return `Hi ${name ?? "stranger"}`;
}
```
- Default values — param becomes optional and its type is inferred:
```typescript
function greet(name = "world") { /* name: string */ }
```
- Optional must come after required — otherwise call-site ergonomics break

---

## 3.2 Optional & Default Params

- Rest parameters — typed as array:
```typescript
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```
- Destructured params with types:
```typescript
function createUser({ name, age = 0 }: { name: string; age?: number }) {}
```

---

## 3.3 Overloads

- Declare multiple call signatures + one implementation:
```typescript
function parse(input: string): object;
function parse(input: object): string;
function parse(input: string | object): string | object {
  return typeof input === "string" ? JSON.parse(input) : JSON.stringify(input);
}
```
- Use when the return type genuinely depends on argument shape/type
- Often replaceable (and cleaner) with generics or conditional types

---

## 3.4 `this` in Functions

- Arrow functions lexically inherit `this` — no own binding
- Regular `function` — `this` depends on call site (method vs detached vs `.call()`)
- Type `this` as a fake first parameter:
  ```typescript
  function handleClick(this: HTMLButtonElement, ev: MouseEvent) {
    this.disabled = true; // typed correctly
  }
  ```

---

- Utility types: 
```typescript
  ThisParameterType<F>`,
  OmitThisParameter<F>
````
- In class methods TS types `this` automatically as the class type

---

## 3.5 Generics in Functions

- Introduce a type parameter to capture the input type:
```typescript
function identity<T>(x: T): T { return x; }
const n = identity(42);     // T inferred as number
const s = identity<string>("hi"); // explicit
```
- Common pattern — preserve array element type:
```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

---

- Constrain type parameters with `extends`:
```typescript
function prop<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```
- Multiple params and defaults:
```typescript
function pair<T, U = T>(a: T, b: U): [T, U] {
  return [a, b];
}
```
- Inference usually "just works" — only annotate when TS picks a too-wide type

---

## Exercises (1/4)

1. Create a function type `PriceCalculator` that takes `basePrice` and `seats` and returns a number. Implement `standardPrice` and `studentPrice` (20% off) with it.
2. Write `totalPrice(...prices: number[]): number`.

---

## Exercises (2/4)

3. Write `bookSeats(movie: string, seats = 1, note?: string)`. Call it with one, two and three arguments.
4. Write `createBooking({ movie, seats })`, where `seats` is optional and defaults to `1`.

---

## Exercises (3/4)

5. Give `toUpper` two overloads: a `string` returns a `string`, and a `string[]` returns a `string[]`.
6. Write a generic `last<T>(items: T[]): T | undefined`. Which type do you get back for a `number[]`?

---

## Exercises (4/4)

7. Write a generic `pluck` that returns one property from every item:
```typescript
const movies = [
  { title: "Dune", year: 2021 },
  { title: "Alien", year: 1979 },
];
const titles = pluck(movies, "title"); // string[]
const years = pluck(movies, "year");   // number[]
// pluck(movies, "rating");            // compile error
```
