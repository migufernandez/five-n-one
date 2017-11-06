import React from 'react'
import fetch from 'isomorphic-fetch'
import {map} from 'ramda'

// load buzzwords

const li = buzzword => {
  return (
    <li key={buzzword.id} style={{buzzword: buzzword.value}}>
    {buzzword.value}
    </li>
  )
}

function Buzzwords(props, context) {
  const instance = new React.Component(props, context)
  instance.state = {
    buzzwords: []
  }

fetch('http://localhost:5000/buzzwords')
    .then(res => res.json())
    .then(buzzwords => instance.setState({ buzzwords }))

instance.render = function() {
    return (
      <div>
        <h1>Buzzwords</h1>
        <ul>{map(li, this.state.buzzwords)}</ul>
      </div>
    )
  }
  return instance
}

export default Buzzwords
