import { SET_BUZZWORDS, CHG_CURRENT_BUZZWORD, SET_CURRENT_BUZZWORD, CLEAR_BUZZWORD } from '../constants'
import {merge} from 'ramda'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    default:
      return state
  }
}
export const currentBuzzword = (state='', action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    case SET_CURRENT_BUZZWORD:
      return action.payload
    case CLEAR_BUZZWORD:
      return {id: '', value: ''}
    default:
      return state
  }
}
