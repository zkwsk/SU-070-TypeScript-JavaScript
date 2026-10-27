---
## Promises
Promises are a way to handle asynchronicity. A promise can be in three different states:
- Pending
- Fulfilled
- Rejected

---
## Promises

Create a Promise:

```typescript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
```

---
## Promises

```typescript
const handleFulfilled = (value) => {
  console.log(value);
};
const handleRejected = (error) => {
  console.log(error);
};
myPromise.then(handleFulfilled, handleRejected)
```


---
## Async / Await

```typescript
const run = async function() {
  const result = await myPromise();
  console.log(result);
}
run();
```

---
## Exercises

1. Create a promise that resolves with `"Data loaded"` after 500 milliseconds. Use `.then()` to log the result.
2. Create a promise that rejects with `"Something went wrong"` after 500 milliseconds. Use `.catch()` to log the error.
3. Rewrite exercise 1 using an `async` function and `await` instead of `.then()`.
4. Rewrite exercise 2 using an `async` function, `await`, and `try/catch` instead of `.catch()`.
