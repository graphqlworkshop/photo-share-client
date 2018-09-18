PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Incorporate Apollo Upload Client

`yarn add apollo-upload-client`

__src/photo-share-client.js__
```javascript
import { createUploadLink } from 'apollo-upload-client'

...

const httpLink = createUploadLink({
    includeExtensions: true,
    uri: 'http://localhost:4000/graphql'
})
```

### Add the Post Photo Mutation

__src/operations.js__
```javascript
export const POST_PHOTO = gql`
    mutation addPhoto($input: PostPhotoInput!) {
        postPhoto(input:$input) {
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

### Add Routes for Post Photo Form

__src/components/App.js__
```javascript
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostPhoto from './PostPhoto'

...

render() {
    return (
        <BrowserRouter>
            <UserInterface menu={<Menu />}>
                <Switch>
                    <Route exact path="/" component={Photos} />
                    <Route path="/newPhoto" component={PostPhoto} />
                </Switch>
            </UserInterface>
        </BrowserRouter>
    )
}
```

### Connect the Post Photo Form

__src/components/PostPhoto.js__
```javascript
import React from 'react'
import { POST_PHOTO } from '../operations'
import { Mutation } from 'react-apollo'
import { PostPhotoForm } from './ui'

const PostPhoto = ({ history, location }) => {

    const photoFile = location.state && location.state.photoToUpload
    const photoSrc = location.state && location.state.photoSrc
    const token = localStorage.getItem('token')

    if (!token) {
        history.replace('/')
    }

    return (
        <Mutation mutation={POST_PHOTO}>
            {mutation => 
                <PostPhotoForm 
                    photoFile={photoFile} 
                    photoSrc={photoSrc} 
                    onSubmit={input => {
                        console.log(input)
                        mutation({ variables: { input }})
                            .then(() => history.push('/'))
                            .catch(console.error)
                    }} 
                />
            }
        </Mutation>
    )
}
    

export default PostPhoto    
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
3. [ ] Adding Photo Subscriptions
