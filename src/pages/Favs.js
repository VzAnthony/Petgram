import React from 'react'
import { useGetFavoriteWithQuery } from '../hooks/useGetFavoriteWithQuery'
import { ListOfFavs } from '../components/ListOfFavs'

export const Favs = () => {
  const [loading, error, data = { favs: [] }] = useGetFavoriteWithQuery()
  return (
    <ListOfFavs favs={data.favs} loading={loading} />
  )
}
