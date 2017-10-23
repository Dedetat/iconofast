import { types } from 'mobx-state-tree'

export default types
  .model({
    name: types.reference(types.string),
    layers: types.array(types.string),
    choices: types.array(types.string),
    goodChoice: types.string,
  })
  .named('Draw')
