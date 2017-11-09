import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFortuneCookie, removeFortuneCookie } from '../../action-creators/fortune-cookies'

class ShowFortuneCookie extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFortuneCookie(id)
  }

  render() {
    const props = this.props


    if (props.currentFortuneCookie.id !== props.match.params.id) {
      return (
        <h1>Loading Fortune Cookie...</h1>
      )
    }

    return (
      <div className="vh-100" style={{backgroundFortuneCookie: props.currentFortuneCookie.value}}>
        <h1>{props.currentFortuneCookie.value}</h1>
        <Link to={`/fortune-cookies/${props.currentFortuneCookie.id}/edit`}>Edit</Link>
        <button onClick={e => props.removeFortuneCookie(props.currentFortuneCookie.id, props.history)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentFortuneCookie: state.currentFortuneCookie}
}

const mapActionsToProps = (dispatch) => {
  return {
    getFortuneCookie: id => dispatch(getFortuneCookie(id)),
    removeFortuneCookie: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeFortuneCookie(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowFortuneCookie)
