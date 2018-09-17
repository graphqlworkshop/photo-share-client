import { gql } from 'apollo-boost'

const FRAGMENT_USER_DETAILS = gql`
    fragment userDetails on User {
        githubLogin
        avatar
        name
    }
`

export const ROOT_QUERY = gql`
    query everything {
        me {
            ...userDetails
        }
        totalUsers
        allUsers {
            ...userDetails
        }
    }

    ${FRAGMENT_USER_DETAILS}
`

export const ADD_TEST_USER = gql`
    mutation addTestUser {
        githubAuth(code: "TEST") {
            token
            user {  
                ...userDetails
            }
        }
    }

    ${FRAGMENT_USER_DETAILS}
`

export const GITHUB_AUTH = gql`
    mutation authorize($code:String!) {
        githubAuth(code:$code) {
            token
            user {
                githubLogin
                ...userDetails
            }
        }
    }

    ${FRAGMENT_USER_DETAILS}
`