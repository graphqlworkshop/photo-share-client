import React from 'react'
import { Loading, CurrentUser, GithubSignInButton } from './'

export const Auth = ({ clientID, loading, me, signingIn=false, onSignOut=f=>f, onPostPhotoClick=f=>f }) => loading ?
    <Loading /> : !me ?
        <GithubSignInButton clientID={clientID} 
            signingIn={signingIn} /> :
        <CurrentUser me={me} 
            loading={loading}  
            onLogout={() => onSignOut(me)} 
            onPostPhotoClick={() => onPostPhotoClick(me)} />