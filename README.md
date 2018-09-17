PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Requesting a Github Code

__src/components/AuthorizedUser.js__
```javascript
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AuthorizedUser extends Component {

    state = { signingIn: false }
    
    requestCode = () => {
       const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID
       window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
    }

    authorizationComplete = () => {
      const { history } = this.props
      this.setState({ signingIn: false })
      history.replace('/')
    }

    componentDidMount() {
       if (window.location.search.match(/code=/)) {
           this.setState({ signingIn: true })
           const code = window.location.search.replace("?code=", "")
           alert(`code: ${code}`)
           this.authorizationComplete()
       }
    }

    render() {
      return (
        <button onClick={this.requestCode} 
          disabled={this.state.signingIn}>
           Sign In with Github
        </button>
      )
    }

}

 export default withRouter(AuthorizedUser) 
```

### Authorize with Github

__src/components/AuthorizedUser.js__
```javascript
import { Mutation } from 'react-apollo'

const GITHUB_AUTH_MUTATION = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
        }
    }
`

...

render() {
  return (
      <Mutation mutation={GITHUB_AUTH_MUTATION} update={this.authorizationComplete}>
          {authorize => {
              this.authorize = authorize
              return (
                  <button onClick={this.requestCode} 
                      disabled={this.state.signingIn}>
                      Sign In with Github
                  </button>
              )
          }}
      </Mutation>
  )
}
```

__src/components/AuthorizedUser.js__
```javascript
componentDidMount() {
    if (window.location.search.match(/code=/)) {
        this.setState({ signingIn: true })
        const code = window.location.search.replace("?code=", "")

        // Call the Mutation instead of Authorization Complete
        this.authorize({ variables: {code} })
    }
}
```

```javascript
authorizationComplete = (cache, { data }) => {
    
    // Set the token
    localStorage.setItem('token', data.githubAuth.token)
    
    const { history } = this.props
    this.setState({ signingIn: false })
    history.replace('/')
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
3. [ ] Refetching `ALL_USERS_QUERY`
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
