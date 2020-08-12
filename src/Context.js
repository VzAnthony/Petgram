import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const initialState = {
    isAuth,
    activateAuth: () => setIsAuth(true)
  }
  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  )
}
