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

class Scene extends Component {
  attach = idx => (e) => {
    const chromium = [
      `m250.71 2.0762c-100.74-4.482-193.78 66.546-230.53 157.97-23.365 54.92-24.376 118.29-3.154 174.05 34.244 106.31 150.05 172.53 258.99 163.01 62.44-4.37 120.3-37.49 162.12-82.98 84.82-96.43 79.18-261.12-18.71-346.63-46.14-41.081-106.64-65.888-168.72-65.424z`,
      `m370.76 251.06a119.7 119.7 0 0 1 -119.7 119.7 119.7 119.7 0 0 1 -119.7 -119.7 119.7 119.7 0 0 1 119.7 -119.7 119.7 119.7 0 0 1 119.7 119.7z`,
      'm252.14 160c-36.273-1.6114-69.775 23.966-83.004 56.887-8.4136 19.776-8.7765 42.597-1.1337 62.671 12.332 38.28 54.031 62.122 93.253 58.693 22.483-1.5726 43.318-13.498 58.374-29.88 30.543-34.719 28.512-94.019-6.7347-124.81-16.61-14.8-38.39-23.73-60.75-23.56z',
    ]

    const mongo = [
      `m246.99 0.09375c-1.09 10.889-1.09 14.155-10.89 25.045-14.15 11.978-91.47 76.221-98 207.98s102.36 205.81 102.36 205.81c0-0.02 0.01-0.03 0.01-0.05 8.74 21.63 7.61 56.67 7.61 56.67l13.07 4.36s-3.27-35.94 1.09-52.27c1.28-5.12 3.88-9.58 6.91-13.33 4.05-2.7 115.64-78.83 88.91-234.94-27.22-116.52-89.29-154.63-95.82-168.79-7.63-9.798-14.16-28.308-14.16-28.308l0.04 2.5737c-0.35-2.2572-0.72-3.8716-1.13-4.752z`,
      `m250 250z`,
      `m250 250z`,
    ]

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
        <path ref={this.attach(0)} fill="blak" />
        <path ref={this.attach(1)} fill="#9fcaea" />
        <path ref={this.attach(2)} fill="black" />
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
