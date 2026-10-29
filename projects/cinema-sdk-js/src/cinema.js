// Al data gemmes i hukommelsen. Hvordan `state` er struktureret er op til dig –
// forsiden viser blot hele objektet som JSON efter hvert kald.
export const state = {
  cinemas: [],
  users: [],
}

// Opretter en biograf med et navn og evt. en liste af film. Returnerer biografen.
export function createCinema(name, movies = []) {
  throw new Error('createCinema er ikke implementeret endnu')
}

// Tilføjer film (fx [{ title: 'Dune', duration: 155 }]) til en biograf.
export function addMovies(cinemaId, movies) {
  throw new Error('addMovies er ikke implementeret endnu')
}

// Tilføjer en forestilling (et Date-objekt) til en films kalender.
export function addScreening(movieId, dateTime) {
  throw new Error('addScreening er ikke implementeret endnu')
}

// Opretter en bruger med et navn og evt. en ønskeliste af film-id'er.
export function createUser(name, favorites = []) {
  throw new Error('createUser er ikke implementeret endnu')
}

// Tilføjer en film til en brugers ønskeliste.
export function addFavoriteMovie(userId, movieId) {
  throw new Error('addFavoriteMovie er ikke implementeret endnu')
}

// Booker en plads til en forestilling. Uden userId er det en anonym booking.
// En plads kan kun bookes én gang pr. forestilling.
export function addBooking(userId, screeningId, seatNumber) {
  throw new Error('addBooking er ikke implementeret endnu')
}
