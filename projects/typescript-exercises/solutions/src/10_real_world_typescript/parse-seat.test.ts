// Chapter 10: Real World TypeScript
import { describe, expect, expectTypeOf, it } from "vitest";
import { parseSeat } from "./parse-seat";
import type { Result, Seat } from "./types";

// Exercise 6 (bonus): Write a Vitest test for `parseSeat`, with a type-level test using
// `expectTypeOf`.
describe("parseSeat", () => {
  it("parses a row and a number", () => {
    expect(parseSeat("C12")).toEqual({ ok: true, value: { row: "C", number: 12 } });
  });

  it("returns an error for invalid input", () => {
    expect(parseSeat("12C")).toEqual({ ok: false, error: '"12C" is not a seat like "C12"' });
  });

  it("returns a Result", () => {
    expectTypeOf(parseSeat).returns.toEqualTypeOf<Result<Seat, string>>();
  });
});
