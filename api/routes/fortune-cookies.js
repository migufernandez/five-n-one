const cssfortuneCookiesObj = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createFortuneCookies = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssfortuneCookiesObj)})

const FortuneCookies = map(createFortuneCookies, keys(cssfortuneCookiesObj))

module.exports = app => {

  app.get('/fortunecookies', (req, res) => {
    res.send(FortuneCookies)
  })
}
