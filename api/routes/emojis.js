const cssemojisObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createEmojis = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssemojisObj)})

const emojis = map(createEmojis, keys(cssemojisObj))

module.exports = app => {

  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
