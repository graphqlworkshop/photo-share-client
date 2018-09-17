import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthorizedUser from './AuthorizedUser'
import Users from './Users'

const App = () =>
    <BrowserRouter>
        <div>
            <AuthorizedUser />
            <Users />
        </div>
    </BrowserRouter>

export default App