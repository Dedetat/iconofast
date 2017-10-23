import React from 'react'
import { Provider } from 'mobx-react'
import Scene from './components/scene'
import createStore from './store'

const App = () => (
  <Provider store={createStore()}>
    <Scene />
  </Provider>
)

export default App
