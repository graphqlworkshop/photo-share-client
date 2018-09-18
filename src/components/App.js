import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import AuthorizedUser from './AuthorizedUser'
import Users from './Users'
import Photos from './Photos'
import PostPhoto from './PostPhoto'
import { ROOT_QUERY, LISTEN_FOR_USERS } from '../operations'
import { UserInterface } from './ui'

const Menu = () => 
    <Fragment>
        <AuthorizedUser />,
        <Users />
    </Fragment>

class App extends Component {

    componentDidMount() {
        let { client } = this.props
        this.listenForUsers = client
            .subscribe({ query: LISTEN_FOR_USERS })
            .subscribe(({ data:{ newUser } }) => {
                const data = client.readQuery({ query: ROOT_QUERY })
                data.totalUsers += 1
                data.allUsers = [
                    ...data.allUsers,
                    newUser
                ]
                client.writeQuery({ query: ROOT_QUERY, data })
            }) 
    }

    componentWillUnmount() {
        this.listenForUsers.unsubscribe()
    }

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

}

export default withApollo(App)