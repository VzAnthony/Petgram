import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import Nprogress from '../../widgets/Nprogress'

export const ListOfPhotoCards = ({ categoryId }) => {
  const [loading, error, photos] = useGetPhotos(categoryId)
  if (loading) {
    Nprogress.start()
    return null
  } else {
    Nprogress.done()
    return (
      <ul>
        {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      </ul>
    )
  }
}
