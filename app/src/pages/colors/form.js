import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addColor, chgColor, clearColor } from '../../action-creators/colors'

class ColorForm extends React.Component {
  componentDidMount () {
    this.props.clearColor()
  }
  render () {
    const props = this.props
      return (
        <div>
          <h1>Add New Color</h1>
          <Form
            cancelUrl="/colors"
            onChange={props.onChange}
            onSubmit={props.onSubmit(props.history)}
            value={props.currentColor.value}
            name={props.currentColor.name}
          />
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(field, value))
    },
    onSubmit: history => color => e => {
      e.preventDefault()
      dispatch(addColor(color, history))
    },
    clearColor: () => dispatch(clearColor)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(ColorForm)
