const cssemojisObj = require('emojis-list')
const { map, keys, prop, append, isNil } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
// create color document
const createEmojis = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssemojisObj)})

let emojis = map(createEmojis, keys(cssemojisObj))

    module.exports = app => {
      app.use(bodyParser.json())
      app.get('/emojis', (req, res) => {
        res.send(emojis)
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
        emojis = append(req.body, emojis)
        res.send({ ok: true })
      })
    }
