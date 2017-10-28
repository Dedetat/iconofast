import React from 'react'
import PropTypes from 'prop-types'
// import styles from './Gameover.styles'

const Gameover = ({ style, className, score }) => (
  <div style={style} className={className}>
    Well player, you did a {score} score !

    Tweet about it : TODO
  </div>
)

Gameover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  score: PropTypes.number,
}

Gameover.defaultProps = {
  style: {},
  className: '',
  score: 0,
}

export default Gameover
