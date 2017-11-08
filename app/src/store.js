import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors.js'
import { buzzwords, currentBuzzword } from './reducers/buzzwords.js'
import { starwars, currentStarwar } from './reducers/starwars.js'
import { fortuneCookies, currentFortuneCookie } from './reducers/fortune-cookies.js'
import { emojis, currentEmoji } from './reducers/emojis.js'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwars,
    currentStarwar,
    fortuneCookies,
    currentFortuneCookie,
    emojis,
    currentEmoji
  }),
  applyMiddleware(thunk)
)
