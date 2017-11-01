import { inject } from 'mobx-react'
import responsive from './scene.responsive'
import Component from './scene'

export default inject(({ store }) => ({
  current: store.current,
  previous: store.previous,
}))(responsive()(Component))
