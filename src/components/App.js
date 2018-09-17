import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const ALL_USERS = gql`
    query users {
        totalUsers
        allUsers {
            githubLogin
            avatar
            name
        }
    }
`

const Users = () =>
    <Query query={ALL_USERS}>
        {({ data, loading }) => loading ?
            <p>loading...</p> :
            <div>
                <p>total Users: {data.totalUsers}</p>
                <ul>
                    {data.allUsers.map(user => 
                        <li key={user.githubLogin}> 
                            <img src={user.avatar} width={48} height={48} alt="" />
                            {user.name}
                        </li>
                    )}
                </ul>
            </div>
            
        }
    </Query>



const App = () => <Users />


export default App