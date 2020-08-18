import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, ChangeForm, MdPets, Error } from './styles'
import { SubmitButton } from '../../components/SubmitButton'
import Nprogress from '../../widgets/Nprogress'

export const UserForm = ({ onSubmit, title, setToggle, toggle, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  if (disabled) {
    Nprogress.start()
  } else {
    Nprogress.done()
  }
  return (
    <>
      <MdPets />
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='Email' {...email} type='email' />
        <Input disabled={disabled} placeholder='Password' {...password} type='password' />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
        {
          toggle
            ? <ChangeForm>No tienes cuenta? <b onClick={() => setToggle(false)}>Registrar</b></ChangeForm>
            : <ChangeForm>Ya tienes una cuenta? <b onClick={() => setToggle(true)}>Iniciar Sesion</b></ChangeForm>
        }
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
