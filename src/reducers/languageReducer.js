import createReducer from 'helpers/createReducer'
import {storageData} from 'helpers/storage'

const lang = storageData('language').getValue()
const defaultState = lang || 'ru'

export const actions = (actionName) => ({
  [`${actionName}`] (state, action) {
    return action.payload
  }
})

const languageReducer = (actionName) => {
  return createReducer(defaultState, actions(actionName))
}

export default languageReducer
