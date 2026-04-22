# Byg et SDK for en biograf

## Man skal kunne følgende (minimum):
- Oprette en instans af biografen med et tilpasset navn
- Tilknytte en liste af aktuelle film der vises i biografen
- For hver film skal der være en kalender der angiver
hvornår der er forestillinger

## Udvidede krav:
- For hver forestilling er det muligt at booke en siddeplads.
En given plads kan kun bookes en gang. I første omgang kan du lave "anonym booking".
- Gør således at en registreret bruger kan booke sidepladser.
- Knyttet til den registrerede bruger kan du lave en "ønskeliste", så brugeren kan
markerede film han eller hun er interesseret i at se i fremtiden.
- Du kan evt. gøre således at start data hentes fra en json fil.

## Begrænsninger:
- I skal ikke tænke på at gemme data i en database, i kan nøjes med
at gemme i hukommelsen (dvs. bare gemme på variable med hard coded start data).
- Det er et SDK, ikke et API. Dermed forventes det at interaktion foregår i kode
hvor man kan lave en instans af en biograf, kalde dens metoder/funktioner for at
demonstrere ovenstående funktionalitet. Der er intet UI og der er ingen requests
over netværket.

## Opgaver:
1. Oprette et state objekt
2. Fylde state i applikationen
  - Oprette biograf
  - Oprette en eller flere testbrugere
  - Oprette en eller flere film
  - Oprette nogle favorites knyttet til testbrugere
  - Oprette x antal screens og generere en generel sædeplan (oversigt over sæder)
  - Oprette MovieShowings (i.e. kalender)
3. Oprette funktion der gør at bruger kan booke et sæde for en given MovieShowing
4. Tilføj validering til bookingfunktion, dvs. sørg for at man ikke kan overskrive en eksisterende booking
5. Tilføj yderligere validering der omfatter at hente eksisterende bookings og sikre at man ikke kan booke et sæde der allerede er optaget for en given MovieShowing (i.e. find bookede sæder)
6. Beregn pris og print prisen ved booking
7. Oprette en funktion der kan liste ledige sæder for en given MovieShowing (i.e. find sæder der ikke allerede er booket). Det vil være nødvendigt at bruge information om total antal rækker og sæder fra Screen for derefter at fratrække eksisterende bookede sæder.
8. Oprette en funktion der gør at en bruger kan favorite en film
