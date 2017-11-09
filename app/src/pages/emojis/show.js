import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getEmoji } from '../../action-creators/emojis'

class ShowEmoji extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getEmoji(id)
  }

  render() {
    const props = this.props


    if (props.currentEmoji.id !== props.match.params.id) {
      return (
        <h1>Loading Emoji...</h1>
      )
    }

    return (
      <div className="vh-100" style={{backgroundEmoji: props.currentEmoji.value}}>
        <h1>{props.currentEmoji.value}</h1>
        <Link to={`/colors/${props.currentEmoji.id}/edit`}>Edit</Link>
        <button onClick={e => props.removeEmoji(props.currentEmoji.id, props.history)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentEmoji: state.currentEmoji}
}

const mapActionsToProps = (dispatch) => {
  return {
    getEmoji: id => dispatch(getEmoji(id)),
    removeEmoji: () => null
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowEmoji)
