import { inject } from 'mobx-react'
import Component from './router'

export default inject(({ store }) => ({
  ended: store.ended,
}))(Component)
