import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()
  const toggleLikeMutation = useToggleLikeMutation()

  const handleFavClick = () => {
    toggleLikeMutation({ variables: { input: { id } } })
  }

  return (
    <Article ref={ref}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Post' />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      }
    </Article>
  )
}
