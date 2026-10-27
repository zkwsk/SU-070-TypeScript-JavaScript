// Chapter 2: Basic Types
// Use the TypeScript Playground (https://www.typescriptlang.org/play) or a local `.ts` file.

// Exercise 3: Derive a `Genre` union from this array and add `genre: Genre` to `Movie`:
//
//   const GENRES = ["drama", "comedy", "horror"] as const;
export const GENRES = ["drama", "comedy", "horror"] as const;
export type Genre = (typeof GENRES)[number];

// Exercise 1: Create a `Movie` type with a readonly `id: number`, `title: string`, `year: number`
// and an optional `rating: number`. Try to change the `id` of a movie.
export type Movie = {
  readonly id: number;
  title: string;
  year: number;
  rating?: number;
  genre: Genre;
};

const dune: Movie = { id: 1, title: "Dune", year: 2021, genre: "drama" };
// @ts-expect-error Cannot assign to 'id' because it is a read-only property
dune.id = 2;

// Exercise 2: Create a labeled tuple type `Showtime` with `hall`, `time` and `seatsLeft`.
// Make an array of three showtimes.
type Showtime = [hall: string, time: string, seatsLeft: number];

export const showtimes: Showtime[] = [
  ["A", "18:00", 42],
  ["B", "20:30", 7],
  ["C", "22:15", 0],
];

// Exercise 4: Write `describe(input: unknown): string`. Return strings in uppercase, `"Number: 42"`
// for numbers and `"Unknown"` for anything else.
export function describe(input: unknown): string {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return `Number: ${input}`;
  return "Unknown";
}

// Exercise 5: Create a `TicketSales` type where `total: number` is required and any other key
// (a month) holds a number.
type TicketSales = {
  total: number;
  [month: string]: number;
};

export const sales: TicketSales = { total: 300, january: 120, february: 180 };

// Exercise 6: Rewrite `Movie` as an `interface`. Then create `interface Series extends Movie` with
// `seasons: number`.
interface MovieInterface {
  readonly id: number;
  title: string;
  year: number;
  rating?: number;
  genre: Genre;
}

interface Series extends MovieInterface {
  seasons: number;
}

export const severance: Series = { id: 2, title: "Severance", year: 2022, genre: "drama", seasons: 2 };
