import { SET_FORTUNECOOKIES } from '../constants'

export const fortuneCookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNECOOKIES:
      return action.payload
    default:
      return state
  }
}
