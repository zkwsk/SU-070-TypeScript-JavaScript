// Chapter 5: Advanced Types
import type { Movie } from "./02_basic_types";

// Exercise 1: Create a `Timestamps` type (`createdAt`, `updatedAt`) and a generic `WithTimestamps<T>`
// using an intersection. Use it to create `StoredMovie`.
type Timestamps = { createdAt: Date; updatedAt: Date };
type WithTimestamps<T> = T & Timestamps;
export type StoredMovie = WithTimestamps<Movie>;

// Exercise 2: Hover over `{ id: string } & { id: number }`. What is the type of `id`, and why?
//
// Answer: `never`, because no value can be both a string and a number.
type Weird = { id: string } & { id: number };
export type WeirdId = Weird["id"]; // never

// Exercise 3: Model a `Payment` as a discriminated union of `"card"` (`last4`), `"mobilepay"`
// (`phone`) and `"voucher"` (`code`). Write `describePayment` with a `switch`.
export type Payment =
  | { kind: "card"; last4: string }
  | { kind: "mobilepay"; phone: string }
  | { kind: "voucher"; code: string };

export function describePayment(payment: Payment): string {
  switch (payment.kind) {
    case "card":
      return `Card ending in ${payment.last4}`;
    case "mobilepay":
      return `MobilePay from ${payment.phone}`;
    case "voucher":
      return `Voucher ${payment.code}`;
  }
}

// Exercise 4: Write a conditional type `IsArray<T>`. Then write `ElementType<T>` with `infer`, so
// `ElementType<string[]>` is `string`.
export type IsArray<T> = T extends unknown[] ? true : false;
export type ElementType<T> = T extends (infer E)[] ? E : never;

const isArray: IsArray<string[]> = true;
const isNotArray: IsArray<string> = false;
const element: ElementType<string[]> = "Dune";

// Exercise 5: Write a mapped type `Nullable<T>` where every property can also be `null`.
export type Nullable<T> = { [K in keyof T]: T[K] | null };

const draft: Nullable<{ title: string; year: number }> = { title: "Dune", year: null };

// Exercise 6: Write a mapped type `Setters<T>` that turns `{ title: string; year: number }` into:
//
//   {
//     setTitle: (value: string) => void;
//     setYear: (value: number) => void;
//   }
export type Setters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

const setters: Setters<{ title: string; year: number }> = {
  setTitle: (title) => console.log(title),
  setYear: (year) => console.log(year.toFixed(0)),
};

export { isArray, isNotArray, element, draft, setters };
