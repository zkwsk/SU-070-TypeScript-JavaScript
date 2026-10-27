// Chapter 6: Built In Types
// Use this type:
//
//   type User = {
//     id: string;
//     name: string;
//     email: string;
//     password: string;
//     phone?: string;
//   };
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
};

// Exercise 1: Create `PublicUser` without `password` and `UserPreview` with only `id` and `name`.
export type PublicUser = Omit<User, "password">;
export type UserPreview = Pick<User, "id" | "name">;

// Exercise 2: Write `updateUser(id: string, patch: ...)`, where the patch accepts any subset of the
// fields except `id`.
export function updateUser(id: string, patch: Partial<Omit<User, "id">>) {
  return { id, ...patch };
}

updateUser("1", { name: "Ada" });
// @ts-expect-error 'id' does not exist in the patch type
updateUser("1", { id: "2" });

// Exercise 3: Create `CompleteUser`, where `phone` is required too.
export type CompleteUser = Required<User>;

// Exercise 4: Use `Record` to type the opening hours for every weekday. Leaving out a day should be
// an error:
//
//   type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
type OpeningHours = Record<Weekday, string>;

export const openingHours: OpeningHours = {
  mon: "14-23",
  tue: "14-23",
  wed: "14-23",
  thu: "14-23",
  fri: "12-01",
  sat: "10-01",
  sun: "10-22",
};
// @ts-expect-error Type is missing the properties tue, wed, thu, fri, sat, sun
export const tooFewDays: OpeningHours = { mon: "14-23" };

// Exercise 5: From `"draft" | "published" | "archived" | null`, derive `VisibleStatus`
// (no `"archived"`, no `null`) and `HiddenStatus` (only `"archived"`).
type Status = "draft" | "published" | "archived" | null;
export type VisibleStatus = Exclude<NonNullable<Status>, "archived">; // "draft" | "published"
export type HiddenStatus = Extract<Status, "archived">; // "archived"

// Exercise 6: Derive `Movie` and `FetchMovieArgs` from this function without writing the types by
// hand:
//
//   async function fetchMovie(id: string, lang = "en") {
//     return { id, lang, title: "Dune", year: 2021 };
//   }
async function fetchMovie(id: string, lang = "en") {
  return { id, lang, title: "Dune", year: 2021 };
}

export type Movie = Awaited<ReturnType<typeof fetchMovie>>; // { id: string; lang: string; title: string; year: number }
export type FetchMovieArgs = Parameters<typeof fetchMovie>; // [id: string, lang?: string]

export const fetchArgs: FetchMovieArgs = ["42"];
