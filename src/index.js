import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql',
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
