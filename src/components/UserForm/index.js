import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, ChangeForm, MdPets } from './styles'

export const UserForm = ({ onSubmit, title, setToggle, toggle }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <MdPets />
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' {...email} type='email' />
        <Input placeholder='Email' {...password} type='password' />
        <Button>{title}</Button>
        {
          toggle
            ? <ChangeForm>No tienes cuenta? <b onClick={() => setToggle(false)}>Registrar</b></ChangeForm>
            : <ChangeForm>Ya tienes una cuenta? <b onClick={() => setToggle(true)}>Iniciar Sesion</b></ChangeForm>
        }
      </Form>
    </>
  )
}
