---
## Optional chaining

Optional chaining allows you to avoid getting an error if an object or array is undefined. Example:

```typescript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};
const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined
console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

---
## Exercise

Use this object:

```javascript
const user = {
  name: "Ada"
};
```

1. Try to read `user.address.city` with optional chaining. The result should be `undefined` instead of an error.
2. Rewrite the same code without optional chaining. Use an `if` statement to check that `address` exists before reading `city`.

---
## Spread syntax

"Expand" an array or an object into a list of arguments.

```typescript
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// Expected output: 6
console.log(sum.apply(null, numbers));
// Expected output: 6
```

---
## Copying an object or array with spread syntax

A very commonly used pattern is to copy an object or an array with spread syntax:

```typescript
  // Object
  const obj = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj };
  // Array
  const arr = [1, 2, 3];
  const arr2 = [...arr];
```

---
## Immutable objects and arrays

When striving for immutability it is important to copy the object each time you modify it:

```typescript
  // Object
  const obj = { a: 1, b: 2, c: 3 };
  // "obj" was first copied, then we modify "a"
  const obj2 = { ...obj, a: 4 };
```

---
## Exercise

1. Combine these two arrays into a new array called `allNumbers` using spread syntax:
   ```javascript
   const firstNumbers = [1, 2, 3];
   const secondNumbers = [4, 5, 6];
   ```
2. Create a new object called `updatedUser` by copying `user` and changing the `age` to `31`. Do not change the original object:
   ```javascript
   const user = {
     name: "Ada",
     age: 30
   };
   ```

---
## Rest parameters

Allows you to process an unknown number of arguments:

```typescript
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));
// Expected output: 6
console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

---
## Exercise
Create a function called `printNames` that uses a rest parameter to accept any number of names. Loop through the names and log each one. Call the function with `"Alice"`, `"Bob"`, and `"Charlie"`.
