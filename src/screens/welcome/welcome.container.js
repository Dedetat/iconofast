import { inject } from 'mobx-react'
import Component from './welcome'

export default inject(({ store }) => ({
  start: store.start,
}))(Component)
