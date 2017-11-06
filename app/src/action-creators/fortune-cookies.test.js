import { setFortuneCookies } from './fortune-cookies'
import { SET_FORTUNECOOKIES } from '../constants'

test('get and dispatch fortune cookies from the api server', () => {
  function mockDispatch (action) {
    expect(action.type).toBe(SET_FORTUNECOOKIES)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setFortuneCookies(mockDispatch)

})
