import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Provider } from './Context'
import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql',
  cache: new InMemoryCache()
})

render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
)
