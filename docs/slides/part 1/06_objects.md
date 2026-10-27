---
## Objects

A javascript object is an entity that defines properties and data, or keys/value pairs. Order of keys is not guaranteed.

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
## Combining arrays and objects

```javascript
  let person = {
    name: "John Doe",
    age: 30,
    // Array nested inside object
    friends: [
      "Doris", "Lizzy", "Ken"
    ]
  }
```

---

```javascript
  // List of people objects
  let people = [
    {
      name: "John Doe",
      age: 30,
      friends: [
        "Lizzy Louis", "Kenny Kent"
      ]
    },
    {
      name: "Lizzy Louis",
      age: 28,
      friends: [
        "John Doe", "Kenny Kent"
      ]
    },
    {
      name: "Kenny Kent",
      age: 55,
      friends: []
    }
  ]
```

---
## Accessing object values

You can access object values in two ways:

```javascript
  // Dot notation
  const name = person.name;
  // Bracket notation - like arrays, but you must give the key
  const name = person["name"];
  // Nested values
  const street = person.address.street;
```

---
## Exercise

1. Using the `person` object, log the person's `name` with dot notation and `occupation` with bracket notation.
2. Using the `person` object with the nested `address`, log the person's `city`.
3. Using the `people` array, log the name of the first friend of the second person.

---
## Object destructuring

You can use object destructuring as a shortcut to create a new variable and assign it a value from an object at the same time. You "pluck" the value out of the object:

```javascript
  const { name } = person;
  console.log(name); // "John Doe"
  // Or more values at the same time
  const { name, age, occupation } = person;
  console.log(name, age, occupation); // "John Doe", 30, "Software Developer"
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
## Exercise

1. Use object destructuring to create a `name` variable from the `person` object, then log it.
2. Use object destructuring to create `name`, `age`, and `occupation` variables from the `person` object, then log all three.
3. Repeat exercise 2, but without using destructuring.
4. Use array destructuring to create `first`, `second`, and `third` variables from the `list` array, then log them.

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
## More exercises

```javascript
export let a, b, c, d, e;

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};
```
---

1. Use object destructuring to create a variable called `name` from `person`. Assign the value of `name` to `a`.
2. Use object destructuring to create `name` and `age` variables from `person`. Use a template literal to combine them into `"John Doe, 30"`, then assign the result to `b`.
3. Create an object and assign it to `c`. It should represent a car brand with these properties:
   - `name`: `"Mercedes-Benz"`
   - `origin`: `"Germany"`
   - `founded`: `1926`

---
4. Use the spread operator to copy `c` into `d`. Add a `models` property containing an object with:
   - `e-class`: `"Executive car"`
   - `s-class`: `"Full-size luxury sedan"`
5. Use the spread operator to copy `c` into `e`. Add a `models` property containing an array of objects. Each object should have a `name` and `class` property for the `e-class` and `s-class` models.
