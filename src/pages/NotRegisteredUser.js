import React, { useContext } from 'react'
import { Context } from '../Context'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <form onSubmit={activateAuth}>
      <button>Iniciar Sesion</button>
    </form>
  )
}


// TERMINAMOS VIENDO COMO ACTUALIZAR ESTE ESTADO CON UNA useState VER QUE NO SE PUEDE USAR FUERA DE UN COPONENTE FUNCIONAL Y QUE EL FUNCIONAMIENTO DEL USESTATE ES PARECIDO AL USEREDUCER