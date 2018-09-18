PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add the Listen For Photos Operation

__src/operations.js__
```javascript
export const LISTEN_FOR_PHOTOS = gql`
    subscription {
        newPhoto {
            id
            name
            url
            created
            postedBy {
                avatar
                name
            }
        }
    }
`
```

### Listen for incoming photos

```javascript
componentDidMount() {
    
    ...
    
    this.listenForPhotos = client
        .subscribe({ query: LISTEN_FOR_PHOTOS })
        .subscribe(({ data:{ newPhoto } }) => {
            const data = client.readQuery({ query: ROOT_QUERY })
            data.totalPhotos += 1
            data.allPhotos = [
                ...data.allPhotos,
                newPhoto
            ]
            client.writeQuery({ query: ROOT_QUERY, data })
        })       
}

componentWillUnmount() {
    this.listenForUsers.unsubscribe()
    this.listenForPhotos.unsubscribe()
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
2. [x] Posting Photos
3. [x] Adding Photo Subscriptions
