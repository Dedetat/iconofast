import React from 'react'
import { Provider } from 'mobx-react'
import MainScreen from './screens/main'
import createStore from './store'

const App = () => (
  <Provider store={createStore()}>
    <MainScreen />
  </Provider>
)

export default App
