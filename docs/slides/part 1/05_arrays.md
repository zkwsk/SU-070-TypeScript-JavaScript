---
## Arrays

A javascript array is a list of values. Order is guaranteed.

```javascript
  const list = [1, 2, 3, 4, 5];
```

---
## Arrays

In javascript an array can contain values of different types:

```javascript
  const list = [
    // number
    1,
    // string
    "to",
    // still string
    "5"
  ];
```
It does not matter if you format the array on multiple lines as long as the brackets are "balanced".

---
## Reading from arrays

```javascript
  const list = ["mike", "maria", "mila"]
  console.log(list[1]) // What will be printed?
```

---
## Reading from arrays

```javascript
  const list = ["mike", "maria", "mila"]
  console.log(list[1]) // "maria"
```

## Reading using dynamic values

```javascript
  let userInput;
  // We get input from user - functions will be covered later
  userInput = getUserInput();
  console.log(list[userInput])
```

---
## Exercise arrays

1. Create an array containing a list of groceries. Try to console.log the various items on the list.
2. Try to write a loop that prints out all of the items on the list.
3. Make a list of numbers. Add all the numbers together and console.log the result
4. Somebody added a string into the list of numbers. How can you make it so your calculator still works?