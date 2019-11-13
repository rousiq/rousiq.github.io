import React from 'react'
import {Provider} from 'react-redux'
import store from 'store'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import HomeContainer from 'containers/Home'
import ThemeProvider from 'themes/ThemeProvider'

const App = () => {
  return (
    <Provider store={store()}>
      <ThemeProvider>
        <NormalizeCSS />
        <MainCSS />
        <HomeContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
