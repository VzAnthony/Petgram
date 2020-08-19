import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/index'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { Layout } from '../components/Layout'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const [toggle, setToggle] = useState(true)
  const [register, loadingRegisterMutation, errorRegisterMutation] = useRegisterMutation()
  const [login, loadingLoginMutation, errorLoginMutation] = useLoginMutation()
  const errorMsgRegister = errorRegisterMutation && 'El usuario ya existe o hay algun problema'
  const errorMsgLogin = errorLoginMutation && 'Usuario o contraseña incorrectos'
  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  return (
    <>
      {
        toggle
          ? <Layout title='Login' subtitle='Seccion de login' hidde>
            <UserForm
              disabled={loadingLoginMutation}
              error={errorMsgLogin}
              title='Iniciar Sesion'
              onSubmit={onSubmitLogin}
              setToggle={setToggle}
              toggle={toggle}
            />
          </Layout> 
          : <Layout title='Registro' subtitle='Seccion de Registro' hidde>
            <UserForm
              disabled={loadingRegisterMutation}
              error={errorMsgRegister}
              title='Registrarse'
              onSubmit={onSubmitRegister}
              setToggle={setToggle}
              toggle={toggle}
            />
          </Layout>
      }
    </>
  )
}

export default NotRegisteredUser
