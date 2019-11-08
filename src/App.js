import React from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from 'Themes/constants'
import NormalizeCSS from 'Themes/NormalizeCSS'
import MainCSS from 'Themes/MainCSS'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <NormalizeCSS />
      <MainCSS />
      <h1>Hello world!</h1>
    </ThemeProvider>
  )
}

export default App
