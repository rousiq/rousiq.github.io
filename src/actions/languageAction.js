import * as actionTypes from 'constants/actionTypes'

export const languageAction = (payload) => {
  return {
    type: actionTypes.LANGUAGE,
    payload
  }
}
