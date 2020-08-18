import styled from 'styled-components'
import { MdPets as Pets } from 'react-icons/md'
import { fadeIn } from '../../styles/animation'

export const Form = styled.form`
  padding: 16px 12px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const ChangeForm = styled.p`
  text-align: center;
  margin-top: 15px;
  &  b:hover {
      color: #127681;
      text-decoration: underline;
  }
`
export const MdPets = styled(Pets)`
  height: 150px;
  width: 100%;

`
export const Error = styled.span`
  color:#fff;
  font-size: 14px;
  background: #b52b65;
  margin: 0 5%;
  display: block;
  height: 33px;
  text-align: center;
  padding-top: 1.4%;
  ${fadeIn({ time: '.5s' })}
`
