import React from 'react'
import {ThemeProvider} from 'styled-components'
import {dark, light} from 'constants/themes'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import HomeContainer from 'containers/Home'
import {storageData} from 'helpers/storage'

const App = () => {
  const currentTheme = storageData('theme').getValue()
  const theme = currentTheme === 'dark' ? dark : light

  return (
    <ThemeProvider theme={theme}>
      <NormalizeCSS />
      <MainCSS />
      <HomeContainer />
    </ThemeProvider>
  )
}

export default App
