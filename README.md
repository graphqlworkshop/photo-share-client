PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Install Apollo Cache Persist

`yarn add apollo-cache-persist`

### Persist the Cache
__src/photo-share-client.js__
```javascript
import { persistCache } from 'apollo-cache-persist'

const cache = new InMemoryCache()
persistCache({
    cache,
    storage: localStorage
})

if (localStorage['apollo-cache-persist']) {
    let cacheData = JSON.parse(localStorage['apollo-cache-persist'])
    cache.restore(cacheData)
}
```

### Set the Fetch Policy to Network Only

__src/components/Users.js__
```javascript
const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-only">
```

### Problem: Add a New User with the Playground
The fetch policy is cache only, no network request will be made. To demonstrate this add some fake users via the playgound and see what happens in the browser.

```graphql
mutation addTestUser {
  githubAuth(code:"TEST") {
    token 
    user {
      name
    }
  }
}
```

### Set the Fetch Policy to Cache and Network
Not the fetch policy will start with the cache, and later hydrate that dta from the network.

__src/components/Users.js__
```javascript
const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
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

1. [x] Adding a WebSocket Link
2. [ ] Persisting Data
3. [ ] Subscribing to new users
4. [ ] Updating the local cache

### e. Incorporating the UI

1. [ ] Incorporating the Main User Interface
2. [ ] Incorporating UI for Users

### f. Posting Photos

1. [ ] Adding all photos to `ROOT_QUERY`
2. [ ] Posting Photos
3. [ ] Adding Photo Subscriptions
