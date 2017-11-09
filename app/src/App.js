import Colors from './pages/colors'
import Buzzwords from './pages/buzzwords'
import Emojis from './pages/emojis'
import FortuneCookies from './pages/fortune-cookies'
import Starwars from './pages/starwars'

import ColorForm from './pages/colors/form'
import BuzzwordForm from './pages/buzzwords/form'
import EmojiForm from './pages/emojis/form'
import FortuneCookieForm from './pages/fortune-cookies/form'
import StarwarForm from './pages/starwars/form'

import ShowColor from './pages/colors/show'
import ShowBuzzword from './pages/buzzwords/show'
import ShowEmoji from './pages/emojis/show'
import ShowFortuneCookie from './pages/fortune-cookies/show'
import ShowStarwar from './pages/starwars/show'

import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props => {
  return (
    <div>
      <h1 className='avenir next dark-blue ba 1px mr6 br3 ml4'>  Five in One</h1>
      <ul>
        <li className='avenir next dark-blue'>
          <Link className='dark-blue' to="/colors">Colors</Link>
        </li>
        <li className='avenir next dark-blue'>
          <Link className='dark-blue' to="/buzzwords">BuzzWords</Link>
        </li>
        <li className='avenir next dark-blue'>
          <Link className='dark-blue' to="/starwars">Star Wars Names</Link>
        </li>
        <li className='avenir next dark-blue'>
          <Link className='dark-blue' to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li className='avenir next dark-blue'>
          <Link className='dark-blue' to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />

          <Route path="/colors/new" component={ColorForm} />
          <Route path="/colors/:id" component={ShowColor} />
          <Route path="/colors" component={Colors} />

          <Route path="/buzzwords/new" component={BuzzwordForm} />
          <Route path="/buzzwords/:id" component={ShowBuzzword} />
          <Route path="/buzzwords" component={Buzzwords} />

          <Route path="/emojis/new" component={EmojiForm} />
          <Route path="/emojis/:id" component={ShowEmoji} />
          <Route path="/emojis" component={Emojis} />

          <Route path="/fortune-cookies/new" component={FortuneCookieForm} />
          <Route path="/fortune-cookies/:id" component={ShowFortuneCookie} />
          <Route path="/fortune-cookies" component={FortuneCookies} />

          <Route path="/starwars/new" component={StarwarForm} />
          <Route path="/starwars/:id" component={ShowStarwar} />
          <Route path="/starwars" component={Starwars} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
