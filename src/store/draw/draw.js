import { types } from 'mobx-state-tree'
import shuffle from 'lodash/shuffle'
import Choice from './choice'

/* eslint-disable no-param-reassign */

export default types
  .model({
    name: types.identifier(types.string),
    layers: types.array(types.string),
    choices: types.array(Choice),
    goodChoice: types.string,
  })
  .named('Draw')
  .actions(self => ({
    shuffle: () => {
      self.choices = shuffle(self.choices.peek())
    },
  }))
  .preProcessSnapshot(({ choices, ...rest }) => ({
    ...rest,
    choices: choices.map(choice => ({ url: choice })),
  }))
