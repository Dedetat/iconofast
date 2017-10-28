import { inject } from 'mobx-react'
import Component from './gameover'

export default inject(({ store }) => ({
  score: store.score,
}))(Component)
