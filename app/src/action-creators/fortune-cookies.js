import fetch from 'isomorphic-fetch'
import { SET_FORTUNECOOKIES, CHG_CURRENT_FORTUNECOOKIE, SET_CURRENT_FORTUNECOOKIE } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setFortuneCookies = async (dispatch, getState) => {
  const fortuneCookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNECOOKIES, payload: fortuneCookies })
}
export const addFortuneCookie = (fortunecookie, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json'}
  const method = 'POST'
  const body = JSON.stringify(fortunecookie)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setFortuneCookies)
    history.push('/fortune-cookies')
  } else {
    // handle error
  }
}

export const chgFortuneCookie = (field, value) => (dispatch, getState) => {
  dispatch({type: CHG_CURRENT_FORTUNECOOKIE, payload: {[field]: value}})
}

export const getFortuneCookie = id => async (dispatch, getState) => {
  const fortuneCookie = await fetch(url + '/' + id).then(res => res.json())
  dispatch({type: SET_CURRENT_FORTUNECOOKIE, payload: fortuneCookie})
}
