import { inject } from 'mobx-react'
import Component from './scene'

export default inject(({ store }) => ({
  draws: store.draws,
}))(Component)
