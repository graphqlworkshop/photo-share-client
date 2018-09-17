PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Simplify the Users component

__src/components/Users.js__
```javascript
import React from 'react'
import { Query } from 'react-apollo'
import { ROOT_QUERY } from '../operations'
import { UserList } from './ui'

const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading }) => 
            <UserList users={data.allUsers} loading={loading} />
        }
    </Query>

export default Users
```

### Simplify the Me component

__src/components/AuthorizedUser.js__
```javascript
import { Auth } from './ui'

const Me = ({ signingIn=false, logout=f=>f, onPostPhotoClick=f=>f }) =>
    <Query query={ROOT_QUERY}>
        {({ loading, data, client }) => 
            <Auth me={data.me} loading={loading} 
                    clientID={process.env.REACT_APP_GITHUB_CLIENT_ID}
                    signingIn={signingIn} 
                    onSignOut={() => logout(client)} 
                    onPostPhotoClick={onPostPhotoClick} />
        }
    </Query>
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
2. [x] Persisting Data
3. [x] Subscribing to new users

### e. Incorporating the UI

1. [x] Incorporating the Main User Interface
2. [x] Incorporating UI for Users

### f. Posting Photos

1. [ ] Adding all photos to `ROOT_QUERY`
2. [ ] Posting Photos
3. [ ] Adding Photo Subscriptions
