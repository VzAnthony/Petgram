import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { Layout } from '../components/Layout'
const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)

export default Detail
