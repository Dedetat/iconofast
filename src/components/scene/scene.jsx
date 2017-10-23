import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { interpolateAll, splitPathString } from 'flubber'
import * as d3 from 'd3'
import flatten from 'lodash/flatten'

const animate = (sel, shapes) => {
  const start = shapes[0]
  const end = shapes[1]

  const interpolator = interpolateAll(start, end, { single: true });

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

      return draws
        .map(draw => draw.map(complete))
    }

    const chromium = [
      'm250.71 2.0762c-100.74-4.482-193.78 66.546-230.53 157.97-23.365 54.92-24.376 118.29-3.154 174.05 34.244 106.31 150.05 172.53 258.99 163.01 62.44-4.37 120.3-37.49 162.12-82.98 84.82-96.43 79.18-261.12-18.71-346.63-46.14-41.081-106.64-65.888-168.72-65.424z',
      'm370.76 251.06a119.7 119.7 0 0 1 -119.7 119.7 119.7 119.7 0 0 1 -119.7 -119.7 119.7 119.7 0 0 1 119.7 -119.7 119.7 119.7 0 0 1 119.7 119.7z',
      'm252.14 160c-36.273-1.6114-69.775 23.966-83.004 56.887-8.4136 19.776-8.7765 42.597-1.1337 62.671 12.332 38.28 54.031 62.122 93.253 58.693 22.483-1.5726 43.318-13.498 58.374-29.88 30.543-34.719 28.512-94.019-6.7347-124.81-16.61-14.8-38.39-23.73-60.75-23.56z',
    ]

    const mst = [
      'm257.24 11.862c-8.4245-0.1514-17.483 3.3353-26.566 17.204-34.44 52.602-104.63 153.64-160.13 236.74-36.844 55.16-70.714 101.37-70.714 124.05-0.62514 31.87 17.496 78.11 106.84 71.86 0 0 48.558-1.2452 126.66-56.509 50.021-35.395 129.24-84.035 160.75-85.946 36.655-4.1654 72.276 6.2546 101.22 21.243-39.94-56.88-171.89-269.91-214.68-319.5-7.1-8.223-14.09-9.294-23.38-9.138zm175.52 332.42c-3.9521 0.0488-7.9473 0.34659-11.945 0.91643-71.777 5.7395-138.05 76.856-201.61 101.58 51.373 79.327 256.27 34.16 280.38-48.064 5.5836-31.809-28.62-54.909-66.824-54.436z',
      'm258.94 46.455c-0.51131 0.0076-0.97681 0.03725-1.3848 0.08008-3.323 0.1621-10.896 0.47579-17.908 9.6504-46.26 60.51-174.49 257.78-180.24 271.92-2.0149 6.045-4.1775 12.404-4.7109 17.492-1.572 14.995 4.205 25.737 15.75 38.602 24.741 28.717 75.578 16.287 75.578 16.287 7.237-0.497 27.232-5.5882 50.68-18.531 44.06-24.321 104.79-66.306 147.44-86.846 21.365-10.288 43.004-10.51 50.547-9.5859 18.119-2.4996 48.736 9.9961 48.736 9.9961s-123.02-189.56-168.82-241.07c-6.14-6.9046-12.097-8.0446-15.676-7.9922zm180.08 314.45 0.002 0.002c-2.4006 0.0575-4.9322 0.26463-7.5976 0.64453-71.782 5.74-118.62 66.254-168.04 87.006 42.54 58.557 174.98 5.4443 208.37-42.762 9.918-12.197 3.2746-45.753-32.734-44.891z',
      '',
    ]

    // FIXME
    const android = [
      'm209.84 47.431c-0.68582-0.02812-1.367 0.14937-1.9535 0.55212-1.564 1.077-1.8595 3.3612-0.66254 5.1032l20.166 29.273c-32.063 14.916-54.548 43.26-57.413 76.34h218.31c-2.855-33.08-25.341-61.424-57.402-76.34l20.16-29.27c1.197-1.74 0.89719-4.0258-0.6678-5.1058-1.563-1.074-3.8048-0.54048-4.9928 1.2015l-20.949 30.409c-13.807-5.439-29.14-8.4711-45.3-8.4711s-31.494 3.0291-45.3 8.4711l-20.95-30.413c-0.75063-1.0875-1.9068-1.7041-3.0498-1.751zm-78.234 126.37c-13.45 0-24.354 10.904-24.354 24.354v98.507c0 13.45 10.904 24.354 24.354 24.354 13.451 0 24.354-10.904 24.354-24.354v-98.507c0-13.45-10.903-24.354-24.354-24.354zm295.06 0c-13.451 0-24.354 10.904-24.354 24.354v98.507c0 13.45 10.903 24.354 24.354 24.354 13.45 0 24.354-10.904 24.354-24.354v-98.507c0-13.45-10.904-24.354-24.354-24.354zm-256.69 0.75195v177.92c0 10.566 8.566 19.132 19.135 19.132h22.634v54.744c0 13.451 10.903 24.354 24.354 24.354s24.354-10.903 24.354-24.354v-54.744h37.371v54.744c0 13.451 10.902 24.354 24.354 24.354s24.354-10.903 24.354-24.354v-54.744h22.634c10.569 0 19.135-8.5614 19.135-19.132v-177.92h-218.33z',
      'm193.7 71.324c-8.25 0-14.92 6.676-14.92 14.912 0 8.238 6.68 14.914 14.92 14.914 8.23 0 14.9-6.678 14.9-14.914 0-8.238-6.67-14.912-14.9-14.912zm112.6 0c-8.23 0-14.91 6.674-14.91 14.912s6.68 14.914 14.91 14.914c8.24 0 14.91-6.678 14.91-14.914 0-8.235-6.67-14.912-14.91-14.912z',
      '',
    ]

    const vscode = [
      'm373.76 5.0254 0.17 422.47-365-54.64 365.36 123.57 122.5-50.72 2.23-386.14-125.26-54.545zm-127.33 73.903-113.01 110.88-67.348-50.88-27.857 9.28 68.565 67.74-68.923 67.62 27.858 9.29 67.655-50.64 112.7 111.35 66.28-28 0.21 0.14v-0.23l0.3-0.12-0.3-0.23 0.65-217.63-66.78-28.572z',
      'm246.07 157.86l-77.83 58.25 76.77 57.99 1.06-116.24z',
      '',
    ]

    const normalizedDraws = normalize([chromium, mst, android, vscode])
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
