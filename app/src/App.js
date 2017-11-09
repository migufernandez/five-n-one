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

import EditColorForm from './pages/colors/edit-form'

import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props => {
  return (
    <div>
      <h1 class="mt2 mb0 tc pv4 avenir next dark-blue fw4 f1">  Five in One App</h1>
      <h2 class="mt2 mb0 f6 fw4 avenir next dark-blue ttu tc i tracked">The App that will make you feel good</h2>
      <nav class="bt bb tc mw7 center mt4">
          <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/colors">Colors</Link>
          <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/buzzwords">BuzzWords</Link>
          <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/starwars">Star Wars Names</Link>
          <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/fortune-cookies">Fortune Cookies</Link>
          <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/emojis">Emojis</Link>
      </nav>
      <footer class="pv4 ph3 ph5-ns tc">
         <a class="link dim gray dib h2 w2 br-100 mr3 " href="http://www.facebook.com" title="">
            <svg data-icon="facebook" viewBox="0 0 32 32">
              <title>facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
            </svg>
         </a>
  <a class="link dim gray dib h2 w2 br-100 mr3 " href="http://www.twitter.com" title="">
    <svg data-icon="twitter" viewBox="0 0 32 32">
      <title>twitter icon</title>
      <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
    </svg>
  </a>
  <a class="link dim gray dib br-100 h2 w2 mr3 " href="http://www.github.com" title="">
    <svg data-icon="github" viewBox="0 0 32 32">
      <title>github icon</title>
      <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
    </svg>
  </a>
         <div class="mt4">
           <a href="#" class="f6 link dim dark-blue dib mr3 mr4-ns">Help</a>
           <a href="#" class="f6 link dim dark-blue dib mr3 mr4-ns">Send feedback</a>
           <a href="#" class="f6 link dim dark-blue dib mr3 mr4-ns">Privacy</a>
           <a href="#" class="f6 link dim dark-blue dib">Terms</a>
         </div>
      </footer>
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
          <Route path="/colors/:id/edit" component={EditColorForm} />

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
