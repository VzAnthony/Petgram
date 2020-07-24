import { css, keyframes } from 'styled-components'

export const fadeInKeyframes = keyframes`
  from {
    filter:blur(5px);
    opacity: 0;
  }

  to {
    filter:blur(0);
    opacity: 1;
  }
`

export const goDownKeyframes = keyframes`
  from {
    transform: scale(.5) translateY(-50px);
  }

  to {
    transform: scale(.5) translateY(0px);
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

export const goDown = ({ time = '1s', type = 'linear' } = {}) => css`animation: ${time} ${goDownKeyframes} ${type};`
