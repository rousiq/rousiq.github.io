import {has} from 'ramda'

const createReducer = (initialState, handlers) => {
  return function reducer (state = initialState, action) {
    if (has(action.type, handlers)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export default createReducer
