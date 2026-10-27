# SU070 Typescript/Javascript

---
## Introduction

 - Meet and greet
 - Setting expectations

---
## Overview

  - Day 1: Javascript/Ecmascript
  - Day 2: Typescript
  - Day 3: Project and recap of day 1 and 2

---
## Bookmarks (1/2)

- Official documentation: [typescriptlang.org](https://www.typescriptlang.org/docs/)
- Typescript Deep Dive: [basarat.gitbook.io/typescript](https://basarat.gitbook.io/typescript/)
- Typescript Playground: [typescriptlang.org/play](https://www.typescriptlang.org/play)
- Code Sandbox [codesandbox.io](https://codesandbox.io/)
- Can I use [caniuse.com](https://caniuse.com/)

---
## Bookmarks (2/2)

- Web Dev Simplified: [https://www.youtube.com/@WebDevSimplified](https://www.youtube.com/@WebDevSimplified)
- Typescript Simplified: [https://learn.webdevsimplified.com/typescript-simplified-course](https://learn.webdevsimplified.com/typescript-simplified-course)]
- Jack Herrington [Youtube channel](https://www.youtube.com/watch?v=j92fxPpFaL8&list=PLNqp92_EXZBIKO8lqN3089jgZUi-FUFXX)
- Matt Pocock: [youtube.com/@mattpocockuk](https://www.youtube.com/@mattpocockuk)
- Total Typescript: [totaltypescript.com](https://www.totaltypescript.com)

---
## How about AI?

- Should we use AI to learn programmings?

---
## What is Javascript/Ecmascript?

- Born in the browser
- Dynamically typed (run-time)
- Interpreted
- Functional and object-oriented
- Event-driven
- Constrained by browser compatibility

---
## Timeline

- 1997: Ecmascript
- ES4 dropped
- 2009: ES5
- 2009: First release of Node.js
- 2015: ES6 - "Next generation javascript"
- 2016-2022: [Continuous annual releases](https://en.wikipedia.org/wiki/ECMAScript_version_history): ES7, ES8, ES9, ES10, ES11, ES12, ES13, ES14, ES15, ES16

---
## What is Typescript?

- Superset of Javascript
- Statically typed (compile-time)

--- { "layout": "center"}
## Superset of Javascript
![Superset](./assets/js-today-typescript.png)
---
## Statically typed

This is ok:

```typescript
let x:number = 1;
const multiplyByTwo = (x:number) => {
  return x * 2;
}
```

This will fail:

```typescript
let x:string = "1";
const multiplyByTwo = (x:number) => {
  return x * 2;
}
```
--- { "layout": "center"}
## Compilation 1/2
![Typescript Lifecycle](./assets/typescript-lifecycle.png)

---
## Compilation 2/2

- Design time
  - Editing the project in VSCode
- Compile time
  - The project is converted to Javascript
- Run time
  - The project runs as Javascript in the browser or Node.js
  - Note: Typescript types do not exist at runtime

---
## Why Typescript?

- Confidence
- Fast feedback loops 
  - Design time errors
    - Feedback in editor > "Fail fast"
  - Compile time errors
- Less need for validation logic and fewer unit tests
- Future javascript now

---
## Toolbox

- Install NPM and Node.JS
- Install Yarn
- Install Vite
- Install VSCode

---
## NPM 1/2

NPM is responsible for package management in Javascript. We use NPM to install and manage dependencies. Make sure you have Node.js (minimum v.24.x) installed.

[Download Node.js](https://nodejs.org/en/download/)

---
## NPM 2/2

On Linux/Unix/Mac you can use a package manager to install Node.js:
- Mac: [HomeBrew](https://brew.sh/)
- Linux: [APT](https://ubuntu.com/server/docs/package-management)

On Windows I recommend using WSL to get a Linux-like environment.

---
# Yarn

- Yarn is a "layer" on top of NPM that offers some improvements in terms of e.g. performance.
- Yarn is not a requirement, but code examples in the course will be based on Yarn, as Yarn has moved towards becoming the new industry standard for Javascript development.

Install Yarn globally:

```bash
$ npm install yarn --global
```
---
# Vite

- Development server (no build required, hot module replacement)
- Bundler
- Simple configuration compared with Webpack or older tools like Grunt and Gulp

Setup a new project (Vanilla, React, Angular, Svelte, etc.)

```bash
$ npm create vite@latest
```


---
# VSCode

VSCode is not a requirement (you can e.g. use WebStorm, or terminal/VIM), BUT...
- VSCode is "widely accepted" as the best code editor and IDE
- Good Typescript support
- Runs on all platforms (and in the browser with Github Codespaces)

Therefore the course is based on using VSCode.

[Download VSCode](https://code.visualstudio.com/download)

---
## Break
