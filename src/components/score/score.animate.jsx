import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Howl } from 'howler'
import styles from './score.styles'

export default () => (WrappedComponent) => {
  class Wrapper extends Component {
    constructor(props, context) {
      super(props, context)

      this.state = {
        className: '',
      }

      this.sound = new Howl({
        src: ['/sounds.ogg'],
        sprite: {
          bonus: [855, 1352],
          malus: [0, 565],
        },
      })
    }

    componentWillReceiveProps(nextProps) {
      const {
        score,
      } = this.props

      const nextScore = nextProps.score

      if (score > nextScore) this.setMalus()
      else if (score < nextScore) this.setBonus()
    }

    setBonus = () => {
      this.sound.play('bonus')
      this.setClassName(styles.animateBonus)
    }

    setMalus = () => {
      this.sound.play('malus')
      this.setClassName(styles.animateMalus)
    }

    setClassName = (className) => {
      this.setState(state => ({ ...state, className }))

      setTimeout(
        () => { this.setState(state => ({ ...state, className: '' })) },
        500,
      )
    }

    render() {
      const {
        className,
      } = this.state

      return (
        <WrappedComponent
          {...this.props}
          className={`${className} ${this.props.className}`}
        />
      )
    }
  }

  Wrapper.propTypes = {
    className: PropTypes.string,
    score: PropTypes.number,
  }

  Wrapper.defaultProps = {
    className: '',
    score: 0,
  }

  return Wrapper
}
