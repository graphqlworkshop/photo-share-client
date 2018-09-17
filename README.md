PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Contents
---------------

### Install dependencies

`yarn add moment hammerjs`

`yarn add material-ui styled-components`

`yarn add react-icons@2.2.7`


### Incorporate Main User Interface with App

__src/components/App.js__
```javascript
import { UserInterface } from './ui'

...

const Menu = () => 
    <Fragment>
        <AuthorizedUser />,
        <Users />
    </Fragment>

class App extends Component {

    ...

    render() {
        return (
            <BrowserRouter>
                <UserInterface menu={<Menu />}>
                    <h1>Main Content</h1>
                </UserInterface>
            </BrowserRouter>
        )
    }

}

export default withApollo(App)
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
2. [x] Incorporating the UserList UI Component
3. [ ] Adding Fake User Authorization
4. [ ] Incorporating the Auth UI Component

### f. Posting Photos

1. [x] Adding all photos to `ROOT_QUERY`
2. [x] Posting Photos
3. [ ] Adding Photo Subscriptions
