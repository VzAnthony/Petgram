import React from 'react'
import { useGetFavoriteWithQuery } from '../hooks/useGetFavoriteWithQuery'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => {
  const [loading, error, data = { favs: [] }] = useGetFavoriteWithQuery()
  return (
    <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <ListOfFavs favs={data.favs} loading={loading} />
    </Layout>
  )
}
