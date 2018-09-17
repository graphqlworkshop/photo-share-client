PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Add a Logout Button

__src/components/AuthorizedUser.js__
```javascript
const CurrentUser = ({ name, avatar, logout=f=>f }) =>
    <div>
        <img src={avatar} width={48} height={48} alt="" />
        <h1>{name}</h1>
        <button onClick={logout}>logout</button>
    </div>
```

### Pass the client to the logout function

__src/components/AuthorizedUser.js__
```javascript
const Me = ({ onRequestCode=f=>f, signingIn=false, logout=f=>f }) =>
    <Query query={ROOT_QUERY}>
        {({ loading, data, client }) => data.me ?
            <CurrentUser {...data.me} logout={() => logout(client)} /> :
            loading ?
                <p>loading... </p> :
                <button onClick={onRequestCode}
                    disabled={signingIn}>
                    Sign In with Github
                </button>
        }
    </Query>
```

### Log the user out and change the cache

__src/components/AuthorizedUser.js__
```javascript
class AuthorizedUser extends Component {

    state = { signingIn: false }
    
    ...

    logout = (client) => {
        localStorage.removeItem('token')
        let data = client.readQuery({ query: ROOT_QUERY })
        data.me = null
        client.writeQuery({ query: ROOT_QUERY, data })
    }

    render() {
        return (
            <Mutation mutation={GITHUB_AUTH} 
                update={this.authorizationComplete} 
                refetchQueries={[{ query: ROOT_QUERY }]}>
                {(authorize) => {
                    this.authorize = authorize
                    return (
                        <Me onRequestCode={this.requestCode} 
                          signingIn={this.state.signingIn} 
                          logout={this.logout} />
                    )
                }}
            </Mutation>
        )
      }

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
2. [ ] Set-up Post Photo Form
3. [ ] Adding the `POST_PHOTO_MUTATION`
4. [ ] Updating the Local Cache
5. [ ] Adding Photo Subscriptions
