import React from 'react'
import GithubIcon from 'react-icons/lib/fa/github'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { Loading } from './'

const Container = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px 0;
`

export const GithubSignInButton = ({ clientID, signingIn }) => 
    <Container>
        {signingIn ? 
            <Loading /> :
            <RaisedButton
                href={`https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`}
                 buttonStyle={{backgroundColor: 'black'}}
                icon={ <GithubIcon color="white" />}
                labelColor="#FFFFFF"
                label="sign in with GitHub" />
        }
        
    </Container>