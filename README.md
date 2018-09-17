PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Create an App Component

__src/index.js__
```javascript
...

import ApolloClient from 'apollo-boost'
import App from './components/App'


const client = new ApolloClient({ uri: 'http://localhost:4000/graphql '})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)  
```

__src/components/app.js__
```javascript
import React from 'react'

const App = () => <h1>Hello World</h1>

export default App
```

### Build the Query

__src/components/app.js__
```javascript
import { gql } from 'apollo-boost'

const ALL_USERS = gql`
    query users {
        totalUsers
        allUsers {
            githubLogin
            avatar
            name
        }
    }
`
```

### Check the loading value

__src/components/app.js__
```javascript
import { Query } from 'react-apollo'

const Users = () =>
    <Query query={ALL_USERS}>
        {({ data, loading }) => loading ?
            <p>Loading</p> :
            <p>Finished Loading</p>
        }
    </Query>



const App = () => <Users />

```

### Display the Data

__src/components/app.js__
```javascript
{({ data, loading }) => loading ?
    <p>loading...</p> :
    <div>
        <p>total Users: {data.totalUsers}</p>
        <ul>
            {data.allUsers.map(user => 
                <li key={user.githubLogin}> 
                    <img src={user.avatar} width={48} height={48} alt="" />
                    {user.name}
                </li>
            )}
        </ul>
    </div>
    
}
```

Iterations
---------------

### a. Apollo Client

1. [x] Create React App
2. [x] Apollo Client Setup
3. [x] Sending a Test Query

### b. Handling Users

1. [x] Add `ALL_USERS` Query
2. [ ] Add `TEST_USER` Mutation
3. [ ] Setting the `pollInterval`

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
