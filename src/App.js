import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId='' />
        </>
      }
    </>
  )
}

export default App
