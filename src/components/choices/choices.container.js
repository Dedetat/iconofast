import { inject } from 'mobx-react'
import Component from './choices'

export default inject(({ store }) => ({
  choices: store.current.choices,
}))(Component)
