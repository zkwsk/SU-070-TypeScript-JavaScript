// Chapter 10: Real World TypeScript

// Exercise 4: Write a `legacy-cinema.d.ts` for the untyped package `legacy-cinema` that declares
// `getSeatMap(hall: string): string[][]`.
declare module "legacy-cinema" {
  export function getSeatMap(hall: string): string[][];
}
