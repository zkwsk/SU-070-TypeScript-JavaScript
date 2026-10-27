// Chapter 10: Real World TypeScript
// Types for exercises 3 and 5. The Result type is the one from slide 10.7.
export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

export type Seat = { row: string; number: number };
