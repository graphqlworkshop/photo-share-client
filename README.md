PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Install the Web Socket Link

`yarn add apollo-link-ws`

### Import client from a module

__src/index.js__
```javascript
...
import client from './photo-share-client'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)  
```

### Build the Client Module

__src/photo-share-client.js__
```javascript
import { 
    InMemoryCache, 
    ApolloLink,
    HttpLink,
    ApolloClient,
    split
} from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const cache = new InMemoryCache()
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })
const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(context => ({
        headers: {
            ...context.headers,
            authorization: localStorage.getItem('token')
        }
    }))
    return forward(operation)
})

const httpAuthLink = authLink.concat(httpLink)

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: { reconnect: true }
  })
  
const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    }, 
    wsLink,
    httpAuthLink
)

export default new ApolloClient({ cache, link })
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

### e. Incorporating the UI

1. [ ] Incorporating the Main User Interface
2. [ ] Incorporating UI for Users

### f. Posting Photos

1. [ ] Adding all photos to `ROOT_QUERY`
2. [ ] Posting Photos
3. [ ] Adding Photo Subscriptions
