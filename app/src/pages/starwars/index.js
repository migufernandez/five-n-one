import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

// load starwars

const li = starwar => {
  return (
    <li key={starwar.id} style={{ starwar: starwar.value }}>
      {starwar.value}
    </li>
  )
}

const Starwars = props => {
  // fetch('http://localhost:5000/starwars')
  //     .then(res => res.json())
  //     .then(starwars => instance.setState({ starwars }))
  return (
    <div>
      <h1>Starwars</h1>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

export default connector(Starwars)
