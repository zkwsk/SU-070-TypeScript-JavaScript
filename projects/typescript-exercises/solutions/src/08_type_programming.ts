// Chapter 8: Type Programming
// Use this object:
//
//   const PRICES = { child: 60, adult: 120, senior: 80 } as const;
const PRICES = { child: 60, adult: 120, senior: 80 } as const;

// Exercise 1: Derive `TicketType` (`"child" | "adult" | "senior"`) and `Price` (`60 | 120 | 80`)
// from `PRICES`.
export type TicketType = keyof typeof PRICES; // "child" | "adult" | "senior"
export type Price = (typeof PRICES)[TicketType]; // 60 | 120 | 80

// Exercise 2: Write `getPrice(type: TicketType)`. Which return type does TypeScript infer?
//
// Answer: `60 | 120 | 80`, thanks to `as const`.
export function getPrice(type: TicketType) {
  return PRICES[type];
}

// Exercise 3: Extract the type of a single cast member with an indexed access type:
//
//   type Movie = { title: string; cast: { name: string; role: string }[] };
type Movie = { title: string; cast: { name: string; role: string }[] };
export type CastMember = Movie["cast"][number]; // { name: string; role: string }

// Exercise 4: Create a `SeatId` type from `"A" | "B" | "C"` and `1 | 2 | 3 | 4`, allowing `"A1"`
// and `"C4"`. How many members does it have?
//
// Answer: 12. A template literal type combines every member: 3 rows x 4 numbers.
type Row = "A" | "B" | "C";
type SeatNumber = 1 | 2 | 3 | 4;
export type SeatId = `${Row}${SeatNumber}`;

export const seats: SeatId[] = ["A1", "C4"];
// @ts-expect-error "D1" is not a SeatId
export const outside: SeatId = "D1";

// Exercise 5: Write a recursive `DeepReadonly<T>`. Check that you can't change a nested property of
// a config object.
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const config: DeepReadonly<{ name: string; halls: { imax: { seats: number } } }> = {
  name: "Grand",
  halls: { imax: { seats: 300 } },
};
// @ts-expect-error Cannot assign to 'seats' because it is a read-only property
config.halls.imax.seats = 10;

// Exercise 6: Write `FirstArg<F>` and `PromiseValue<T>` using `infer`, and test them on your own
// functions.
export type FirstArg<F> = F extends (first: infer A, ...rest: any[]) => any ? A : never;
export type PromiseValue<T> = T extends Promise<infer U> ? U : T;

declare function book(seat: SeatId, user: string): Promise<boolean>;
export type BookFirstArg = FirstArg<typeof book>; // SeatId
export type BookResult = PromiseValue<ReturnType<typeof book>>; // boolean

// Exercise 7: Predict what `ToArray<string | number>` and `ToArray2<string | number>` from 8.6
// resolve to. Then hover.
//
// Answer: ToArray distributes over the union and gives `string[] | number[]`. ToArray2 wraps T in a
// tuple, so it doesn't distribute and gives `(string | number)[]`.
type ToArray<T> = T extends any ? T[] : never;
type ToArray2<T> = [T] extends [any] ? T[] : never;
export type Distributed = ToArray<string | number>; // string[] | number[]
export type NotDistributed = ToArray2<string | number>; // (string | number)[]
