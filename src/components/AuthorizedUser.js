import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo'
import { GITHUB_AUTH, ROOT_QUERY } from '../operations'
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

class AuthorizedUser extends Component {

    state = { signingIn: false }
    
    requestCode = () => {
       const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID
       window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`
    }

    authorizationComplete = (cache, { data }) => {
        localStorage.setItem('token', data.githubAuth.token)
        const { history } = this.props
        this.setState({ signingIn: false })
        history.replace('/')
    }

    logout = (client) => {
        localStorage.removeItem('token')
        let data = client.readQuery({ query: ROOT_QUERY })
        data.me = null
        client.writeQuery({ query: ROOT_QUERY, data })
    }

    componentDidMount() {
       if (window.location.search.match(/code=/)) {
           this.setState({ signingIn: true })
           const code = window.location.search.replace("?code=", "")
           this.authorize({ variables: {code} })
       }
    }

    render() {
        return (
            <Mutation mutation={GITHUB_AUTH} update={this.authorizationComplete} refetchQueries={[{ query: ROOT_QUERY }]}>
                {(authorize) => {
                    this.authorize = authorize
                    return (
                        <Me signingIn={this.state.signingIn} 
                            logout={this.logout}
                            onPostPhotoClick={() => this.props.history.push('/newPhoto')}
                            />
                    )
                }}
            </Mutation>
        )
      }

}

 export default withRouter(AuthorizedUser) 