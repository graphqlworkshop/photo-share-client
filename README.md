PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add Photos to Root Query

__src/operations.js__
```javascript
export const ROOT_QUERY = gql`
    query everything {
        me {
            ...userDetails
        }
        totalUsers
        allUsers {
            ...userDetails
        }
        allPhotos {
            id
            name
            url
            created
            postedBy {
                name
                avatar
            }
        }
    }

    ${FRAGMENT_USER_DETAILS}
`
```

### Create a Photos Component

__src/components/App.js__
```javascript
import Photos from './Photos'

...

render() {
    return (
        <BrowserRouter>
            <UserInterface menu={<Menu />}>
                <Photos />
            </UserInterface>
        </BrowserRouter>
    )
}
```

### Query and Display the Photos

__src/components/Photos.js__
```javascript
import React from 'react'
import { PhotoCards } from './ui'
import { Query } from 'react-apollo'
import { ROOT_QUERY } from '../operations'

const Photos = () => 
    <Query query={ROOT_QUERY}>
        {({ data, loading }) => 
            <PhotoCards photos={data.allPhotos} loading={loading} />
        }
    </Query>

export default Photos
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

1. [x] Adding all photos to `ROOT_QUERY`
2. [ ] Set-up Post Photo Form
3. [ ] Adding the `POST_PHOTO_MUTATION`
4. [ ] Updating the Local Cache
5. [ ] Adding Photo Subscriptions
