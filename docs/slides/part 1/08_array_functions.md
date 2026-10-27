---
## Array Functions `Array.forEach()`

forEach executes a piece of code for each element in an array. Nothing is returned from forEach.

```typescript
const list = [1, 2, 3, 4, 5];
list.forEach((item) => { console.log(item) }); // 1, 2, 3, 4, 5
```

---
## Exercises: `forEach()`

1. Use `forEach()` to log every name in `["Alice", "Bob", "Charlie"]`.
2. Use `forEach()` to add all numbers in `[2, 4, 6, 8]` together and log the total.

---
## Array Functions `Array.map()`

Map is similar to forEach, but differs by returning a new array with the modified values.

```typescript
const list = [1, 2, 3, 4, 5];
const newList = list.map((item) => { return item - 1 }); // [0, 1, 2, 3, 4]
```

---
## Exercises: `map()`

1. Use `map()` to create a new array containing the squares of `[1, 2, 3, 4]`.
2. Use `map()` to create a new array containing the uppercase version of `["red", "green", "blue"]`.

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
## Exercises: `find()`

1. Use `find()` to get the person with `id` equal to `3` from this array:
   ```javascript
   const people = [
     { id: 1, name: "Alice" },
     { id: 2, name: "Bob" },
     { id: 3, name: "Charlie" }
   ];
   ```
2. Use `find()` to get the first number greater than `10` from `[4, 12, 7, 18]`.

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
## Exercises: `filter()`

1. Use `filter()` to create a new array containing only the even numbers from `[1, 2, 3, 4, 5, 6]`.
2. Use `filter()` to find all products with a price below `100`:
   ```javascript
   const products = [
     { name: "Book", price: 25 },
     { name: "Headphones", price: 80 },
     { name: "Keyboard", price: 120 }
   ];
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
## Exercises: `reduce()`

1. Use `reduce()` to calculate the sum of `[5, 10, 15]`.
2. Use `reduce()` to find the largest number in `[8, 3, 12, 5]`.

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
## Exercises: Array methods and objects

1. Use `Object.entries()` to create an array from `timesheetByName`, then log each employee's name.
2. Use `Object.entries()` and `reduce()` to calculate the average number of hours worked.
