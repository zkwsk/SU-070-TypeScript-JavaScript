// Chapter 10: Real World TypeScript
import type { Result, Seat } from "./types";

// Exercise 5: Write `parseSeat(input: string): Result<Seat, string>` using `Result` from 10.7.
// `"C12"` gives `{ row: "C", number: 12 }`, `"12C"` an error.
export function parseSeat(input: string): Result<Seat, string> {
  const match = /^([A-Z])(\d+)$/.exec(input);
  if (!match) return { ok: false, error: `"${input}" is not a seat like "C12"` };

  // match[1] is `string | undefined` because of noUncheckedIndexedAccess
  const [, row = "", number = ""] = match;
  return { ok: true, value: { row, number: Number(number) } };
}
