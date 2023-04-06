# Welcome to the Netsite Project

This is the frontend rebuild of Netsite. Netsite is online access to all critical information related to any fire protection system at any facility or site serviced by ORR Protection

## Technical Info:

### Create React App:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Apollo CLI:

Apollo CLI is used to generate API code from Graphql endpoints [Apollo CLI](https://www.apollographql.com/docs/devtools/cli/).

### Sentry.io

Sentry is used for logging [Sentry.io](https://sentry.io/welcome/)

### React Bootstrap:

React bootstrap is used for styles/components: [React-Bootstrap](https://react-bootstrap.github.io/)

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

### `apollo:generate`

Will build the types/interfaces to interact with the GQL endpoint. The types will be built in the 'generated' folder

## Pull Requests

In order to stay organized and maintain a good history with our code, pull requests should maintain the following:

1. Each feature/user story should be a seperate pull request. 
2. Each the branch should be named "[netsite-##]description"
3. When a pull request is approved, a squash merge will be done.
4. After the merge the feature branch will be closed.
