import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class AuthorizedUser extends Component {
     render() {
        console.log('withRouter adds props: ', this.props)
        return <button>Sign In with Github</button>
    }
 }

 export default withRouter(AuthorizedUser) 