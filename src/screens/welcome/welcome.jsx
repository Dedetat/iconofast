import React from 'react'
import PropTypes from 'prop-types'
import styles from './welcome.styles'

const Welcome = ({ style, className, start }) => (
  <div style={style} className={`${styles.container} ${className}`}>
    <h1 className={styles.title}>
      <span className={styles.titlePart1}>ICONO</span>
      <span className={styles.titlePart2}>FAST</span>
    </h1>

    <div className={styles.rules}>
      <div className={styles.question}>Do you think you know every tech logo ?</div>
      <div>
        Find the right color for each logo as fast as possible and try to get the highest score !
      </div>
    </div>

    <button onClick={start} className={styles.button}>Start</button>
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
