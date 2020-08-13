import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/index'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const [toggle, setToggle] = useState(true)
  return (
    <>
      {
        toggle
          ? <UserForm title='Iniciar Sesion' onSubmit={activateAuth} setToggle={setToggle} toggle={toggle} />
          : <UserForm title='Registrarse' onSubmit={activateAuth} setToggle={setToggle} toggle={toggle} />
      }
    </>
  )
}
