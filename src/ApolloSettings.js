import React from 'react'
import { ApolloClient, ApolloProvider as Aprovider, InMemoryCache, createHttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const linkError = onError(({ graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors[0].message === 'user does not exist') {
    window.sessionStorage.removeItem('token')
    window.alert('Debes de Iniciar sesion para dar Likes')
    window.location.href = '/'
  }
})

const link = from ([
  linkError,
  authLink,
  httpLink
])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

export const ApolloProvider = ({ children }) => (
  <Aprovider client={client}>
    {children}
  </Aprovider>
)
