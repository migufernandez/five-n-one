const cssstarwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createStarwars = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssstarwarsObj)})

const starwars = map(createStarwars, keys(cssstarwarsObj))

module.exports = app => {

  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
