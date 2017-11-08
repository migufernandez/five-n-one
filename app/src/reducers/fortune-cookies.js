import { SET_FORTUNECOOKIES, CHG_CURRENT_FORTUNECOOKIE } from '../constants'
import {merge} from 'ramda'

export const fortuneCookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNECOOKIES:
      return action.payload
    default:
      return state
  }
}
export const currentFortuneCookie = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_FORTUNECOOKIE:
      return merge(state, action.payload)
    default:
      return state
  }
}
