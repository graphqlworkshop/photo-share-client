import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { ROOT_QUERY, ADD_TEST_USER } from '../operations'

const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading }) => loading ?
            <p>loading...</p> :
            <div>
                <p>total Users: {data.totalUsers}</p>
                <Mutation mutation={ADD_TEST_USER} refetchQueries={[{query: ROOT_QUERY }]}>
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