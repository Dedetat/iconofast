import { inject } from 'mobx-react'
import Component from './main'

export default inject(({ store }) => ({
  choices: store.current.choices,
}))(Component)
