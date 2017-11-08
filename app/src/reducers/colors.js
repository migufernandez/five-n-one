import { SET_COLORS, CHG_CURRENT_COLOR, SET_CURRENT_COLOR } from '../constants'
import { merge } from 'ramda'

export const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}

export const currentColor = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      return merge(state, action.payload)
    case SET_CURRENT_COLOR:
      return action.payload
    default:
      return state
  }
}
