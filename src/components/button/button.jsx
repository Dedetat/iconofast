import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import styles from './button.styles'

const Button = ({
  style,
  className,
  choice,
  onClick,
}) => (
  <button
    style={{ ...style, backgroundImage: `url(${choice})` }}
    className={`${styles.container} ${className}`}
    onClick={onClick}
  />
)

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  choice: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  style: {},
  className: '',
  choice: undefined,
  onClick: undefined,
}

export default observer(Button)
