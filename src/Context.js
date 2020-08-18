import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const initialState = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }
  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  )
}
