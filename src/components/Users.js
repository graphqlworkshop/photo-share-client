import React from 'react'
import { Query } from 'react-apollo'
import { ROOT_QUERY } from '../operations'
import { UserList } from './ui'

const Users = () =>
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading }) => 
            <UserList users={data.allUsers} loading={loading} />
        }
    </Query>

export default Users