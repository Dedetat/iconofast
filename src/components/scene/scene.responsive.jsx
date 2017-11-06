import React, { Component } from 'react'
import styles from './scene.styles'

export default () => WrappedComponent => class extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      scale: 1,
    }
  }

  componentDidMount() {
    const {
      height,
      width,
    } = window.screen

    // width is large enough
    if (width > 500) return

    // 500 is svg width in pixels
    const scale = (height * 0.4) / 500

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(state => ({ ...state, scale }))
  }

  render() {
    const {
      scale,
    } = this.state
    const {
      style = {}, // eslint-disable-line react/prop-types
    } = this.props

    const ownStyle = {
      ...style,
      transform: `scale(${scale})`,
    }

    if (scale >= 1) {
      ownStyle.margin = '0 auto'
    }

    return (
      <div className={styles.responsive}>
        <WrappedComponent {...this.props} style={ownStyle} />
      </div>
    )
  }
}
