# SU-070-Typescript-Javascript

Structure:

### /docs

Contains the presentation slides as a small web application.

### projects

Contains projects for exercises.

## Running your presentation

- Change into the `/docs` directory: `cd docs`
- Run `yarn install` (or `npm install` or `pnpm install`) to install dependencies.
- Run `yarn start` (or `npm start` or `pnpm start`) to start the presentation.
- Add or edit slides in `docs/slides/<part>/`. All parts are shown as one slideshow: `part 1` first, then `part 2` and so on. Within a part, files are prefixed with two digits (`01_introduction.md`, `02_programming_basics.md`, ...) and are shown in alphabetical order.

Tip: You can use the markdown files in [docs/slides](docs/slides) as notes. They also serve as data for the slide deck, but it might be faster to skim and search in markdown.

## Building you presentation

To build your presentation for a production deploy, run `yarn build` (or `npm build` or `pnpm build`).

The build artifacts will be placed in the `dist` directory. If you'd like to change this location, edit `output.path` in `webpack.config.js`.
