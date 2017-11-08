import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load starwars

const li = starwar => {
  return (
    <li key={starwar.id}>
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
      <Link to="/starwars/new">Add New Starwar</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.starwars)
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

export default connector(Starwars)
