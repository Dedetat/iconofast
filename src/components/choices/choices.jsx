import React from 'react'
import PropTypes from 'prop-types'
import { observer, PropTypes as MobxPropTypes } from 'mobx-react'
import Button from '../button'
import styles from './choices.styles'

const Choices = ({ style, className, choices }) => (
  <div style={style} className={`${styles.container} ${className}`}>
    {choices.map(choice => <Button key={choice} choice={choice} />)}
  </div>
)

Choices.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  choices: MobxPropTypes.observableArray,
}

Choices.defaultProps = {
  style: {},
  className: '',
  choices: undefined,
}

export default observer(Choices)
