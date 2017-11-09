import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load emojis

const li = emoji => {
  return (
    <li key={emoji.id} style={{ emoji: emoji.value }}>
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
      <h1>Emojis</h1>
      <Link to="/emojis/new">Add New Emoji</Link>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { emojis: state.emojis }
}

const connector = connect(mapStateToProps)

export default connector(Emojis)
