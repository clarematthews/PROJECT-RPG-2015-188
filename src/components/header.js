import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Image from './image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#c0c0c0',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
	    <Image name="logo" fixed />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
