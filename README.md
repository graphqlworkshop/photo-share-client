PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Send a Query Using the Client

__src/index.js__
```javascript
import ApolloClient, { gql } from 'apollo-boost'

...

const TOTALS = gql`
    query totals {
        totalPhotos
        totalUsers
    }
`

client.query({ query: TOTALS })
    .then(console.log)

...

```

Iterations
---------------

### a. Apollo Client

1. [x] Create React App
2. [x] Apollo Client Setup
3. [x] Sending a Test Query

### b. Handling Users

1. [x] Add `ALL_USERS` Query
2. [x] Add `TEST_USER` Mutation

### c. Github Authorization

1. [x] React Configuration
2. [x] Authorizing with Github
3. [x] Refetching `ALL_USERS_QUERY`
4. [x] Identifying the user with `ME` Query
5. [x] Handling Logging Out

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
