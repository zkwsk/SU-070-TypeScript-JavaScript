---
## Functions

- Functions are one of the most important building blocks in javascript.
- A function is a sequence of instructions that is packaged as a unit and can be reused.
- A function is a block of code that performs a piece of work when it is called.
- A function can take parameters and return a value.

---
## Functions (syntax)

```typescript
function sum(a, b) { return a + b }
```

---
## The anatomy of a function 1/2

```typescript
function sum(a, b) { return a + b }
```

- Name: sum
- Parameters: a, b
- Return value: a + b

---
## The anatomy of a function 2/2

```typescript
function capitalize(input) {
  const output = input.toUpperCase();
  return output;
}
```

- Name: capitalize
- Parameters: input
- Return value: output

---
## Anonymous functions

Anonymous function:

```typescript
function(a, b) {return a + b }
```

Anonymous function with variable:

```typescript
const sum = function(a, b) {return a + b }
sum(1, 2); // 3
```

---
## Arrow function

```typescript
const capitalize = (input) => { return input.toUpperCase() }
```

If there is only one parameter, parentheses can be omitted:

```typescript
const capitalize = input => { return input.toUpperCase() }
```

If the function returns on one line, the block and return statement can be omitted:

```typescript
const capitalize = input => input.toUpperCase();
```

---
## Exercise: Basic functions

1. Write a function called `multiply` that takes two numbers and returns their product.
2. Rewrite `multiply` as an arrow function.
3. Write an arrow function called `capitalize` that takes a string and returns it in uppercase.

---
## Side effects

- When a function modifies something "external" to the function code itself.
    - Write to database
    - Making a network request

---
## Side effects

- If a function has side effects we cannot depend on a given set of inputs always producing the same output
- It is not a "pure function"

---
## Methods

It is called a method when an object or class property has a function as its value:

```typescript
const someObject = {
  val: 123,
  callMe: (a) => { return % a }
}
const result = someObject.callMe(2);
```

---
## Functions - Default arguments

You can define default values for parameters:

```typescript
const sum = (a = 1, b = 2) => a + b;
sum(7,3) // 10
sum() // 3
```

---
## Hoisting

Works:

```typescript
doSomething(); 
function doSomething() { return "yes" }
```

Does not work:

```typescript
doSomethingElse(); 
const doSomethingElse = () => { return "yes" }
```

---
## Functions that return functions

```typescript
function calculator(operation) {
  if (operation === 'add') {
    return function(a, b) { return a + b; }
  } else if (operation === 'subtract') {
    return function (a, b) { return a - b };
  }
}
calculator('add)(1, 2); // 3
```

---
## Function that takes a function as a parameter

```typescript
function processWithCallback(x, y, callback) {
  const result = x * y;
  callback(result);
  return result;
}
process(3, 7, (a) => { console.log(a)})
process(5, 2, (a) => { persistToDatabase(a)})
```
---
## Exercise

Functions, objects and arrays:

1. Create a `person` object with `firstName` and `lastName` properties.
2. Write a function called `getFullName` that takes a person object and returns the first and last name joined with a space.
3. Create an array of two people and call `getFullName` for each person.

---
## Guard clauses (1/2)

Without guard clause:

```typescript
function processRequest(paramA, paramB) {
  if (typeof paramA !== 'undefined' || typeof paramB !== 'undefined' ) {
    const result = paramA + paramB;
    return result;
  } else {
    return null;
  }
}
```

---
## Guard clauses (2/2)

With guard clause:

```typescript
function processRequest(paramA, paramB) {
  if (typeof paramA === 'undefined' || typeof paramB === 'undefined' ) {
    return null;
  }
  return paramA + paramB;
}
```

[Video by Web Dev Simplified](https://www.youtube.com/watch?v=EumXak7TyQ0)

---
## Exercise: Guard clauses

Rewrite this function using a guard clause:

```typescript
function getDiscount(price, isMember) {
  if (isMember) {
    return price * 0.9;
  } else {
    return price;
  }
}
```

The rewritten function should return `price` immediately when `isMember` is false.
