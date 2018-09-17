import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import client from './photo-share-client'

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)  