import { select } from '@inquirer/prompts';
import { $, fs } from 'zx';

const parts = (await fs.readdir(new URL('../slides', import.meta.url), { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

// CONTENT=<directory> skips the picker
const part = parts.includes(process.env.CONTENT)
  ? process.env.CONTENT
  : await select({ message: 'Which part do you want to run?', choices: parts });

const { exitCode } = await $({ stdio: 'inherit', preferLocal: true, env: { ...process.env, SLIDES_DIR: part } })`webpack-dev-server --hot --config ./webpack.config.js`.nothrow();
process.exit(exitCode);
