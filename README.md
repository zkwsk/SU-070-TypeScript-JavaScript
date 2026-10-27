# SU-070-Typescript-Javascript

Structure:

### /docs

Contains the presentation slides as a small web application.

### projects

Contains projects for exercises.

## Running your presentation

- Change into the `/docs` directory: `cd docs`
- Run `yarn install` (or `npm install` or `pnpm install`) to install dependencies.
- Run `yarn start` (or `npm start` or `pnpm start`) and use the arrow keys to pick which part of the course to present.
- Add or edit slides in `docs/slides/<part>/`. Each directory (`part 1`, `part 2`, ...) is one slideshow and shows up in the picker automatically. Files are prefixed with two digits (`01_introduction.md`, `02_programming_basics.md`, ...) and are shown in alphabetical order.

Tip: You can use the markdown files in [docs/slides](docs/slides) as notes. They also serve as data for the slide deck, but it might be faster to skim and search in markdown.

## Building you presentation

To build your presentation for a production deploy, run `yarn build` (or `npm build` or `pnpm build`).

The build artifacts will be placed in the `dist` directory. If you'd like to change this location, edit `output.path` in `webpack.config.js`.
