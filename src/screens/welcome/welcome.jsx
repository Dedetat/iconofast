import React from 'react'
import PropTypes from 'prop-types'
import styles from './welcome.styles'

const Welcome = ({ style, className, start }) => (
  <div style={style} className={`container ${className}`}>
    <h1 className={styles.title}>
      <span className={styles.titlePart1}>ICO</span>
      <span className={styles.titlePart2}>NO</span>
      <span className={styles.titlePart3}>FAST</span>
    </h1>
    <div className={styles.credit}>
      <div>created by</div>
      <div>
        <a href="https://twitter.com/fabienjuif">@fabienjuif</a>
        &nbsp;&&nbsp;
        <a href="https://twitter.com/MilletDelphine">@MilletDelphine</a>
      </div>
      <span role="img" aria-label="heart">💛</span>
    </div>

    <div className="text">
      <h2>Do you think you know every tech logo?</h2>
      <div>
        Find the right color for each logo as fast as possible and try to get the highest score!
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
