import React from 'react'
import theme from 'material-ui/styles/baseThemes/lightBaseTheme'
import CircularProgress from 'material-ui/CircularProgress'
import styled from 'styled-components'

const LoadingBox = styled.div`
    width: 100%;
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Loading = ({ children }) => 
    <LoadingBox>
        <CircularProgress color={theme.palette.accent1Color} />
        {children}
    </LoadingBox>