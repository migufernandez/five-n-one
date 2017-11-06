const cssbuzzwordsObj = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createBuzzwords = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssbuzzwordsObj)})

const buzzwords = map(createBuzzwords, keys(cssbuzzwordsObj))

module.exports = app => {

  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
}
