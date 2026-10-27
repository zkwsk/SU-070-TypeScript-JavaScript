// Chapter 7: Type Narrowing

// Exercise 1: Write `formatPrice(price: number | string)`. Numbers get two decimals
// (`"120.00 DKK"`), strings are returned as they are.
export function formatPrice(price: number | string) {
  if (typeof price === "number") return `${price.toFixed(2)} DKK`;
  return price;
}

// Exercise 2: Write `formatShowtime(time: Date | string)`, which calls `toLocaleTimeString()` on
// dates.
export function formatShowtime(time: Date | string) {
  if (time instanceof Date) return time.toLocaleTimeString();
  return time;
}

// Exercise 3: Write `describeEvent(e: Film | Concert)` using the `in` operator:
//
//   type Film = { title: string; duration: number };
//   type Concert = { artist: string; setlist: string[] };
type Film = { title: string; duration: number };
type Concert = { artist: string; setlist: string[] };

export function describeEvent(event: Film | Concert) {
  if ("duration" in event) return `${event.title} (${event.duration} min)`;
  return `${event.artist} plays ${event.setlist.length} songs`;
}

// Exercise 4: This function has a bug when `seats` is `0`. Find it and fix it:
//
//   function seatsLabel(seats: number | null) {
//     if (seats) return `${seats} seats left`;
//     return "No information";
//   }
//
// Answer: `if (seats)` treats 0 as falsy, so 0 seats gives "No information". Compare with null
// instead.
export function seatsLabel(seats: number | null) {
  if (seats != null) return `${seats} seats left`;
  return "No information";
}

// Exercise 5: Write a type predicate `isFilm(x: unknown): x is Film`. Use it to filter a mixed array
// into a `Film[]`.
export function isFilm(x: unknown): x is Film {
  return (
    typeof x === "object" &&
    x !== null &&
    "title" in x &&
    typeof x.title === "string" &&
    "duration" in x &&
    typeof x.duration === "number"
  );
}

const events: (Film | Concert)[] = [
  { title: "Dune", duration: 155 },
  { artist: "Hans Zimmer", setlist: ["Time", "Dune"] },
];
export const films: Film[] = events.filter(isFilm);

// Exercise 6: Write `assertDefined<T>(value: T): asserts value is NonNullable<T>`. Use it on the
// result of `Array.find()`.
export function assertDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value == null) throw new Error("Expected a value");
}

const dune = films.find((film) => film.title === "Dune"); // Film | undefined
assertDefined(dune);
dune.duration; // Film

// Exercise 7: Write `bookingMessage(b: Booking)` with a `switch` and an exhaustiveness check. Then
// add a `"refunded"` status:
//
//   type Booking =
//     | { status: "pending" }
//     | { status: "confirmed"; seat: string }
//     | { status: "cancelled"; reason: string };
//
// Answer: adding { status: "refunded" } to Booking makes the `never` assignment fail:
// "Type '{ status: "refunded"; }' is not assignable to type 'never'"
type Booking =
  | { status: "pending" }
  | { status: "confirmed"; seat: string }
  | { status: "cancelled"; reason: string };

export function bookingMessage(booking: Booking): string {
  switch (booking.status) {
    case "pending":
      return "Waiting for payment";
    case "confirmed":
      return `See you in seat ${booking.seat}`;
    case "cancelled":
      return `Cancelled: ${booking.reason}`;
    default: {
      const exhaustive: never = booking;
      return exhaustive;
    }
  }
}
