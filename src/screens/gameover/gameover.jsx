import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './gameover.styles'

const numberFormat = new Intl.NumberFormat('en')

class Gameover extends Component {
  tweetMount = (elm) => {
    const text =
`I scored ✨ ${numberFormat.format(this.props.score)} ✨ on #iconofast : ${window.location.href} !
Can you beat me ? 💪
-
@MilletDelphine / @fabienjuif
at @bdxio #bdxio`

    const attach = () => {
      if (!window.twttr || !window.twttr.widgets) {
        window.requestAnimationFrame(attach)
      } else {
        window.twttr.widgets.createShareButton(
          '/',
          elm,
          { text },
        )
      }
    }

    attach()
  }

  render() {
    const { style, className, score } = this.props

    return (
      <div style={style} className={`container ${className}`}>
        <div className="text">
          <span role="img" aria-label="tada" className="emoji">🎉</span>
          <h2 className={styles.congrat}>
            Well played, you did a&nbsp;
            <span className={styles.score}>{numberFormat.format(score)}</span> score !
          </h2>
          <div>Feel free to tweet about it
            <div ref={this.tweetMount} className={styles.twitter} />
          </div>
        </div>
        <button onClick={() => { window.location.reload() }}>Retry</button>
      </div>
    )
  }
}

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
