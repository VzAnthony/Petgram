import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'
import Nprogress from '../../widgets/Nprogress'

export const PhotoCardWithQuery = ({ id }) => {
  const [loading, error, photo] = useGetSinglePhoto(id)
  console.log(loading)
  if (loading) {
    Nprogress.start()
    return null
  } else {
    Nprogress.done()
    return (
      <PhotoCard {...photo} />
    )
  }
}
