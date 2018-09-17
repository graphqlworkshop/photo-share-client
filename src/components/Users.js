import React from 'react'
import { gql } from 'apollo-boost'
import { Query, Mutation } from 'react-apollo'

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

const ADD_TEST_USER = gql`
    mutation addTestUser {
        githubAuth(code: "TEST") {
            token
            user {  
                githubLogin
                avatar
                name
            }
        }
    }
`

const Users = () =>
    <Query query={ALL_USERS} pollInterval={1000}>
        {({ data, loading }) => loading ?
            <p>loading...</p> :
            <div>
                <p>total Users: {data.totalUsers}</p>
                <Mutation mutation={ADD_TEST_USER}>
                    {addTestUser => <button onClick={addTestUser}>Add Test User</button>}
                </Mutation>
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

export default Users