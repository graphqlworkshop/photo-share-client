PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Setup environment

`yarn add react-router-dom`

__.env__
```
REACT_APP_GITHUB_CLIENT_ID=<YOUR_CLIENT_ID>
```

__.gitignore__
```
# environment
.env
```

* restart

### Move User Component to it's Own File

__src/components/Users.js__
```javascript
import React from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

const ALL_USERS = gql` 
  ... 
`

const ADD_TEST_USER = gql`
  ...
`

const Users = () =>
    <Query query={ALL_USERS} pollInterval={1000}>
        
        ...

    </Query>

export default Users
```

### Create Authorized User Component

__src/components/AuthorizedUser.js__
```javascript
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class AuthorizedUser extends Component {
     render() {
        console.log('withRouter adds props: ', this.props)
        return <button>Sign In with Github</button>
    }
 }

 export default withRouter(AuthorizedUser) 
```

### Put it all together

__src/components/App.js__
```javascript
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthorizedUser from './AuthorizedUser'
import Users from './Users'

const App = () =>
    <BrowserRouter>
        <div>
            <AuthorizedUser />
            <Users />
        </div>
       
    </BrowserRouter>

export default App
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
2. [ ] Authorizing with Github
3. [ ] Identifying the user with `ME` Query
4. [ ] Refetching `ALL_USERS_QUERY`
5. [ ] Handling Logging Out

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
