import React from 'react'
import PropTypes from 'prop-types'
import Scene from '../../components/scene'
import Choices from '../../components/choices'
import Score from '../../components/score'

const Game = ({ style, className }) => (
  <div style={style} className={className}>
    <Score />
    <Scene />
    <Choices />
  </div>
)

Game.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Game.defaultProps = {
  style: {},
  className: '',
}

export default Game
