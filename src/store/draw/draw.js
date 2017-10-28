import { types } from 'mobx-state-tree'
import shuffle from 'lodash/shuffle'

/* eslint-disable no-param-reassign */

export default types
  .model({
    name: types.identifier(types.string),
    layers: types.array(types.string),
    choices: types.array(types.string),
    goodChoice: types.string,
  })
  .named('Draw')
  .actions(self => ({
    shuffle: () => {
      self.choices = shuffle(self.choices.peek())
    },
  }))
