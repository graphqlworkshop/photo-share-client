import React from 'react'
import PhotoIcon from 'react-icons/lib/md/photo-camera'
import ExitIcon from 'react-icons/lib/md/exit-to-app'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import theme from 'material-ui/styles/baseThemes/lightBaseTheme'
import CircularProgress from 'material-ui/CircularProgress'
import styled from 'styled-components'

const UserDetails = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CurrentUser = ({ loading, me, onLogout=f=>f, onPostPhotoClick=f=>f }) => loading ?
  <CircularProgress color={theme.palette.accent1Color} /> :
    <UserDetails>
      <Avatar src={me.avatar} />
      <h1>{me.githubLogin}</h1>
      <p>{me.name}</p>
      <FlatButton label="logout"
        labelPosition="before"
        icon={<ExitIcon />}
        onClick={onLogout}
      />
      <RaisedButton label="post photo"
        onClick={onPostPhotoClick}
        secondary={true}
        icon={<PhotoIcon />} />
  </UserDetails>

