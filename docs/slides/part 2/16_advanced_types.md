---

# 5 Advanced Types

---

## 5.1 Intersections

- Combine multiple types — all members required:
```typescript
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // { name: string; age: number }
```
- Mixin pattern — compose shapes instead of extending classes:
```typescript
type WithId<T> = T & { id: string };
type UserWithId = WithId<User>;
```

---
## 5.1 Intersections

- Conflicting member types produce `never`:
```typescript
type Bad = { x: string } & { x: number }; // x: never
```
- Useful for adding meta-fields, merging request/response shapes, extending library types

---

## 5.2 Discriminated Unions

- A union of object types that share a common literal "tag":
```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rect"; width: number; height: number };

function area(s: Shape) {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "square": return s.side ** 2;
    case "rect":   return s.width * s.height;
  }
}
```

---

## 5.3 Conditional Types

- Type-level `if/else`:
```typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<"hi">; // true
type B = IsString<42>;    // false
```
- Distribute over unions when the checked type is a naked type param:
```typescript
type NonNull<T> = T extends null | undefined ? never : T;
type X = NonNull<string | null>; // string
```

---

- `infer` extracts parts:
  ```typescript
  type ReturnType<F> = F extends (...args: any) => infer R ? R : never;
  type Elem<T>       = T extends (infer E)[] ? E : never;
  ```
- Foundation of most utility types (Exclude, Extract, ReturnType, Parameters)

---

## 5.4 Mapped Types

- Iterate keys of a type and transform values:
```typescript
type Partial<T>  = { [K in keyof T]?: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type Mutable<T>  = { -readonly [K in keyof T]: T[K] };
```
- Modifier syntax: `+readonly` / `-readonly` / `+?` / `-?`
- Key remapping via `as`:
```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
```
---

- Combine with conditional types to filter keys:
```typescript
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
```

---

## Exercises (1/3)

1. Create a `Timestamps` type (`createdAt`, `updatedAt`) and a generic `WithTimestamps<T>` using an intersection. Use it to create `StoredMovie`.
2. Hover over `{ id: string } & { id: number }`. What is the type of `id`, and why?

---

## Exercises (2/3)

3. Model a `Payment` as a discriminated union of `"card"` (`last4`), `"mobilepay"` (`phone`) and `"voucher"` (`code`). Write `describePayment` with a `switch`.
4. Write a conditional type `IsArray<T>`. Then write `ElementType<T>` with `infer`, so `ElementType<string[]>` is `string`.

---

## Exercises (3/3)

5. Write a mapped type `Nullable<T>` where every property can also be `null`.
6. Write a mapped type `Setters<T>` that turns `{ title: string; year: number }` into:
```typescript
{
  setTitle: (value: string) => void;
  setYear: (value: number) => void;
}
```
