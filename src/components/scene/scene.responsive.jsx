import React, { Component } from 'react'

export default () => WrappedComponent => class extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      scale: 1,
    }
  }

  componentDidMount() {
    const {
      width,
    } = window.screen

    // width is large enough
    if (width > 500) return

    // .8 means 80vw (10 vw for left and right margins)
    // 500 is svg width in pixels
    const scale = (width * 0.8) / 500
    const svgHeight = scale * 500

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(state => ({ ...state, scale, svgHeight }))
  }

  render() {
    const {
      scale,
      svgHeight,
    } = this.state
    const {
      style = {}, // eslint-disable-line react/prop-types
    } = this.props

    const ownStyle = {
      ...style,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      // 35vh is for actions (rounded)
      // 2.4em is for score and its margin (2 * .2em margins)
      marginTop: `calc((100vh - 35vh - 2.4em - ${svgHeight}px) / 2)`,
    }

    if (scale >= 1) {
      ownStyle.margin = '0 auto'
    }

    return <WrappedComponent {...this.props} style={ownStyle} />
  }
}
