// Chapter 11: Conclusion
// Data from outside your program is `unknown` until you have checked it:
//
//   type Movie = { title: string; year: number };
//   const raw: unknown = JSON.parse('{"title": "Dune", "year": "2021"}');
import { z } from "zod";

type Movie = { title: string; year: number };
const raw: unknown = JSON.parse('{"title": "Dune", "year": "2021"}');

// Exercise 1: Write `isMovie(value: unknown): value is Movie` by hand. Test it with `raw` (should
// fail) and with a valid movie.
export function isMovie(value: unknown): value is Movie {
  return (
    typeof value === "object" &&
    value !== null &&
    "title" in value &&
    typeof value.title === "string" &&
    "year" in value &&
    typeof value.year === "number"
  );
}

isMovie(raw); // false: year is a string
isMovie({ title: "Dune", year: 2021 }); // true

// Exercise 2: Write `parseMovies(json: string): Movie[]`, which throws a helpful error when an item
// isn't a movie.
export function parseMovies(json: string): Movie[] {
  const data: unknown = JSON.parse(json);
  if (!Array.isArray(data)) throw new Error("Expected an array of movies");
  return data.map((item, index) => {
    if (!isMovie(item)) throw new Error(`Item ${index} is not a movie: ${JSON.stringify(item)}`);
    return item;
  });
}

// Exercise 3: Install Zod (`npm install zod`) and replace your type and guard:
//
//   import { z } from "zod";
//   const MovieSchema = z.object({ title: z.string(), year: z.number() });
//   type Movie = z.infer<typeof MovieSchema>;
export const MovieSchema = z.object({ title: z.string(), year: z.number() });
export type ZodMovie = z.infer<typeof MovieSchema>;

// Exercise 4: Use `MovieSchema.safeParse(raw)` and narrow on `result.success`. Log
// `result.error.issues` when it fails.
const result = MovieSchema.safeParse(raw);
if (result.success) {
  console.log(result.data.title);
} else {
  console.log(result.error.issues); // year: "Invalid input: expected number, received string"
}

// Exercise 5: Validate environment variables: `PORT` (use `z.coerce.number()`) and `API_URL`
// (a URL). What happens when one is missing?
//
// Answer: safeParse fails with one issue per missing key, e.g. API_URL: "Invalid input: expected
// string, received undefined".
const EnvSchema = z.object({
  PORT: z.coerce.number(),
  API_URL: z.url(),
});

export const env = EnvSchema.safeParse(process.env);
