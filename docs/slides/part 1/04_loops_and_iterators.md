---
## Loops and iterators

- Loops (iterators) are used when you want to repeat a piece of code multiple times.
- There are 3 different types of loops in javascript:
  - `for`
  - `while`
  - `do while`

---
## For loop

```typescript
for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}
```

---
## While loop

```typescript
let i = 0;
while (i < 10) {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
}
```

---
## do...while loop

```typescript
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
} while (i < 10);
```

---
## Exercise - iterators

1. Create a for loop that uses console.log to print all even numbers between 0-10
2. Declare a variable "sum". Create a while loop that counts from 0-50 and each time the loop runs, the current number is added to sum.
3. Rewrite exercise 2 as a do...while loop
