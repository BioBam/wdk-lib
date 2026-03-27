# Contributing to wdk-lib

Thank you for your interest in contributing. This guide covers the basics.

## Reporting Issues

Search [existing issues](https://github.com/biobam/wdk-lib/issues) before opening a new one. When filing a bug, include:

- What you expected to happen
- What actually happened
- A minimal reproduction (code snippet or test case)
- Your Node.js and wdk-lib versions

## Development Setup

```bash
git clone https://github.com/biobam/wdk-lib.git
cd wdk-lib
npm install
```

Build the project (compile, test, package):

```bash
npx projen build
```

Run tests only:

```bash
npx projen test
```

Run a specific test file:

```bash
npx jest test/YourTest.test.ts
```

## Project Configuration

This project uses [Projen](https://projen.io/) to manage project configuration. The source of truth is `.projenrc.ts`. Do not edit generated files (like `package.json`, `.gitignore`, `tsconfig.json`) directly -- they will be overwritten on the next `npx projen` run.

To change project settings, edit `.projenrc.ts` and run:

```bash
npx projen
```

## Pull Requests

- Create a feature branch from `main`
- The repository uses [semantic pull request titles](https://www.conventionalcommits.org/) (enforced by CI). Examples: `feat: add scatter support`, `fix: correct output glob`, `docs: update getting started`
- Keep PRs focused on a single change
- Add or update tests for new functionality
- Make sure all tests pass before submitting

## Code Style

Linting is configured via ESLint. Run it with:

```bash
npx projen eslint
```

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](./LICENSE).
