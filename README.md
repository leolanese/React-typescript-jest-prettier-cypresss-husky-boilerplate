# React, Typescript, Jest, Prettier, 2e2 Cypress - setup application boilerplate


1. Clone this repository to destination folder.

`git clone https://github.com/leolanese/react-typescript-jest-prettier-cypresss-husky-boilerplate`

2. Install dependencies.

`npm install`

3. Run local environment.

`npm start`

<a name="scripts" />

### Available scripts

`npm start` - run development server with hot reload mode,

`npm build` - build distributon package,

`npm run lint` - run lints,

`npm run lint:code` - run lint for typescript / javascript files,

`npm run lint:code:fix` - run lint for typescript / javascript files with auto fix option,

`npm run lint:style` - run lint for style files,

`npm run lint:style:fix` - run lint for style files with auto fix option,

`npm run test:jest` - run Jest tests,

`npm run test:jest:watch` - run Jest tests with watch mode,

`npm run test:jest:coverage` - run Jest tests and generate coverage report,

`npm run test:cypress` - run Cypress tests in terminal,

`npm run test:cypress:open` - open Cypress application.


### Useful information

I focused on separate logic from presentation layer of component, so components are created according to this scheme:

- **index.tsx** - main file with component declaration. You can put here a React Hooks features (eg.: useState, useEffects etc.), prepare component props, do some base logic etc. This file should return component view layer with component props set.
- **Component.tsx** - file with view layer of component.
- **Component.scss** - file with component style declaration.
- **handlers.ts** - file where You can place useful function for component.

Before You commit or push something on repository, Husky will run code lints and tests.
The configuration files are in the main project folder.
