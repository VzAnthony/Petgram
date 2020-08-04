import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'
import { Router } from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </>
  )
}

export default App
