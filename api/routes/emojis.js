const cssemojisObj = require('emojis-list')
const { map, keys, prop, append, isNil, find, propEq, reject, equals, compose } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const emoji = require("node-emoji")
// create color document
const createEmojis = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssemojisObj)})

let emojis = map(createEmojis, keys(cssemojisObj))

module.exports = app => {
      app.use(bodyParser.json())

      app.get('/emojis', (req, res) => {
        res.send(emojis)
      })

      app.get('/emojis/:id', (req, res) => {
      res.send(find(propEq('id', req.params.id))(emojis))
    })

      app.post('/emojis/new', (req, res) => {
        console.log('in api POST')
        if (isNil(req.body)) {
          res.status(500).send({
            ok: false,
            message:
              'Must have a json document {id, name, value} to post a document'
          })
          return
        }
        req.body.id = uuid.v4()
        emojis = append(
          { id: req.body.id, value: emoji.get(`${req.body.value}`) },
          emojis)
        res.send({ ok: true })
      })

      app.delete('/emojis/:id', (req, res) => {
  emojis = reject(compose(
    equals(req.params.id),
    prop('id')
  ), emojis)
  res.send({ok: true})
})
    }
