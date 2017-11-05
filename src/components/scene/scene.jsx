import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { interpolateAll, splitPathString } from 'flubber'
import * as d3 from 'd3'

const animate = (sel, shapes) => {
  const start = shapes[0]
  const end = shapes[1]

  const interpolator = interpolateAll(start, end, { single: true });

  sel
    .transition()
    .duration(1500)
    .attrTween('d', () => interpolator)
    .on('end', () => {
      setTimeout(() => { sel.call(animate, shapes.slice(1).concat([shapes[0]])) }, 500)
    })
}

const chromium = [
  `m250.71 2.0762a247.96 247.96 0 0 0 -247.96 247.96 247.96 247.96 0 0 0 247.96 247.96 247.96 247.96 0 0 0 247.97 -247.96 247.96 247.96 0 0 0 -247.97 -247.96zm0 132.85a115.11 115.11 0 0 1 115.11 115.11 115.11 115.11 0 0 1 -115.11 115.1 115.11 115.11 0 0 1 -115.1 -115.1 115.11 115.11 0 0 1 115.1 -115.11zm1.43 25.07a89.286 89.286 0 0 0 -89.28 89.29 89.286 89.286 0 0 0 89.28 89.28 89.286 89.286 0 0 0 89.29 -89.28 89.286 89.286 0 0 0 -89.29 -89.29z`,
]

const mongo = [
  `m246.99 0.09375c-1.09 10.889-1.09 14.155-10.89 25.045-14.15 11.978-91.47 76.221-98 207.98s102.36 205.81 102.36 205.81c0-0.02 0.01-0.03 0.01-0.05 8.74 21.63 7.61 56.67 7.61 56.67l13.07 4.36s-3.27-35.94 1.09-52.27c1.28-5.12 3.88-9.58 6.91-13.33 4.05-2.7 115.64-78.83 88.91-234.94-27.22-116.52-89.29-154.63-95.82-168.79-7.63-9.798-14.16-28.308-14.16-28.308l0.04 2.5737c-0.35-2.2572-0.72-3.8716-1.13-4.752z m0 0z m0 0z`,
]

class Scene extends Component {
  attach = idx => (e) => {
    const shapes = [
      splitPathString(chromium[idx]),
      splitPathString(mongo[idx]),
    ]

    d3
      .select(e)
      .style('display', 'block')
      .call(animate, shapes)
  }

  render() {
    const { style, className } = this.props

    return (
      <svg style={style} className={className} width={500} height={500}>
        <path ref={this.attach(0)} fill="#e87adc" />
      </svg>
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
