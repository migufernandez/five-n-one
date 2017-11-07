import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors.js'
import { buzzwords } from './reducers/buzzwords.js'
import { starwars } from './reducers/starwars.js'
import { fortuneCookies } from './reducers/fortune-cookies.js'
import { emojis } from './reducers/emojis.js'

export default createStore(
  combineReducers({
    colors,
    buzzwords,
    starwars,
    fortuneCookies,
    emojis
  }),
  applyMiddleware(thunk)
)
