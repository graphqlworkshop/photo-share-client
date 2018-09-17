import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import { GITHUB_AUTH, ROOT_QUERY } from '../operations'

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

}

 export default withRouter(AuthorizedUser) 