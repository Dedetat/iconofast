import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Github from '../../components/github'
import styles from './gameover.styles'

const numberFormat = new Intl.NumberFormat('en')

class Gameover extends Component {
  tweetMount = (elm) => {
    const text =
`I scored ✨ ${numberFormat.format(this.props.score)} ✨ on #iconofast : ${window.location.href} !
Can you beat me ? 💪
-
@MilletDelphine / @fabienjuif
at @RennesJS #RennesJS`

    const attach = () => {
      if (!window.twttr || !window.twttr.widgets) {
        window.requestAnimationFrame(attach)
      } else {
        window.twttr.widgets.createShareButton(
          '/',
          elm,
          {
            size: 'large',
            text,
          },
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
          <span role="img" aria-label="tada" className={styles.emoji}>🎉</span>
          <h2>
            Well played, you did a
            <span className={styles.score}>&nbsp;{numberFormat.format(score)}&nbsp;</span>
            score!
          </h2>
          <div>Feel free to tweet about it</div>
          <div>or contribute on Github</div>
          <Github />
        </div>
        <div className={styles.actions}>
          <button className={styles.retry} onClick={() => { window.location.reload() }}>
            Retry
          </button>
          <div ref={this.tweetMount} className={styles.twitter} />
        </div>
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
