---

# 8 Type Programming

---

## 8.1 keyof & typeof

- `keyof T` — union of T's property names:
```typescript
type User = { id: string; name: string; age: number };
type UserKey = keyof User; // "id" | "name" | "age"
```
- `typeof` at type level — get the static type of a runtime value:
```typescript
const config = { port: 3000, host: "localhost" };
type Config = typeof config; // { port: number; host: string }
```

---
## 8.1 keyof & typeof

- Combined `keyof typeof` — turn an object's keys into a union:
```typescript
const STATUS = { idle: 0, loading: 1, done: 2 } as const;
type StatusKey = keyof typeof STATUS; // "idle" | "loading" | "done"
```

---

## 8.2 Indexed Access Types

```typescript
type User = { name: string, age: number}
```
- `T[K]` — the type of property `K` in `T`:
```typescript
type UserName = User["name"]; // string
```
- Works with unions of keys:
```typescript
type UserFields = User["name" | "age"]; // string | number
```

---
## 8.2 Indexed Access Types

- Combined with `keyof`:
```typescript
type UserValues = User[keyof User]; // string | number
```
- Access array element type:
```typescript
type Item = User[]["length"]; // number
type Elem = (typeof items)[number]; // element type of an array
```

---

## 8.3 Template Literal Types

- Compose string types at the type level:
```typescript
type Greeting = `hello ${string}`;
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"
```
- Intrinsic helpers: `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, `Uncapitalize<T>`
- Enables typed route params, event names, CSS-in-JS keys:
```typescript
type Route = `/users/${string}` | `/posts/${number}`;
```

---

## 8.4 Recursive Types

- Types that reference themselves:
```typescript
type JSONValue =
  | string | number | boolean | null
  | JSONValue[]
  | { [key: string]: JSONValue };
```
- Common patterns: deep partial, deep readonly, nested tree, path types
- TS enforces depth limits to keep the compiler fast:
```typescript
type Flatten<T> = T extends (infer E)[] ? Flatten<E> : T;
```

---

## 8.5 infer Keyword

- Declare a type variable inside `extends`:
```typescript
type ReturnType<F>      = F extends (...a: any) => infer R ? R : never;
type FirstArg<F>        = F extends (a: infer A, ...rest: any) => any ? A : never;
type ElementOf<T>       = T extends (infer E)[] ? E : never;
type AwaitedOf<T>       = T extends Promise<infer U> ? U : T;
```
- Only valid inside a conditional type's true branch
- Backbone of `ReturnType`, `Parameters`, `Awaited`, etc.

---

## 8.6 Distributive Conditional Types

- When the checked type is a naked type param, a conditional distributes over unions:
```typescript
type ToArray<T> = T extends any ? T[] : never;
type R = ToArray<string | number>; // string[] | number[]
```
- Opt out by wrapping in a tuple:
```typescript
type ToArray2<T> = [T] extends [any] ? T[] : never;
type R2 = ToArray2<string | number>; // (string | number)[]
```
- This is why `Exclude`, `Extract`, and `NonNullable` work the way they do
