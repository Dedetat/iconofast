import React from 'react'
import { Provider } from 'mobx-react'
import Router from './screens'
import createStore from './store'

const App = () => (
  <Provider store={createStore()}>
    <Router />
  </Provider>
)

export default App
