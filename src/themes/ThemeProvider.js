import React from 'react'
import {ThemeProvider as Provider} from 'styled-components'
import {dark, light} from 'constants/themes'
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

const ThemeProvider = ({theme, children}) => {
  const customTheme = theme === 'dark' ? dark : light

  return (
    <Provider theme={customTheme}>
      {children}
    </Provider>
  )
}

export default enhance(ThemeProvider)
