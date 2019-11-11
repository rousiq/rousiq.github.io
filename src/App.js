import React from 'react'
import {ThemeProvider} from 'styled-components'
import {dark, light} from 'constants/themes'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import HomeContainer from 'containers/Home'
import {Provider} from 'react-redux'
import store from 'store'

const App = () => {
  const customTheme = store().getState().theme === 'dark' ? dark : light

  return (
    <Provider store={store()}>
      <ThemeProvider theme={customTheme}>
        <NormalizeCSS />
        <MainCSS />
        <HomeContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default App
