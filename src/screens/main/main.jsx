import React from 'react'
import PropTypes from 'prop-types'
import Scene from '../../components/scene'
import Choices from '../../components/choices'
import Score from '../../components/score'

const MainScreen = ({ style, className }) => (
  <div style={style} className={className}>
    <Scene />

    <Choices />
    <Score />
  </div>
)

MainScreen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

MainScreen.defaultProps = {
  style: {},
  className: '',
}

export default MainScreen
