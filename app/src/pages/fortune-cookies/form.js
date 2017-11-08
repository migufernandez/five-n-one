import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addFortuneCookie, chgFortuneCookie } from '../../action-creators/fortune-cookies'
//
const FortuneCookieForm = props => {
  return (
    <div>
      <h1>Add New Fortune-cookie</h1>
      <Form
        cancelUrl="/fortune-cookies"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentFortuneCookie}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentFortuneCookie: state.currentFortuneCookie
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgFortuneCookie(field, value))
    },
    onSubmit: history => fortunecookie => e => {
      e.preventDefault()
      dispatch(addFortuneCookie(fortunecookie, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(FortuneCookieForm)
