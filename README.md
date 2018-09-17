PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add Me to the Root Query

__src/operations.js__
```javascript
export const ROOT_QUERY = gql`
    query everything {
        me {
          githubLogin
          avatar
          name
        }
        totalUsers
        allUsers {
          githubLogin
          avatar
          name
        }
    }
`
```

### Pass Current User's token in the Header

__src/index.js__
```javascript
const client = new ApolloClient({ 
  uri: 'http://localhost:4000/graphql',
  request: operation => {
    operation.setContext(context => ({
        headers: {
            ...context.headers,
            authorization: localStorage.getItem('token')
        }
    }))
  }
})
```

### Create a Current User Component

__src/components/AuthorizedUser.js__
```javascript
const CurrentUser = ({ name, avatar }) =>
    <div>
        <img src={avatar} width={48} height={48} alt="" />
        <h1>{name}</h1>
    </div>
```

### Create a Me component

__src/components/AuthorizedUser.js__
```javascript
const Me = ({ onRequestCode=f=>f, signingIn=false }) =>
    <Query query={ROOT_QUERY}>
        {({ loading, data }) => data.me ?
            <CurrentUser {...data.me} /> :
            loading ?
                <p>loading... </p> :
                <button onClick={onRequestCode}
                    disabled={signingIn}>
                    Sign In with Github
                </button>
        }
    </Query>
```

### Render the Me component

__src/components/AuthorizedUser.js__
```javascript
class AuthorizedUser extends Component {

    state = { signingIn: false }
    
    ...

    render() {
        return (
            <Mutation mutation={GITHUB_AUTH} update={this.authorizationComplete} refetchQueries={[{ query: ROOT_QUERY }]}>
                {authorize => {
                    this.authorize = authorize
                    return (
                        <Me onRequestCode={this.requestCode} signingIn={this.state.signingIn} />
                    )
                }}
            </Mutation>
        )
      }

}
```

### Bonus: Refactor Operations with a Fragment

__src/operations.js__
```javascript
import { gql } from 'apollo-boost'

const FRAGMENT_USER_DETAILS = gql`
    fragment userDetails on User {
        githubLogin
        avatar
        name
    }
`

export const ROOT_QUERY = gql`
    query everything {
        me {
            ...userDetails
        }
        totalUsers
        allUsers {
            ...userDetails
        }
    }

    ${FRAGMENT_USER_DETAILS}
`

export const ADD_TEST_USER = gql`
    mutation addTestUser {
        githubAuth(code: "TEST") {
            token
            user {  
                ...userDetails
            }
        }
    }

    ${FRAGMENT_USER_DETAILS}
`

export const GITHUB_AUTH = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
            user {
                githubLogin
                ...userDetails
            }
        }
    }

    ${FRAGMENT_USER_DETAILS}
`
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
5. [ ] Handling Logging Out

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
