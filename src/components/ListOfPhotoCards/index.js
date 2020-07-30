import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

const getPhotos = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const ListOfPhotoCards = () => {
  const { loading, error, data : { photos = [] } = {}} = useQuery(getPhotos)
  console.log(photos)
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
