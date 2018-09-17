import React from 'react'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import styled from 'styled-components'
import { Loading } from './'

const AllUsers = styled.div`
    overflow: hidden;
`

export const UserList = ({ loading=false, users=[], onClick=f=>f, onDoubleClick=f=>f }) => loading ?
    <Loading /> :
    <AllUsers>
        <List>
            {users.map(user => 
                <ListItem key={user.id}
                    className="user-row" 
                    leftAvatar={<Avatar src={user.avatar} />}
                    onClick={() => onClick(user)}
                    onDoubleClick={() => onDoubleClick(user)}>
                    {user.name}
                </ListItem>
            )}
        </List>
    </AllUsers>