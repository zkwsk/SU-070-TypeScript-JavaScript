---

# 11 Conclusion

---

## 11.1 Wrap-up

- The TS type system is a full compile-time programming language — worth the investment
- Start simple: annotate boundaries, lean on inference, narrow at use-sites
- Reach for advanced features (conditional types, mapped types, template literals) only when the real problem demands it
- Read library source code (React, Zod, tRPC) to absorb idiomatic patterns
- Keep strict mode on and tighten settings over time (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- "Think in types": model states, actions, and variants explicitly — narrowing does the rest
- Pair TS with runtime validators (Zod, io-ts) for unknown inputs (APIs, forms, env vars)

---

## Runtime validation

Libraries:

[Jack Herrington](https://www.youtube.com/watch?v=rY_XqfSHock)
[Zod](https://github.com/colinhacks/zod)

---

## Exercises (1/4)

Data from outside your program is `unknown` until you have checked it:
```typescript
type Movie = { title: string; year: number };
const raw: unknown = JSON.parse('{"title": "Dune", "year": "2021"}');
```
1. Write `isMovie(value: unknown): value is Movie` by hand. Test it with `raw` (should fail) and with a valid movie.

---

## Exercises (2/4)

2. Write `parseMovies(json: string): Movie[]`, which throws a helpful error when an item isn't a movie.

---

## Exercises (3/4)

3. Install Zod (`npm install zod`) and replace your type and guard:
```typescript
import { z } from "zod";
const MovieSchema = z.object({ title: z.string(), year: z.number() });
type Movie = z.infer<typeof MovieSchema>;
```

---

## Exercises (4/4)

4. Use `MovieSchema.safeParse(raw)` and narrow on `result.success`. Log `result.error.issues` when it fails.
5. Validate environment variables: `PORT` (use `z.coerce.number()`) and `API_URL` (a URL). What happens when one is missing?
