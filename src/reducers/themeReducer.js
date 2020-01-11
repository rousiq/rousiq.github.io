import createReducer from 'reducers/createReducer'
import {storageData} from 'helpers/storage'

const theme = storageData('theme').getValue()
const defaultState = theme || 'dark'

export const actions = (actionName) => ({
  [`${actionName}`] (state, action) {
    return action.payload
  }
})

const themeReducer = (actionName) => {
  return createReducer(defaultState, actions(actionName))
}

export default themeReducer
