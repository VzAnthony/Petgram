import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const [loading, error, photos] = useGetPhotos(categoryId)
  return (
    loading
      ? <ul>
        {[1].map(id => <PhotoCard key={id} id={id} />)}
      </ul>
      : <ul>
        {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      </ul>
  )
}
