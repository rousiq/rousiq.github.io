import {combineReducers} from 'redux'
import * as actionTypes from 'constants/actionTypes'
import languageReducer from 'reducers/languageReducer'
import themeReducer from 'reducers/themeReducer'

export default combineReducers({
  language: languageReducer(actionTypes.LANGUAGE),
  theme: themeReducer(actionTypes.THEME)
})
