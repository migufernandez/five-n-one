import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { getColor, chgColor, updateColor } from '../../action-creators/colors'
import { omit } from 'ramda'

class EditColorForm extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Color</h1>
        <Form
          name={props.currentColor.name}
          value={props.currentColor.value}
          id={props.currentColor.id}
          cancelUrl={`/colors/${props.currentColor.id}`}
          onSubmit={color => this.props.onSubmit(color, props.history)}
          onChange={props.onChange}
           />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentColor: state.currentColor
})

const mapActionsToProps = dispatch => {
  return {
    getColor: (id) => dispatch(getColor(id)),
    onChange: (field, value) => dispatch(chgColor(field, value)),
    onSubmit: (color, history) => e => {
      e.preventDefault()
      dispatch(updateColor(color, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditColorForm)
