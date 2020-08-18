import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, hidde }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {
          !hidde && <>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </>
        }
        {children}
      </Div>
    </>
  )
}
