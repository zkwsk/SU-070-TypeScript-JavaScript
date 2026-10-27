// Chapter 4: Type Modifiers

// Exercise 1: Create a `Seat` type with readonly `row: string` and `number: number`, and an optional
// `reserved: boolean`. Try to change `row`.
export type Seat = {
  readonly row: string;
  readonly number: number;
  reserved?: boolean;
};

const seat: Seat = { row: "A", number: 1 };
// @ts-expect-error Cannot assign to 'row' because it is a read-only property
seat.row = "B";

// Exercise 2: Create `const hall: readonly Seat[]`. Try `hall.push(...)`, then add a seat to a new
// array with spread syntax instead.
const hall: readonly Seat[] = [seat, { row: "A", number: 2 }, { row: "A", number: 3 }];
// @ts-expect-error Property 'push' does not exist on type 'readonly Seat[]'
hall.push({ row: "A", number: 4 });
export const biggerHall = [...hall, { row: "A", number: 4 }];

// Exercise 3: Create one type with `email?: string` and one with `email: string | undefined`.
// Which of them accepts `{}`?
//
// Answer: only `email?: string`. With `string | undefined` the key must be present.
type OptionalEmail = { email?: string };
type UndefinedEmail = { email: string | undefined };

export const withoutKey: OptionalEmail = {};
// @ts-expect-error Property 'email' is missing
export const missingKey: UndefinedEmail = {};
export const explicitUndefined: UndefinedEmail = { email: undefined };

// Exercise 4: Create a class `Ticket` with the parameter properties `public movie`, `private price`
// and `protected seat`. Try to read `ticket.price` outside the class.
//
// Exercise 5: Add a `static issued` counter that goes up in the constructor, and a static factory
// `Ticket.complimentary(movie, seat)`.
export class Ticket {
  static issued = 0;

  constructor(
    public movie: string,
    private price: number,
    protected seat: string,
  ) {
    Ticket.issued++;
  }

  getPrice() {
    return this.price;
  }

  static complimentary(movie: string, seat: string) {
    return new Ticket(movie, 0, seat);
  }
}

const ticket = new Ticket("Dune", 120, "A1");
// @ts-expect-error Property 'price' is private
ticket.price;
Ticket.complimentary("Alien", "B4");

// Exercise 6: Create `abstract class Screening` with `abstract ticketPrice(): number` and a
// `summary()` method. Implement `StandardScreening` and `ImaxScreening`.
abstract class Screening {
  abstract ticketPrice(): number;

  summary() {
    return `Tickets cost ${this.ticketPrice()} DKK`;
  }
}

export class StandardScreening extends Screening {
  ticketPrice() {
    return 120;
  }
}

// Exercise 7: Change `summary()` in `ImaxScreening` using `override`. Turn on `noImplicitOverride`
// and remove the keyword. What happens?
//
// Answer: with noImplicitOverride (see tsconfig.json), removing `override` is a compile error:
// "This member must have an 'override' modifier because it overrides a member in the base class"
export class ImaxScreening extends Screening {
  ticketPrice() {
    return 180;
  }

  override summary() {
    return `IMAX! ${super.summary()}`;
  }
}
