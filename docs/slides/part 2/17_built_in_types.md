---

# 6 Built In Types

---

## 6.1 Partial & Required

- `Partial<T>` — every property optional:
```typescript
type UserPatch = Partial<User>; // all fields optional
function update(id: string, patch: Partial<User>) {}
```
- `Required<T>` — strip optionality from every property:
```typescript
type StrictUser = Required<User>;
```

---

## 6.2 Pick & Omit

- `Pick<T, K>` — keep only listed keys:
```typescript
type UserPreview = Pick<User, "id" | "name">;
```
- `Omit<T, K>` — drop listed keys:
```typescript
type PublicUser = Omit<User, "password" | "email">;
```
- Great for deriving DTOs, form models, API response types

---

- Note: standard `Omit` does NOT distribute across unions — use a custom `UnionOmit`:
  ```typescript
  type UnionOmit<T, K extends PropertyKey> =
    T extends unknown ? Omit<T, K> : never;
  ```

---

## 6.3 Record

- `Record<K, V>` — object keyed by `K` with values of type `V`:
```typescript
type Scores = Record<string, number>;
type RouteMap = Record<"home" | "about" | "contact", string>;
```
- Equivalent to `{ [key in K]: V }` — often more readable
- Prefer `Record<"home" | "about", T>` over a plain index signature when keys are known

---

## 6.4 Exclude, Extract, NonNullable

- `Exclude<T, U>` — remove members of `U` from union `T`:
```typescript
type Colors = "red" | "green" | "blue";
type NoRed = Exclude<Colors, "red">; // "green" | "blue"
```
- `Extract<T, U>` — keep only members assignable to `U`:
```typescript
type Strings = Extract<string | number | boolean, string>; // string
```
- `NonNullable<T>` — strip `null` and `undefined`:
```typescript
type Safe = NonNullable<string | null | undefined>; // string
```

---

## 6.5 ReturnType, Parameters

- `ReturnType<F>` — extract a function's return type:
```typescript
function makeUser() { return { id: "1", name: "Z" }; }
type User = ReturnType<typeof makeUser>;
```
- `Parameters<F>` — tuple of parameter types:
```typescript
type Args = Parameters<typeof makeUser>; // []
```

---

## 6.6 Awaited

- `Awaited<T>` — unwrap promise chains recursively:
  ```typescript
  type A = Awaited<Promise<string>>;              // string
  type B = Awaited<Promise<Promise<number>>>;     // number
  type C = Awaited<ReturnType<typeof fetchUser>>; // resolved type
  ```
- Replaces hand-rolled `UnwrapPromise<T>` utilities
- Handles `PromiseLike` and arbitrary nesting

---

## Exercises (1/4)

Use this type:
```typescript
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
};
```
1. Create `PublicUser` without `password` and `UserPreview` with only `id` and `name`.

---

## Exercises (2/4)

2. Write `updateUser(id: string, patch: ...)`, where the patch accepts any subset of the fields except `id`.
3. Create `CompleteUser`, where `phone` is required too.

---

## Exercises (3/4)

4. Use `Record` to type the opening hours for every weekday. Leaving out a day should be an error:
```typescript
type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
```
5. From `"draft" | "published" | "archived" | null`, derive `VisibleStatus` (no `"archived"`, no `null`) and `HiddenStatus` (only `"archived"`).

---

## Exercises (4/4)

6. Derive `Movie` and `FetchMovieArgs` from this function without writing the types by hand:
```typescript
async function fetchMovie(id: string, lang = "en") {
  return { id, lang, title: "Dune", year: 2021 };
}
```
