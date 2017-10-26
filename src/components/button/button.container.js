import { inject } from 'mobx-react'
import Component from './button'

export default inject(({ store }, { choice }) => ({
  onClick: () => store.verify(choice),
}))(Component)
