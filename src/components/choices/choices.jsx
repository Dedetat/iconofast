import React from 'react'
import PropTypes from 'prop-types'
import { observer, PropTypes as MobxPropTypes } from 'mobx-react'
import Button from '../button'
// import styles from './Choices.styles'

const Choices = ({ style, className, choices }) => (
  <div style={style} className={className}>
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
