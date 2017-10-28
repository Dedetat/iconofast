import { inject } from 'mobx-react'
import Component from './score'

export default inject(({ store }) => ({
  score: store.score,
}))(Component)
