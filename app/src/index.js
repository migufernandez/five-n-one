import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { setColors } from './action-creators/colors'
import { setBuzzwords } from './action-creators/buzzwords'
import { setEmojis } from './action-creators/emojis'
import { setStarwars } from './action-creators/starwars'
import { setFortuneCookies } from './action-creators/fortune-cookies'

import 'tachyons'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setEmojis)
store.dispatch(setStarwars)
store.dispatch(setBuzzwords)
store.dispatch(setFortuneCookies)
