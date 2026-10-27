// Chapter 3: Function Types

// Exercise 1: Create a function type `PriceCalculator` that takes `basePrice` and `seats` and returns
// a number. Implement `standardPrice` and `studentPrice` (20% off) with it.
type PriceCalculator = (basePrice: number, seats: number) => number;

export const standardPrice: PriceCalculator = (basePrice, seats) => basePrice * seats;
export const studentPrice: PriceCalculator = (basePrice, seats) => basePrice * seats * 0.8;

// Exercise 2: Write `totalPrice(...prices: number[]): number`.
export function totalPrice(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

// Exercise 3: Write `bookSeats(movie: string, seats = 1, note?: string)`. Call it with one, two and
// three arguments.
export function bookSeats(movie: string, seats = 1, note?: string): string {
  const booking = `${seats} seat(s) for ${movie}`;
  if (!note) return booking;
  return `${booking} (${note})`;
}

bookSeats("Dune");
bookSeats("Dune", 2);
bookSeats("Dune", 2, "aisle seats");

// Exercise 4: Write `createBooking({ movie, seats })`, where `seats` is optional and defaults to `1`.
export function createBooking({ movie, seats = 1 }: { movie: string; seats?: number }) {
  return { movie, seats };
}

// Exercise 5: Give `toUpper` two overloads: a `string` returns a `string`, and a `string[]` returns
// a `string[]`.
export function toUpper(value: string): string;
export function toUpper(value: string[]): string[];
export function toUpper(value: string | string[]): string | string[] {
  if (typeof value === "string") return value.toUpperCase();
  return value.map((item) => item.toUpperCase());
}

const upperTitle: string = toUpper("dune");
const upperTitles: string[] = toUpper(["dune", "alien"]);

// Exercise 6: Write a generic `last<T>(items: T[]): T | undefined`. Which type do you get back for
// a `number[]`?
//
// Answer: `number | undefined`
export function last<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

const lastYear = last([1979, 2021]); // number | undefined

// Exercise 7: Write a generic `pluck` that returns one property from every item:
//
//   const movies = [
//     { title: "Dune", year: 2021 },
//     { title: "Alien", year: 1979 },
//   ];
//   const titles = pluck(movies, "title"); // string[]
//   const years = pluck(movies, "year");   // number[]
//   // pluck(movies, "rating");            // compile error
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const movies = [
  { title: "Dune", year: 2021 },
  { title: "Alien", year: 1979 },
];
const titles: string[] = pluck(movies, "title");
const years: number[] = pluck(movies, "year");
// @ts-expect-error "rating" is not a key of the movie objects
pluck(movies, "rating");

export { upperTitle, upperTitles, lastYear, titles, years };
