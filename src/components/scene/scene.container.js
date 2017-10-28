import { inject } from 'mobx-react'
import Component from './scene'

export default inject(({ store }) => ({
  current: store.current,
  previous: store.previous,
}))(Component)
