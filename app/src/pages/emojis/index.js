import React from 'react'
import fetch from 'isomorphic-fetch'
import {map} from 'ramda'

// load emojis

const li = emoji => {
  return (
    <li key={emoji.id} style={{emoji: emoji.value}}>
    {emoji.value}
    </li>
  )
}

function Emojis(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    emojis: []
  }

fetch('http://localhost:5000/emojis')
    .then(res => res.json())
    .then(emojis => instance.setState({ emojis }))

instance.render = function() {
    return (
      <div>
        <h1>Emojis</h1>
        <ul>{map(li, this.state.emojis)}</ul>
      </div>
    )
  }
  return instance
}

export default Emojis
