import * as actionTypes from 'constants/actionTypes'

export const themeAction = (payload) => {
  return {
    type: actionTypes.THEME,
    payload
  }
}
