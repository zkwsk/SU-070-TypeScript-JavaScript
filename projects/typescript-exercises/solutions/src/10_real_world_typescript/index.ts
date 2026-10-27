// Chapter 10: Real World TypeScript
import { getSeatMap } from "legacy-cinema";
import { parseSeat } from "./parse-seat";
// Exercise 3: Move your types to `types.ts` and use `import type` in `index.ts`. Run `npx tsc`: what
// happened to the import in `index.js`?
//
// Answer: it's gone. `import type` is erased, because types don't exist at runtime.
import type { Result, Seat } from "./types";

// Exercise 1: In an empty folder, run `npx tsc --init`. Turn on `strict`, `noUncheckedIndexedAccess`,
// `exactOptionalPropertyTypes` and `noImplicitOverride`.
//
// Answer: see tsconfig.json in this project.

// Exercise 2: Write code that breaks under each of those settings, for example:
//
//   const movies = ["Dune", "Alien"];
//   const first = movies[0];
//   console.log(first.toUpperCase()); // noUncheckedIndexedAccess
const movies = ["Dune", "Alien"];
const first = movies[0];
// @ts-expect-error noUncheckedIndexedAccess: 'first' is possibly 'undefined'
first.toUpperCase();

type Booking = { note?: string };
// @ts-expect-error exactOptionalPropertyTypes: a missing key is not the same as `undefined`
export const booking: Booking = { note: undefined };

class Hall {
  open() {}
}
export class ImaxHall extends Hall {
  // @ts-expect-error noImplicitOverride: this member must have an 'override' modifier
  open() {}
}

// @ts-expect-error strict (noImplicitAny): parameter 'seat' implicitly has an 'any' type
export function seatLabel(seat) {
  return `Seat ${seat}`;
}

// Exercise 4 (usage): the declared module type-checks. It would fail at runtime, since the package
// doesn't exist.
export const seatMap: string[][] = getSeatMap("A");

// Exercise 5 (usage): handle both cases of the Result
for (const input of ["C12", "12C"]) {
  const result: Result<Seat, string> = parseSeat(input);
  if (result.ok) console.log(`Row ${result.value.row}, seat ${result.value.number}`);
  else console.error(result.error);
}
