import { inject } from 'mobx-react'
import animate from './score.animate'
import Component from './score'

export default inject(({ store }) => ({
  score: store.score,
}))(animate()(Component))
