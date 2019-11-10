import React from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from 'Themes/constants'
import NormalizeCSS from 'Themes/NormalizeCSS'
import MainCSS from 'Themes/MainCSS'
import HomeContainer from 'containers/Home'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <NormalizeCSS />
      <MainCSS />
      <HomeContainer />
    </ThemeProvider>
  )
}

export default App
