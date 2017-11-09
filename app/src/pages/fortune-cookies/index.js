import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// load fortune-cookies

const li = fortuneCookie => {
  return (
    <li key={fortuneCookie.id} style={{ fortuneCookie: fortuneCookie.value }}>
    <Link to={`/fortune-cookies/${fortuneCookie.id}`}>
      {fortuneCookie.value}
      </Link>
    </li>
  )
}

const FortuneCookies = props => {
  // fetch('http://localhost:5000/fortune-cookies')
  //     .then(res => res.json())
  //     .then(fortuneCookies => instance.setState({ fortuneCookies }))
  return (
    <div>
      <h1>FortuneCookies</h1>
      <Link to="/fortune-cookies/new">Add New Fortune-Cookie</Link>
      <ul>{map(li, props.fortuneCookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { fortuneCookies: state.fortuneCookies }
}

const connector = connect(mapStateToProps)

export default connector(FortuneCookies)
