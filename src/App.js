import React, { useContext, useReducer } from 'react'
import { Router } from '@reach/router'
import { Context } from './Context'
import { GlobalStyle } from './GlobalStyle'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.LOGIN:
//       return { ...state, isAuth: action.payload }
//     case ACTIONS.LOGOUT:
//       return { ...state, isAuth: action.payload }
//     default:
//       return state
//   }
// }

// const ACTIONS = {
//   LOGIN: 'login',
//   LOGOUT: 'logout'
// }

const App = () => {
  const { isAuth } = useContext(Context)
  // const [state, dispatch] = useReducer(reducer, {
  //   isAuth: false
  // })
  // const { isAuth } = state
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {
          isAuth
            ? <>
              <Favs path='/favs' />
              <User path='/user' />
            </>
            : <>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </>

        }
      </Router>
      <NavBar />
    </>
  )
}

export default App
