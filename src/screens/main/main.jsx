import React from 'react'
import PropTypes from 'prop-types'
import { observer, PropTypes as MobxPropTypes } from 'mobx-react'
import Scene from '../../components/scene'
import Button from '../../components/button'
import Score from '../../components/score'

const MainScreen = ({ style, className, choices }) => (
  <div style={style} className={className}>
    <Scene />

    {choices.map(choice => <Button key={choice} choice={choice} />)}

    <Score />
  </div>
)

MainScreen.propTypes = {
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  choices: MobxPropTypes.observableArray,
}

MainScreen.defaultProps = {
  style: {},
  className: '',
  choices: undefined,
}

export default observer(MainScreen)
