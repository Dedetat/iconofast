import { types } from 'mobx-state-tree'

/* eslint-disable no-param-reassign */

export default types
  .model({
    selected: false,
    url: types.string,
  })
  .named('Choice')
  .actions(self => ({
    setSelected: () => { self.selected = true },
  }))
