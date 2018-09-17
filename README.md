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

### a. Start

1. [x] Create React App
2. [ ] Apollo Client Setup
3. [ ] Sending a Test Query

### b. Handling Users

1. [ ] Add `ALL_USERS` Query
2. [ ] Add `TEST_USER` Mutation
3. [ ] Setting the `pollInterval`

### c. Github Authorization

1. [ ] Environment Variables
2. [ ] Adding the React Router
3. [ ] Obtaining the Github Code
4. [ ] Authorizing with Github
5. [ ] Identifying the user with `ME` Query
6. [ ] Refetching `ALL_USERS_QUERY`
7. [ ] Handling Logging Out

### d. Incorporating Subscriptions

1. [ ] Adding a WebSocket Link
2. [ ] Persisting Data
3. [ ] Subscribing to new users
4. [ ] Updating the local cache

### e. Incorporating the UI

1. [ ] Incorporating the Main User Interface
2. [ ] Incorporating the UserList UI Component
3. [ ] Adding Fake User Authorization
4. [ ] Incorporating the Auth UI Component

### f. Posting Photos

1. [ ] Modify the `httpLink` for uploads
2. [ ] Adding `ALL_PHOTOS` Query
3. [ ] Routing to the Post Photo Form
4. [ ] Incorporating the Post Photo Form
5. [ ] Adding the `POST_PHOTO_MUTATION`
6. [ ] Incorporating the PhotoList UI Component
7. [ ] Updating the Local Cache
9. [ ] Adding Photo Subscriptions
