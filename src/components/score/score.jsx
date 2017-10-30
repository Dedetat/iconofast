import React from 'react'
import PropTypes from 'prop-types'
import styles from './score.styles'

const Score = ({ style, className, score }) => (
  <div style={style} className={`${styles.container} ${className}`}>
    ✨ {score} ✨
  </div>
)

Score.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  score: PropTypes.number,
}

Score.defaultProps = {
  style: {},
  className: '',
  score: undefined,
}

export default Score
