PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Refactor Operations
Move all current operations to a single file:

__src/operations.js__
```javascript
import { gql } from 'apollo-boost'

// Rename ALL_USERS query to ROOT_QUERY
export const ROOT_QUERY = gql`
  ...
`

export const ADD_TEST_USER = gql`
  ...
`

export const GITHUB_AUTH = gql`
  ...
`
```

### Import new ROOT_QUERY, remove pollInterval 

__src/components/Users.js__
```javascript
import { ROOT_QUERY, ADD_TEST_USER } from '../operations'

const Users = () =>
    <Query query={ROOT_QUERY}>
```

### Refetch After Authorization

__src/components/AuthorizedUser.js__
```javascript
import { GITHUB_AUTH, ROOT_QUERY } from '../operations'

class AuthorizedUser extends Component {

    render() {
        return (
            <Mutation mutation={GITHUB_AUTH} 
                update={this.authorizationComplete} 
                refetchQueries={[{ query: ROOT_QUERY }]}>
                {authorize => {

                  ...
                
                }}
            </Mutation>
        )
      }

}

 export default withRouter(AuthorizedUser) 
```

### Challenge: Refetch after add Test User
Challenge the students to refetch the `ROOT_QUERY` after a test user has been added.

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
4. [ ] Identifying the user with `ME` Query
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
