const cssstarwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
const single = cssstarwarsObj.all
// create color document
const createStarwars = k => ({id: uuid.v4(), name: k,
  value: prop(k, single)})

const starwars = map(createStarwars, keys(single))

module.exports = app => {

  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
