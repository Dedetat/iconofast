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
    // FIXME : mutation
    .on('end', () => { sel.call(animate, shapes.slice(1).concat([shapes[0]])) })
}

class Scene extends Component {
  attach = (e) => {
    // FIXME : PROPS ?
    const shapes = [
      // powerpuff
      splitPathString('m213.63,280.55c-21.453-14.237-26.586,23.924-30.024,38.45-3.1387,22.218,2.3716,45.658,15.9,63.657,11.093,6.8825,18.599-.17697,9.5552-10.516-12.857-29.412-10.537-63.492,4.5693-91.592z m-66.87,65.914c10.051,13.321,31.92,9.4306,41.666,17.717,4.9455,8.6358,8.5562,16.864-6.2636,10.672-15.364-2.8016-32.433-11.488-35.403-28.389z m12.727-47.964c30.415-13.145-8.2699,29.975,0,0z  m39.136-16.037c-22.13-4.0103-49.415,6.8069-53.313,31.24-4.486,20.855-.95718,48.557,21.57,57.452,8.8769,2.19,32.19,14.197,28.435-3.3426l3.3081-85.349z'),
      // triforce
      splitPathString('M345.47,250L460.94,450L230,450Z M460.94,50L576.41,250L345.47,250Z M576.41,250L691.88,450L460.94,450Z M576.41,250L691.88,450L460.94,450Z'),
    ]

    d3
      .select(e)
      .call(animate, shapes)
  }

  render() {
    const { style, className } = this.props

    return (
      <svg style={style} className={className} width={500} height={500}>
        <path ref={this.attach} />
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
