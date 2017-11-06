import React from 'react'
import fetch from 'isomorphic-fetch'
import {map} from 'ramda'

// load starwars

const li = starwar => {
  return (
    <li key={starwar.id} style={{starwar: starwar.value}}>
    {starwar.value}
    </li>
  )
}

function Starwars(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    starwars: []
  }

fetch('http://localhost:5000/starwars')
    .then(res => res.json())
    .then(starwars => instance.setState({ starwars }))

instance.render = function() {
    return (
      <div>
        <h1>Starwars</h1>
        <ul>{map(li, this.state.starwars)}</ul>
      </div>
    )
  }
  return instance
}

export default Starwars
