import { gql } from 'apollo-boost'

export const ROOT_QUERY = gql`
    query users {
        totalUsers
        allUsers {
            githubLogin
            avatar
            name
        }
    }
`

export const ADD_TEST_USER = gql`
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

export const GITHUB_AUTH = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
            user {
                githubLogin
                avatar
                name
            }
        }
    }
`