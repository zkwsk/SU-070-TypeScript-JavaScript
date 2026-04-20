# SU070 Typescript/Javascript

---
## Introduction

 - Meet and greet
 - Setting expectations

---
## Overview

  - Day 1: Javascript/Ecmascript
  - Day 2: Typescript
  - Day 3: Project and recap of day 1 and 2

---
## Bookmarks (1/2)

- Official documentation: [typescriptlang.org](https://www.typescriptlang.org/docs/)
- Typescript Deep Dive: [basarat.gitbook.io/typescript](https://basarat.gitbook.io/typescript/)
- Typescript Playground: [typescriptlang.org/play](https://www.typescriptlang.org/play)
- Code Sandbox [codesandbox.io](https://codesandbox.io/)
- Can I use [caniuse.com](https://caniuse.com/)

---

## Bookmarks (2/2)

- Web Dev Simplified: [https://www.youtube.com/@WebDevSimplified](https://www.youtube.com/@WebDevSimplified)
- Typescript Simplified: [https://learn.webdevsimplified.com/typescript-simplified-course](https://learn.webdevsimplified.com/typescript-simplified-course)]
- Jack Herrington [Youtube channel](https://www.youtube.com/watch?v=j92fxPpFaL8&list=PLNqp92_EXZBIKO8lqN3089jgZUi-FUFXX)
- Matt Pocock: [youtube.com/@mattpocockuk](https://www.youtube.com/@mattpocockuk)
- Total Typescript: [totaltypescript.com](https://www.totaltypescript.com)


---
## What is Javascript/Ecmascript?

- Born in the browser
- Dynamically typed (run-time)
- Interpreted
- Functional and object-oriented
- Event-driven
- Constrained by browser compatibility

---
## Timeline

- 1997: Ecmascript
- ES4 dropped
- 2009: ES5
- 2009: First release of Node.js
- 2015: ES6 - "Next generation javascript"
- 2016-2022: [Continuous annual releases](https://en.wikipedia.org/wiki/ECMAScript_version_history): ES7, ES8, ES9, ES10, ES11, ES12, ES13, ES14, ES15, ES16

---
## What is Typescript?

- Superset of Javascript
- Statically typed (compile-time)

--- { "layout": "center"}
## Superset of Javascript
![Superset](./assets/js-today-typescript.png)
---
## Statically typed

This is ok:

```typescript
let x:number = 1;
const multiplyByTwo = (x:number) => {
  return x * 2;
}
```

This will fail:

```typescript
let x:string = "1";
const multiplyByTwo = (x:number) => {
  return x * 2;
}
```
--- { "layout": "center"}
## Compilation 1/2
![Typescript Lifecycle](./assets/typescript-lifecycle.png)

---
## Compilation 2/2

- Design time
  - Editing the project in VSCode
- Compile time
  - The project is converted to Javascript
- Run time
  - The project runs as Javascript in the browser or Node.js
  - Note: Typescript types do not exist at runtime

---
## Why Typescript?

- Confidence
- Fast feedback loops 
  - Design time errors
    - Feedback in editor > "Fail fast"
  - Compile time errors
- Less need for validation logic and fewer unit tests
- Future javascript now

---
## Toolbox

- Install NPM and Node.JS
- Install Yarn
- Install Vite
- Install VSCode

---
## NPM 1/2

NPM is responsible for package management in Javascript. We use NPM to install and manage dependencies. Make sure you have Node.js (minimum v.24.x) installed.

[Download Node.js](https://nodejs.org/en/download/)

---
## NPM 2/2

On Linux/Unix/Mac you can use a package manager to install Node.js:
- Mac: [HomeBrew](https://brew.sh/)
- Linux: [APT](https://ubuntu.com/server/docs/package-management)

On Windows I recommend using WSL to get a Linux-like environment.

---
# Yarn

- Yarn is a "layer" on top of NPM that offers some improvements in terms of e.g. performance.
- Yarn is not a requirement, but code examples in the course will be based on Yarn, as Yarn has moved towards becoming the new industry standard for Javascript development.

Install Yarn globally:

```bash
$ npm install yarn --global
```
---
# Vite

- Development server (no build required, hot module replacement)
- Bundler
- Simple configuration compared with Webpack or older tools like Grunt and Gulp

Setup a new project (Vanilla, React, Angular, Svelte, etc.)

```bash
$ npm create vite@latest
```


---
# VSCode

VSCode is not a requirement (you can e.g. use WebStorm, or terminal/VIM), BUT...
- VSCode is "widely accepted" as the best code editor and IDE
- Good Typescript support
- Runs on all platforms (and in the browser with Github Codespaces)

Therefore the course is based on using VSCode.

[Download VSCode](https://code.visualstudio.com/download)

---
## Break

---
## Javascript syntax

In the following section we go through basic Javascript syntax.

Since Typescript is a superset of Javascript, everything we learn here is also valid Typescript.

---
## Variables

You can use different keywords `var`, `let` and `const` to define a variable.

```typescript
var a = "Jens";
console.log(a); // "Jens"
let b = "Børge";
console.log(b); // "Børge"
const c = "Hansen";
console.log(c); // "Hansen"
```

---
## Variables - re-assignment

If you use `var` or `let` you can change the value of the variable later in the code:

```javascript
let a = "Jens";
let b = "Hansen";
b = "Jensen";
console.log(a + " " + b); // "Jens Jensen"
```

---
## Variables - constant values

If you use `const` you cannot change the value of the variable later:

```javascript
const a = "Jens";
const b = "Hansen";
b = "Jensen"; // Fejl
```

---
## Variables - difference between `var` and `let`

`var` is function scoped. `let` is block scoped.

```javascript
function run() {
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar); // Foo Bar
  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }
  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}
run();
```

---
## Variables without keyword

If you declare a variable without a keyword it is automatically added to the global scope. This is bad practice and should be avoided, as you risk overwriting other variables in the global scope - e.g. from a library you might have loaded.

```javascript
// Gør aldrig dette
a = "Jens"; // Implicit global
// Skal du bruge en global variabel, så gør det eksplicit med window:
window.a = "Jens"; // Explicit global
```

---
## Variables - best practice

- Use `const` as often as possible. It is more predictable.
- Use `let` if you need to change the value of the variable later in the code.
- Avoid using `var` unless you are writing code that needs to support ES5, as function scope is confusing for developers with a background in other languages and is the cause of many bugs.
- Never use variables declared without a keyword (implicit globals)

---
## Dynamic types

Javascript is a dynamic language, which means you do not need to define the data type of a variable.

The data type is automatically determined by the value:

```javascript
"Jens" // string
42 // number
true // boolean
```

---
## Primitive data types in Javascript

Javascript has 7 primitive data types:

```javascript
"Jens" // string
42 // number
true // boolean
null // null
undefined // undefined
Symbol("foo") // symbol
BigInt(9007199254740991) // bigint
```

---
## Strings
A `string` is a text string. And can be defined with single or double quotes.

```javascript
"Jens"
'Peter'
'Streng der indeholder "dobbelte" anførselstegn';
"Streng der indeholder 'enkelte' anførselsetegn.";
```

---
## Concatenated strings

```javascript
const samlet = "Jens" + " " + "Peter"; // "Jens Peter"
const matematik = "1" + "2"; // "12"
```
---
## Template literals
- Uses backticks ` instead of quotes.
- Special syntax for inserting variables into the string.

```javascript
const firstName = "Jens";
const lastName = "Hansen";
const samlet = `${firstName} ${lastName}`; // "Jens Hansen"
const samlet2 = `Mit navn er ${firstName} ${lastName} og jeg bor i Odder.`; // "Mit navn er Jens Hansen og jeg bor i Odder."
```

---
## Exercise

String assignment and template literals:
```js
export let firstname, lastname, fullname;
```


1. Assign the first name to "Michael"
2. Assign the last name to "Madsen"
3. First use the "+" operator to join the first and last name.
4. Then rewrite the statement to use template literals
---
## Break

---
## Numbers in javascript

- Unlike other programming languages, the type `number` is used for both integers and decimals.
- BigInt can be used to represent integers larger than 2^53 - 1.

--- { "layout": "center"}
## Arithmetic

| Operator | Description    |
|----------|----------------|
| +        | Addition       |
| \-       | Subtraction    |
| \*       | Multiplication |
| \*\*     | Exponentiation |
| /        | Division       |
| %        | Modulus (remainder) |
| ++       | Increment      |
| \--      | Decrement      |

---
## Arithmetic (examples)

```
1 + 2 // => 3 (Addition)
7 - 2 // => 5 (Subtraction)
2 * 2 // => 4 (Multiplication)
2 ** 3 // => 8 (Exponentiation)
2 / 2 // => 1 (Division)
3 % 2 // => 1 (Modulus/rest)
let a = 1; a++; // => 2 (Increment)
let b = 10; b--; // => 9 (Decrement)
```

---

# Exercise: Arithmetic and operators:

--- { "layout": "columns"}



::section

1. What is the result of 5 + 3?
2. What is the result of 7 + (-2)?
3. What is the result of 8 - 4?
4. What is the result of 12 - (-5)?
5. What is the result of 3 * 4?

::section

6. What is the result of (-2) * 5?
7. What is the result of 10 / 2?
8. What is the result of (-8) / 4?
--- { "layout": "columns"}

::section

9. What is the result of 7 % 3?
10. What is the result of -10 % 3?
11. What is the result of 2 ** 3?
12. What is the result of (-2) ** 3?

::section

13. What is the result of x = 5; x++;
14. What is the result of y = -7; y++;
15. What is the result of x = 10; x--;
16. What is the result of y = -5; y--;
---
## Converting strings to numbers 1/3

If you already know a string contains a number you can convert it to a number with `Number()`, `parseInt()` or `parseFloat()`.

`parseInt()` returns the first integer it finds in the string:

```javascript
parseInt("32px") // 32
```

---
## Converting strings to numbers 2/3

`parseFloat()` returns the first decimal number it finds in the string:

```javascript
parseFloat("32.2px") // 32.2
```

---

## Converting strings to numbers 3/3

`Number()` attempts to convert the entire string to a number:

```javascript
Number("32") // 32
Number("32.2") // 32.2
Number("32px") // NaN
```

---
## Equality

- Loosely equal: `==`
  - Javascript converts the values to the same type before comparison.
- Strictly equal: `===`
  - Javascript compares the values without conversion.

[MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

---
## Control structures - if

```typescript
if (x = 1) {
  /* Hvis user input er 1 */
  return 'a';
}
```

```typescript
if (userInput % 2) {
  /* Hvis user input er ulige */
  return 'a';
}
```

---
## Control structures - if/else

```typescript
if (userInput % 2) {
  /* Hvis user input er ulige */
  return 'a';
} else {
  /* Hvis user input er lige */
  return 'b';
}
```
---
## Ternary operator

Same principle as `if/else` but on one line:

```typescript
const result = userInput % 2 ? 'a' : 'b';
```
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
## Nullish coalescing operator

```typescript
let accountAmount = 0;
return accountAmount || 'No account found'; // 'No account found'
...
let accountAmount = 0;
return accountAmount ?? 'No account found'; // 0
```

[Video by Web Dev Simplified](https://youtu.be/v2tJ3nzXh8I?t=41)

---
## Break

---
## Iteration - loops

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

---
## Break

---
## Objects

A javascript object is an entity that defines properties and data.

Example:

```javascript
let person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};
```

---
## Nested objects

A javascript object can contain nested objects:

```javascript
let person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
};
```

---
## Accessing object values

You can access object values in two ways:

```javascript
  // Dot notation
  const name = person.name;
  // Bracket notation
  const name = person["name"];
  // Nestede værdier
  const street = person.address.street;
```

---
## Object destructuring

You can use object destructuring as a shortcut to create a new variable and assign it a value from an object at the same time. You "pluck" the value out of the object:

```javascript
  const { name } = person;
  console.log(name); // "John Doe"
  // Eller flere værdier på samme tid:
  const { name, age, occupation } = person;
  console.log(name, age, occupation); // "John Doe", 30, "Software Developer"
```

---
## Arrays

A javascript array is a list of values.

```javascript
  const list = [1, 2, 3, 4, 5];
```

In javascript an array can contain values of different types:

```javascript
  const list = [1, "to", { id: 3} , 4, "5"];
```

---
## Array destructuring

Just like objects you can use destructuring with arrays:

```javascript
  const list = [1, 2, 3 , 4, 5];
  const [first, second, third] = list;
  console.log(first, second, third); // 1, 2, 3
```

---
## JSON

- JSON stands for JavaScript Object Notation
- Stored in a .json file
- Often used to save data to a file or to exchange data with an API

---
## JSON

JSON looks like a javascript object, but note that all values in JSON must be in double quotes:

```json
{
  "name": "John Doe",
  "age": "30",
  "occupation": "Software Developer",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
}
```

---
## JSON Parse

A json file can be imported in a javascript file and converted to an object with JSON.parse();

```javascript
import person from './person.json';
const obj = JSON.parse(person);
```

Likewise you can serialize an object to JSON with JSON.stringify():

```javascript
const obj = { name: "John Doe", age: 30 };
const jsontext = JSON.stringify(obj);
```

---
## Exercise

Objects and Arrays:

[![Edit objects-and-arrays](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/amazing-platform-zqfbng?fontsize=14&hidenavigation=1&theme=light)

---
## Break

---
## Functions

- Functions are one of the most important building blocks in javascript.
- A function is a sequence of instructions that is packaged as a unit and can be reused.
- A function is a block of code that performs a piece of work when it is called.
- A function can take parameters and return a value.
- A function can also modify values outside its own scope (side effects)

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
## Functions (3/3)

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

Functions, objects and arrays

[![Edit functions-with-objects-and-arrays](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/functions-with-objects-and-arrays-2vl0mi?fontsize=14&hidenavigation=1&theme=light)

---
## Break

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
  // Objekt
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
  // Objekt
  const obj = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj, a: 4 };
```

---
## Array Functions `Array.forEach()`

forEach executes a piece of code for each element in an array. Nothing is returned from forEach.

```typescript
const list = [1, 2, 3, 4, 5];
list.forEach((item) => { console.log(item) }); // 1, 2, 3, 4, 5
```


---
## Array Functions `Array.map()`

Map is similar to forEach, but differs by returning a new array with the modified values.

```typescript
const list = [1, 2, 3, 4, 5];
const newList = list.map((item) => { return item - 1 }); // [0, 1, 2, 3, 4]
```

---
## Array Functions `Array.find()`

Find returns the first element in an array that matches a given criteria.

```typescript
const list = [
  { id:1, name: 'first'},
  { id:2, name: 'second' }
];
const picked = list.find((item) => { return item.id === 2 });
console.log(picked); // { id:2, name: 'second' }
```

---
## Array Functions `Array.filter()`

Filter returns a new array with all elements that match a given criteria.

```typescript
const list = [
  { id:1, name: 'first'},
  { id:2, name: 'second' },
  { id: 3, name: 'third' },
  { id: 4, name: 'fourth' },
  { id: 5, name: 'fifth' }
];
const picked = list.filter((item) => { item.id > 3 });
console.log(picked); // [{ id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]
```

---
## Array Functions `Array.reduce()`

Reduce reduces an array to a single value.

```typescript
const dates = [
  new Date('2020-03-04'),
  new Date('2018-04-03'),
  new Date('2022-01-01'),
  new Date('2020-05-06'),
  new Date('2021-02-01')
];
const latestDate = dates.reduce((latest, current) => {
  return current > latest ? current : latest;
});
```


---
## Array methods and objects

You cannot use Array methods on objects, but you can convert objects to arrays with `Object.entries`.

```typescript
const timesheetByName = {
  michael: { hours: "237"},
  john: { hours: "252"},
  jane: { hours: "212"},
  michelle: { hours: "141"}
};
const timesheetEntries = Object.entries(timesheetByName);
const totalHours = timesheetEntries.reduce((sum, [key, value]) => {
  return sum + Number(value.hours);
}, 0);
```

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
## Rest parameters

Allows you to accept an unknown number of parameters as an array.

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
## Project

Build an SDK for a cinema

[![Edit movie-exercise](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/movie-exercise-0p20tb?fontsize=14&hidenavigation=1&theme=light)

---
## Exercise

Array functions

[![Edit array-methods](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/array-methods-dztykn?fontsize=14&hidenavigation=1&theme=light)
