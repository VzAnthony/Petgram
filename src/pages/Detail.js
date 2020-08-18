import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'
import { Layout } from '../components/Layout'
export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)