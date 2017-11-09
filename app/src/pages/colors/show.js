import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getColor } from '../../action-creators/colors'

class ShowColor extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }

  render() {
    const props = this.props
    

    if (props.currentColor.id !== props.match.params.id) {
      return (
        <h1>Loading Color...</h1>
      )
    }

    return (
      <div className="vh-100" style={{backgroundColor: props.currentColor.value}}>
        <h1>{props.currentColor.name}</h1>
        <Link to={`/colors/${props.currentColor.id}/edit`}>Edit</Link>
        <button onClick={e => props.removeColor(props.currentColor.id, props.history)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentColor: state.currentColor}
}

const mapActionsToProps = (dispatch) => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: () => null
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowColor)
