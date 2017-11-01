import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './score.styles'

export default () => (WrappedComponent) => {
  class Wrapper extends Component {
    constructor(props, context) {
      super(props, context)

      this.state = {
        className: '',
      }
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
      // TODO: bonus sound
      this.setClassName(styles.animateBonus)
    }

    setMalus = () => {
      // TODO: malus sound
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
