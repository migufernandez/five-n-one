import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load colors

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>
      {color.name}
      </Link>
    </li>
  )
}

const Colors = props => {
  // fetch('http://localhost:5000/colors')
  //   .then(res => res.json())
  //   .then(colors => instance.setState({ colors }))
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/colors/new">Add New Color</Link>
      <ul>{map(li, props.colors)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)
