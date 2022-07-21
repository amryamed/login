# React app skeleton

This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) with `typescript` template, with some `decoration` using [CRACO](https://github.com/gsoft-inc/craco).

### Technologies

-   React (functional components with hooks)
-   Valtio (proxy-state)
-   Typescript (JavaScript with `types system` and more)
-   Yarn (the node modules manager)
-   Prettier (An opinionated code formatter)
-   Husky (Git hooks made easy)
-   Commitlint (Linter for commit messages to respect [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec)
-   Tailwind (CSS framework)

### Folder structure

As you can see, it's a pretty `old` `create react app` generated structure with a little bit of `decorations`.

<pre>
	.
	├── craco.config.js // `create-react-app-config-override` config file
	├── package.json
	├── .env.example // env variables
	├── public
	├── README.md
	├── src
	│   ├── App.tsx
	│   ├── assets
	│   ├── components // common components
	│   ├── index.tsx
	│   ├── pages // pages components
	│   ├── react-app-env.d.ts
	│   ├── serviceWorker.ts
	│   ├── setupTests.ts
	├── tsconfig.json // typescript config file
	├── tsconfig.paths.json // paths alias (using `@folder/sub_folder` instead of `../../folder/sub_folder` in `import` statements)  
	└── yarn.lock
</pre>

### Bootstrap

-   Install app dependencies with hitting `yarn` command in your favorite `terminal`.
-   copy `.env.example` to `.env.local` and adjust it.
-   Hit `yarn start` and you `mostly` ready to GO (see #available-scripts section).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Git workflow

We choose to use a modified version of `feature branch` workflow, so every `feature branch` should be a `child` of `dev` branch (not `main` or `master` branch). For each new feature:

-   `checkout` to `dev` branch, `git fetch`/`git pull`.
-   create a branch with the name of the new feature.
-   commit the work.
-   hit `git pull --rebase origin dev` (see info about this [here](http://gitready.com/advanced/2009/02/11/pull-with-rebase.html))
-   and finally, `push` the work to `remote repo`.
-   send a `pull request`/`merge request`/`request pull` to review/merge the feature branch to `dev` (optional step).

For more information about `feature branch` workflow, see those links: [1](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), [2](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows), [3](https://bocoup.com/blog/git-workflow-walkthrough-feature-branches).

### Typing convention

We are trying to respect those **rules**:

-   Avoid using `any` as possible as you can.
-   Provide types for every thing: components, helpers, ...
-   Create a `shared types` of `a group of logic`.
-   Use `type` statement to define types.
-   Use `typescript basic types` as possible as you can (see [this link](https://www.typescriptlang.org/docs/handbook/basic-types.html) for more info).
-   Don't go crazy with your types (and don't lose your mind meanwhile!).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Todo

-   Add `router`
-   Add `i18n`
