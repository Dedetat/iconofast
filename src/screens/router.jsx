import React from 'react'
import PropTypes from 'prop-types'
import Gameover from './gameover'
import Game from './game'

const Router = ({ ended, ...props }) => {
  if (ended) return <Gameover {...props} />
  return <Game {...props} />
}

Router.propTypes = {
  ended: PropTypes.bool,
}

Router.defaultProps = {
  ended: false,
}

export default Router
