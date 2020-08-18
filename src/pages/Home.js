import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => (
  <Layout title='Tu App de Fotos de Mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos' hidde='true'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

const Home = React.memo(HomePage, (prevPros, props) => {
  return prevPros.id == props.id
})

export default Home
