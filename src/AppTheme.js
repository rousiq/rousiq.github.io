import React from 'react'
import {ThemeProvider} from 'styled-components'
import {dark, light} from 'constants/themes'
import NormalizeCSS from 'themes/NormalizeCSS'
import MainCSS from 'themes/MainCSS'
import HomeContainer from 'containers/Home'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'

const enhance = compose(
  connect((state) => {
    const theme = prop('theme', state)
    return {
      theme
    }
  })
)

const AppTheme = ({theme}) => {
  const customTheme = theme === 'dark' ? dark : light

  return (
    <ThemeProvider theme={customTheme}>
      <NormalizeCSS />
      <MainCSS />
      <HomeContainer />
    </ThemeProvider>
  )
}

export default enhance(AppTheme)
