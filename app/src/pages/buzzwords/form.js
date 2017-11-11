import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addBuzzword, chgBuzzword, clearBuzzword } from '../../action-creators/buzzwords'
//
class BuzzwordForm extends React.Component {
  componentDidMount () {
    this.props.clearBuzzword()
}
render () {
  const props = this.props
  return (
    <div>
      <h1>Add New Buzzword</h1>
      <Form
        cancelUrl="/buzzwords"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        value={props.currentBuzzword.value}
        name={props.currentBuzzword.name}
      />
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    currentBuzzword: state.currentBuzzword
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgBuzzword(field, value))
    },
    onSubmit: history => buzzword => e => {
      e.preventDefault()
      dispatch(addBuzzword(buzzword, history))
    },
    clearBuzzword: () => dispatch(clearBuzzword)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(BuzzwordForm)
