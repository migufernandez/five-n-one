import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load colors

const li = color => {
  return (
    <li class="dib mr2" key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>
      {color.name}
      </Link>
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1 class="mt2 mb0 tc pv4 avenir next dark-blue fw4 f2">Colors</h1>
      <h2 class="mt0 mb0 f6 fw4 avenir next dark-blue ttu tc i tracked">The colors you love</h2>
      <nav class="bt bb tc mw6 center mt4">
      <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/colors/new">Add New Color</Link>
      <Link class="avenir next black f6 f5-l link bg-animate dark-blue-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Menu</Link>
      </nav>
      <ul class="avenir next dark-blue list ph3 ph5-ns pv4">{map(li, props.colors)}</ul>
    </div>
  )
}
const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

export default connector(Colors)
