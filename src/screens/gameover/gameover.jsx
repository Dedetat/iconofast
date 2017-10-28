import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import styles from './gameover.styles'

class Gameover extends Component {
  tweetMount = (elm) => {
    const text = `I scored ${this.props.score} on #iconofast, the flubber game created by @milletdelphine and @fabienjuif\n\n- cc @bdxio #bdxio`

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
      <div style={style} className={className}>
        Well played, you did a {score} score !

        Feel free to tweet about it : <div ref={this.tweetMount} />
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
