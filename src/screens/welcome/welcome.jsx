import React from 'react'
import PropTypes from 'prop-types'
// import styles from './Welcome.styles'

const Welcome = ({ style, className, start }) => (
  <div style={style} className={className}>
    Welcome

    <button onClick={start}>Start</button>
  </div>
)

Welcome.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  start: PropTypes.func,
}

Welcome.defaultProps = {
  style: {},
  className: '',
  start: undefined,
}

export default Welcome
