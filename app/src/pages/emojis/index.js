import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

// load emojis

const li = emoji => {
  return (
    <li key={emoji.id} style={{ emoji: emoji.value }}>
      {emoji.value}
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
      <ul>{map(li, props.emojis)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { emojis: state.emojis }
}

const connector = connect(mapStateToProps)

export default connector(Emojis)
