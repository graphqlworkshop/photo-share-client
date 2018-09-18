PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Create React App
The contents of this directory were primarily produced by running `create-react-app`. The Default React components were then removed from the `src` folder. The `src/index.js` file is the entry point for our app. The following npm commands are already supported:

* `npm start`: Starts Webpack Dev Server
* `npm test`: Runs Jest Tests
* `npm run build`: Builds App for Production
* `npm eject`: Ejects `react-scripts` for build customization

### UI Components
Within the `src/components/ui` folder you will find a set of pre-built presentation components that utilize `matrial-ui` and `styled-components`. We will use these components when putting the finishing touches on the application.

Iterations
---------------

### a. Apollo Client

1. [x] Create React App
2. [ ] Apollo Client Setup
3. [ ] Sending a Test Query

### b. Handling Users

1. [ ] Add `ALL_USERS` Query
2. [ ] Add `TEST_USER` Mutation

### c. Github Authorization

1. [ ] React Configuration
2. [ ] Authorizing with Github
3. [ ] Refetching `ALL_USERS_QUERY`
4. [ ] Identifying the user with `ME` Query
5. [ ] Handling Logging Out

### d. Incorporating Subscriptions

1. [ ] Adding a WebSocket Link
2. [ ] Persisting Data
3. [ ] Subscribing to new users

### e. Incorporating the UI

1. [ ] Incorporating the Main User Interface
2. [ ] Incorporating UI for Users

### f. Posting Photos

1. [ ] Adding all photos to `ROOT_QUERY`
2. [ ] Posting Photos
3. [ ] Adding Photo Subscriptions
