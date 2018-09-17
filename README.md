PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add Subscription to Operations

__src/operations.js__
```javascript
export const LISTEN_FOR_USERS = gql`
    subscription {
        newUser {
            ...userDetails
        }
    }

    ${FRAGMENT_USER_DETAILS}
`
```

### Listen for new users when App component mounts

__src/components/App.js__
```javascript
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import AuthorizedUser from './AuthorizedUser'
import Users from './Users'
import { ROOT_QUERY, LISTEN_FOR_USERS } from '../operations'

class App extends Component {

    componentDidMount() {
        let { client } = this.props
        this.listenForUsers = client
            .subscribe({ query: LISTEN_FOR_USERS })
            .subscribe(({ data:{ newUser } }) => {
                const data = client.readQuery({ query: ROOT_QUERY })
                data.totalUsers += 1
                data.allUsers = [
                    ...data.allUsers,
                    newUser
                ]
                client.writeQuery({ query: ROOT_QUERY, data })
            }) 
    }

    componentWillUnmount() {
        this.listenForUsers.unsubscribe()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <AuthorizedUser />
                    <Users />
                </div>
            </BrowserRouter>
        )
    }

}

export default withApollo(App)
```

### Test with the Playground
Adding new users with the playground will cause the users to show up in the browser.

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

### Test with a new Tab
Adding new users form a different tab will cause the users to render in another tab.


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
2. [x] Persisting Data
3. [x] Subscribing to new users

### e. Incorporating the UI

1. [x] Incorporating the Main User Interface
2. [ ] Incorporating the UserList UI Component
3. [ ] Adding Fake User Authorization
4. [ ] Incorporating the Auth UI Component

### f. Posting Photos

1. [ ] Adding all photos to `ROOT_QUERY`
2. [ ] Posting Photos
3. [ ] Adding Photo Subscriptions
