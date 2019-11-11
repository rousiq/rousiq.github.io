import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import {languageAction} from 'actions/languageAction'
import {themeAction} from 'actions/themeAction'
import HomeGrid from 'containers/Home/Grid'
import {prop} from 'ramda'

export default compose(
  connect((state) => {
    const language = prop('language', state)
    const theme = prop('theme', state)
    return {
      language,
      theme
    }
  }),
  withHandlers({
    setLanguage: props => (value) => {
      const {dispatch} = props
      return dispatch(languageAction(value))
    },
    setTheme: props => (value) => {
      const {dispatch} = props
      return dispatch(themeAction(value))
    }
  })
)(HomeGrid)
