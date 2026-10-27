## Javascript syntax

In the following section we go through basic Javascript syntax.

Since Typescript is a superset of Javascript, everything we learn here is also valid Typescript.

---
## Code comments

```javascript
  // Line comments
  var a = 2; // Everything to the right of // is not evaluated
  var d = 3 + 1 // But the next line is
  /*
    Block comments
    Can span multiple lines
  */
  return 1 + 2;
```

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
## A note on semi-colons

Most programming languages of the "C family" require semi-colons at the end of lines. Javascript works best with semi-colons but will try to guess them if you do not add them manually. It can make mistakes, though, so best to end every line with a semi-colon.

---
## Example semi-colon (1/2)

Javascript inserts a semi-colon after `return` when the next line starts with
an opening brace:

```javascript
function getUser() {
  return
  {
    name: "Ada"
  };
}

console.log(getUser()); // undefined
```

## Example semi-colon (1/2)

The code looks like it should return the object, but Javascript reads it as
`return;`. Keep the returned value on the same line:

```javascript
function getUser() {
  return {
    name: "Ada"
  };
}
```
