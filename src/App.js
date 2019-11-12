import React from 'react'
import {Provider} from 'react-redux'
import store from 'store'
import AppTheme from 'AppTheme'

const App = () => {
  return (
    <Provider store={store()}>
      <AppTheme />
    </Provider>
  )
}

export default App
