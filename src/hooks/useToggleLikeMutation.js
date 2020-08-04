import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const useToggleLikeMutation = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)
  return toggleLikePhoto
}
