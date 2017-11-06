import React from 'react'
import fetch from 'isomorphic-fetch'
import {map} from 'ramda'

// load fortune-cookies

const li = fortuneCookie => {
  return (
    <li key={fortuneCookie.id} style={{fortuneCookie: fortuneCookie.value}}>
    {fortuneCookie.value}
    </li>
  )
}

function FortuneCookies(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    fortuneCookies: []
  }

fetch('http://localhost:5000/fortune-cookies')
    .then(res => res.json())
    .then(fortuneCookies => instance.setState({ fortuneCookies }))

instance.render = function() {
    return (
      <div>
        <h1>FortuneCookies</h1>
        <ul>{map(li, this.state.fortuneCookies)}</ul>
      </div>
    )
  }
  return instance
}

export default FortuneCookies
