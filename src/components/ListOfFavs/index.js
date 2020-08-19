import React from 'react'
import { Grid, Image, Link } from './styles'
import Nprogress from '../../widgets/Nprogress'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [], loading }) => {
  if (loading) {
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ),
  loading: PropTypes.bool
}
