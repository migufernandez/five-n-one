import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load emojis

const li = emoji => {
  return (
    <li class="dib mr2" key={emoji.id} style={{ emoji: emoji.value }}>
    <Link to={`/emojis/${emoji.id}`}>
      {emoji.value}
      </Link>
    </li>
  )
}

const Emojis = props => {
  // fetch('http://localhost:5000/emojis')
  //     .then(res => res.json())
  //     .then(emojis => instance.setState({ emojis }))
  return (
    <div>
      <h1 class="mt2 mb0 tc pv4 avenir next dark-blue fw4 f2">Emojis</h1>
      <h2 class="mt0 mb0 f6 fw4 avenir next dark-blue ttu tc i tracked">The emojis you love</h2>
      <nav class="bt bb tc mw6 center mt4">
      <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/emojis/new" to="/emojis/new">Add New Emoji</Link>
      <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Menu</Link>
      </nav>
      <ul class="avenir next dark-blue list ph3 ph5-ns pv4">{map(li, props.emojis)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { emojis: state.emojis }
}

const connector = connect(mapStateToProps)

export default connector(Emojis)
