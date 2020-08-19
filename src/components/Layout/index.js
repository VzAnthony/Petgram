import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hidde: PropTypes.bool
}
