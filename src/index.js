import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from './ApolloSettings'
import { Provider } from './Context'
import App from './App'

render(
  <Provider>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
)
