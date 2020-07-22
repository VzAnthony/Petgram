import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { PhotoCard } from './components/PhotoCard'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </>
  )
}

export default App
