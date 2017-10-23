import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { interpolateAll, splitPathString } from 'flubber'
import * as d3 from 'd3'
import flatten from 'lodash/flatten'

const animate = (sel, shapes) => {
  const start = shapes[0]
  const end = shapes[1]

  const interpolator = interpolateAll(start, end, { single: true, maxSegmentLength: 5 })

  sel
    .transition()
    .duration(1000)
    .attrTween('d', () => interpolator)
    // FIXME : mutation
    .on('end', () => {
      setTimeout(() => { sel.call(animate, shapes.slice(1).concat([shapes[0]])) }, 500)
    })
}

class Scene extends Component {
  attach = idx => (e) => {
    const center = 'M250 250Z'

    const getNbPath = path => path.split(/m|M/g).length - 1
    const countMaxPath = array => array.map(getNbPath).sort((a, b) => b - a)[0]
    const completePath = (complete, length) => (path) => {
      const nbPath = getNbPath(path)
      let genPath = path

      for (let i = 0; i < length - nbPath; i += 1) {
        genPath = `${genPath}${center}`
      }

      return genPath
    }
    const normalize = draws => {
      const maxPath = countMaxPath(flatten(draws))
      const complete = completePath(center, maxPath)
      const nbLayouts = draws.map(draw => draw.length).sort((a, b) => b - a)[0]

      return draws
        // add layouts
        .map(draw => {
          const newDraw = [...draw]

          for (let i = 0; i < nbLayouts - draw.length; i += 1) {
            newDraw.push('')
          }

          return newDraw
        })
        .map(draw => draw.map(complete))
    }

    const normalizedDraws = normalize(this.props.draws.map(draw => draw.layers.toJSON()))
    const shapes = normalizedDraws.map(draw => splitPathString(draw[idx]))
    d3
      .select(e)
      .style('display', 'block')
      .call(animate, shapes)
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
}

Scene.defaultProps = {
  style: {},
  className: '',
}

export default Scene
