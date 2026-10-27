// Chapter 9: OOP

// Exercise 7 (bonus): Add the `@log` decorator from the slides to `Screening.book`.
function log(target: Function, context: ClassMethodDecoratorContext) {
  return function (this: unknown, ...args: unknown[]) {
    console.log(`calling ${String(context.name)}`, args);
    return target.apply(this, args);
  };
}

// Exercise 1: Create a class `Movie` with parameter properties `id`, `title` and `durationMinutes`.
// Add a getter `durationLabel` (`"2h 35m"`).
export class Movie {
  constructor(
    public id: string,
    public title: string,
    public durationMinutes: number,
  ) {}

  get durationLabel() {
    const hours = Math.floor(this.durationMinutes / 60);
    return `${hours}h ${this.durationMinutes % 60}m`;
  }
}

// Exercise 2: Create `interface Bookable` with `book(seats: number): void` and
// `available(): number`.
interface Bookable {
  book(seats: number): void;
  available(): number;
}

// Exercise 3: Implement `Bookable` in a class `Screening` with an `id` and a `private` seat count.
// Throw an error when there aren't enough seats.
export class Screening implements Bookable {
  constructor(
    public id: string,
    private freeSeats: number,
  ) {}

  @log
  book(seats: number) {
    if (seats > this.freeSeats) throw new Error(`Only ${this.freeSeats} seats left`);
    this.freeSeats -= seats;
  }

  available() {
    return this.freeSeats;
  }
}

// Exercise 4: Create `PremiumScreening extends Screening`, whose `book` logs a welcome message and
// calls `super.book()`.
export class PremiumScreening extends Screening {
  override book(seats: number) {
    console.log("Welcome to the premium lounge");
    super.book(seats);
  }
}

// Exercise 5: Create a generic `Repository<T extends { id: string }>` with `add`, `findById` and
// `all`. Use it for movies and screenings.
export class Repository<T extends { id: string }> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  findById(id: string) {
    return this.items.find((item) => item.id === id);
  }

  all() {
    return [...this.items];
  }
}

const movies = new Repository<Movie>();
movies.add(new Movie("dune", "Dune", 155));
const screenings = new Repository<Screening>();
screenings.add(new PremiumScreening("dune-imax-20", 300));

// Exercise 6: Assign an object literal with the same shape to a `Movie` variable. Then try the same
// with `Screening`. What happens, and why?
//
// Answer: the Movie literal compiles, because TypeScript compares shapes (structural typing). The
// Screening literal fails: a class with a private member only accepts instances of that class.
export const movieLike: Movie = { id: "alien", title: "Alien", durationMinutes: 117, durationLabel: "1h 57m" };

// @ts-expect-error Property 'freeSeats' is private in type 'Screening' but not in the object literal
export const screeningLike: Screening = { id: "x", freeSeats: 10, book: () => {}, available: () => 10 };
