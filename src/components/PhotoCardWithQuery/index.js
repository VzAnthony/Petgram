import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'


export const PhotoCardWithQuery = ({ id }) => {
  const [loading, error, photo ] = useGetSinglePhoto(id)
  console.log(photo)
  return (
    loading
      ? <h1>Cargando...</h1>
      : <PhotoCard {...photo} />
  )
}
