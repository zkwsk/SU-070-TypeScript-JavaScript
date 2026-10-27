---
## Control structures - if

```typescript
if (x = 1) {
  /* If user input is 1 */
  return 'a';
}
```

```typescript
if (userInput % 2) {
  /* If user input is odd */
  return 'a';
}
```

---
## Control structures - if/else

```typescript
if (userInput % 2) {
  /* If user input is odd */
  return 'a';
} else {
  /* If user input is even */
  return 'b';
}
```
---
## Exercise

1. Declare a variable `number` with the value `7`. Use an `if` statement to log `"positive"` when the number is greater than 0.
2. Declare a variable `age` with the value `17`. Use `if/else` to log `"adult"` when the age is at least 18, otherwise log `"minor"`.
3. Declare a variable `score` with the value `65`. Use `if/else` to log `"passed"` when the score is at least 50, otherwise log `"failed"`.

---
## Ternary operator

Same principle as `if/else` but on one line:

```typescript
const result = userInput % 2 ? 'a' : 'b';
```

---
## Exercise

Declare a variable `temperature` with the value `20`. Use a ternary statement to assign `"warm"` to `message` when the temperature is at least 18, otherwise assign `"cold"`.

---
## AND/OR

AND:

```typescript
return a && b;
```

OR:

```typescript
return a || b;
```

---

## Exercise

Declare `isLoggedIn` and `isAdmin` variables with boolean values. Use `&&` to log `"Show admin page"` only when both values are `true`. Then use `||` to log `"Show login page"` when either value is `false`.

---
## Nullish coalescing operator

```typescript
let accountAmount = 0;
return accountAmount || 'No account found'; // 'No account found'
...
let accountAmount = 0;
return accountAmount ?? 'No account found'; // 0
```

[Video by Web Dev Simplified](https://youtu.be/v2tJ3nzXh8I?t=41)
