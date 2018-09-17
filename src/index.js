import React from 'react'
import { render } from 'react-dom'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql '})

const TOTALS = gql`
    query totals {
        totalPhotos
        totalUsers
    }
`

client.query({ query: TOTALS })
    .then(console.log)

render(
  <ApolloProvider client={client}>
    <h1>Hello World</h1>
  </ApolloProvider>,
  document.getElementById('root')
)  