PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add The Mutation

__src/components/App.js__
```javascript
const ADD_TEST_USER = gql`
    mutation addTestUser {
        githubAuth(code: "TEST") {
            token
            user {  
                githubLogin
                avatar
                name
            }
        }
    }
`
```

### Trigger the Mutation with a Button

__src/components/App.js__
```javascript
import { Query, Mutation } from 'react-apollo'

...

const Users = () =>
    <Query query={ALL_USERS}>
        {({ data, loading }) => loading ?
            <p>loading...</p> :
            <div>
                <p>total Users: {data.totalUsers}</p>
                <Mutation mutation={ADD_TEST_USER}>
                    {addTestUser => <button onClick={addTestUser}>Add Test User</button>}
                </Mutation>
                <ul>

                ...

```

### Set the Poll Interval

__src/components/App.js__
```javascript
<Query query={ALL_USERS} pollInterval={1000}>
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

1. [ ] React Configuration
2. [ ] Authorizing with Github
3. [ ] Identifying the user with `ME` Query
4. [ ] Refetching `ALL_USERS_QUERY`
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
