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
    style={{ ...style, backgroundImage: `url(${choice.url})` }}
    className={`${styles.container} ${className}`}
    onClick={onClick}
    disabled={choice.selected}
  />
)


Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  choice: PropTypes.object,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  style: {},
  className: '',
  choice: undefined,
  onClick: undefined,
}

export default observer(Button)
