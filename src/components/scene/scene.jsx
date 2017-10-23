import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { interpolateAll } from 'flubber'

class Scene extends Component {
  attach = (e) => {
    const shapes = [
      // flubber.splitPathString(),
      // flubber.splitPathString(),
    ]
  }

  render() {
    const { style, className } = this.props

    return (
      <div style={style} className={className} ref={this.attach}>
        Scene
      </div>
    )
  }
}

Scene.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Scene.defaultProps = {
  style: {},
  className: '',
}

export default Scene
