import React from 'react'
import PropTypes from 'prop-types'
import Gameover from './gameover'
import Game from './game'
import Welcome from './welcome'

const Router = ({ started, ended, ...props }) => {
  if (ended) return <Gameover {...props} />
  if (started) return <Game {...props} />
  return <Welcome {...props} />
}

Router.propTypes = {
  ended: PropTypes.bool,
  started: PropTypes.bool,
}

Router.defaultProps = {
  ended: false,
  started: false,
}

export default Router
