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
- Edit `index.tsx` to add your presentation content.

Tip: You can use the (/docs/slides.md)[slides.md] as notes. It is a markdown document that also serves as data for the slide deck, but it might be faster to skim and search in markdown.

## Building you presentation

To build your presentation for a production deploy, run `yarn build` (or `npm build` or `pnpm build`).

The build artifacts will be placed in the `dist` directory. If you'd like to change this location, edit `output.path` in `webpack.config.js`.
