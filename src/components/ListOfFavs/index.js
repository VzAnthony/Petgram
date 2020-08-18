import React from 'react'
import { Grid, Image, Link } from './styles'
import Nprogress from '../../widgets/Nprogress'

export const ListOfFavs = ({ favs = [], loading }) => {
  if (loading) {
    console.log(loading)
    Nprogress.start()
  }
  if (!loading) {
    Nprogress.done()
  }
  return (
    <Grid>
      {
        favs.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
