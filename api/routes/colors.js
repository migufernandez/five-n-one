const csscolorsObj = require('css-color-names')
const { map, keys, prop, append, isNil } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

let colors = map(createColor, keys(csscolorsObj))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/colors', (req, res) => {
    res.send(colors)
  })

  app.post('/colors', (req, res) => {
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
    colors = append(req.body, colors)
    res.send({ ok: true })
  })
}
