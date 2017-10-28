import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { interpolateAll, splitPathString } from 'flubber'
import * as d3 from 'd3'
import flatten from 'lodash/flatten'

const animate = (sel, { old, current }) => {
  const interpolator = interpolateAll(old, current, { single: true, maxSegmentLength: 5 })

  sel
    .transition()
    .duration(1000)
    .attrTween('d', () => interpolator)
}

class Scene extends Component {
  attach = idx => (e) => {
    const center = 'M250 250Z'

    const getShapesLength = path => path.split(/m|M/g).length - 1
    const countMaxShapes = array => array.map(getShapesLength).sort((a, b) => b - a)[0]
    const completePath = (filler, length) => (path) => {
      const shapesLength = getShapesLength(path)
      let genPath = path

      for (let i = 0; i < length - shapesLength; i += 1) {
        genPath = `${genPath}${filler}`
      }

      return genPath
    }
    const normalize = (draws) => {
      const maxShapes = countMaxShapes(flatten(draws))
      const complete = completePath(center, maxShapes)
      const layersLength = draws.map(draw => draw.length).sort((a, b) => b - a)[0]

      return draws
        // add layouts
        .map((draw) => {
          const newDraw = [...draw]

          for (let i = 0; i < layersLength - draw.length; i += 1) {
            newDraw.push('')
          }

          return newDraw
        })
        .map(draw => draw.map(complete))
    }

    const { old, current } = this.props

    const layers = [old, current].map(draw => draw.layers.toJSON())
    const normalizedDraws = normalize(layers)
    const shapes = normalizedDraws.map(draw => splitPathString(draw[idx]))

    d3
      .select(e)
      .style('display', 'block')
      .call(animate, { old: shapes[0], current: shapes[1] })
  }

  render() {
    const { style, className } = this.props

    return (
      <svg style={style} className={className} width={500} height={500}>
        <path ref={this.attach(0)} fill="black" />
        <path ref={this.attach(1)} fill="white" />
        <path ref={this.attach(2)} fill="black" />
      </svg>
    )
  }
}

Scene.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  old: MobxPropTypes.observableObject,
  current: MobxPropTypes.observableObject,
}

Scene.defaultProps = {
  style: {},
  className: '',
  old: undefined,
  current: undefined,
}

export default observer(Scene)
