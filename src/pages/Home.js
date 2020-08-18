import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => (
  <Layout title='Tu App de Fotos de Mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos' hidde='true'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)
