import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load buzzwords

const li = buzzword => {
  return (
    <li key={buzzword.id} style={{ buzzword: buzzword.value }}>
      {buzzword.value}
    </li>
  )
}

const Buzzwords = props => {
  // fetch('http://localhost:5000/buzzwords')
  //     .then(res => res.json())
  //     .then(buzzwords => instance.setState({ buzzwords }))
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/buzzwords/new">Add New Buzzword</Link>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

const connector = connect(mapStateToProps)

export default connector(Buzzwords)
