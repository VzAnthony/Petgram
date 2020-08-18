import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='User' subtitle='Aqui podras ver tus datos y modificarlos'>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </Layout>
  )
}
