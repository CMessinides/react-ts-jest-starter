# React, Typescript, and Jest Package Starter

## What needs solving

Getting React, Typescript, and Jest wired together isn't the hardest thing in the world, but it gets tiresome.

## How this solves it

This boilerplate provides useful default configuration for creating an NPM package with React, Typescript, and Jest + Enzyme for testing. It also implements `semantic-release` to automate release and semantic versioning through Travis CI. The `src` directory contains a simple "Hello World" example, complete with a basic unit test.

## Installation

Create a project from this starter by cloning this repository through Git:

```bash
git clone https://github.com/CMessinides/react-ts-jest-starter.git my-project-name
```

Although not required, you may want to reset the Git history in your project. To do this, delete the `.git` directory within the project directory and replace it with `git init`:

```bash
cd my-project-name
rm -rf .git
git init
```

Install dependencies with `npm install` or `yarn install`.

To set up `semantic-release` with Travis CI, install and use the `semantic-release-cli`:

```bash
npm install -g semantic-release-cli
cd my-project-name
semantic-release-cli setup
```
Follow the CLI prompts to configure your project for automatic releases. See the [`semantic-release` docs](https://github.com/semantic-release/semantic-release) and [`semantic-release-cli` docs](https://github.com/semantic-release/cli) for more information.

## Usage

Add all source files and tests (with `.ts` and `.tsx` extensions) in the `src` directory. To run tests, use `npm test` (or `npm run test:watch` to watch for file changes and rerun relevant tests). To compile the files to Javascript, use `npm run build` (or `npm run build:watch` to watch for file changes and recompile).

## License

MIT
