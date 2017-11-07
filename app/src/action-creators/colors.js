import fetch from 'isomorphic-fetch'
import { SET_COLORS, CHG_CURRENT_COLOR } from '../constants'
const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(color)
  console.log('BODY', body)

  const result = await fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json())
  console.log('RESULT', result)
  console.log('RESULT.ok', result.ok)
  if (result.ok) {
    console.log('I am here')
    dispatch(setColors)
    history.push('/colors')
  } else {
    // handle error
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } })
}