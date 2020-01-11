import createReducer from 'helpers/createReducer'
import {storageData} from 'helpers/storage'

const defaultState = storageData('language').getValue() || 'ru'

export const actions = (actionName) => ({
  [`${actionName}`] (state, action) {
    return action.payload
  }
})

const languageReducer = (actionName) => {
  return createReducer(defaultState, actions(actionName))
}

export default languageReducer
