const cssbuzzwordsObj = require('buzzwords')
const { map, keys, prop, append, isNil, find, propEq, reject, equals, compose } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
// create color document
const createBuzzword = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, cssbuzzwordsObj)})

let buzzwords = map(createBuzzword, keys(cssbuzzwordsObj))

  module.exports = app => {
    app.use(bodyParser.json())

    app.get('/buzzwords', (req, res) => {
      res.send(buzzwords)
    })

    app.get('/buzzwords/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(buzzwords))
  })

  app.put('/buzzwords/:id', bodyParser.json(), (req, res) => {
  if (!req.body) {
    return res.status(500).send({ok: false, message: 'Buzzword Object Required'})
  }

  buzzwords = map(buzzword => propEq('id', req.params.id, buzzword) ? req.body : buzzword, buzzwords)
  res.send({ok: true})
})

    app.post('/buzzwords/new', (req, res) => {
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
      buzzwords = append(req.body, buzzwords)
      res.send({ ok: true })
    })

    app.delete('/buzzwords/:id', (req, res) => {
  buzzwords = reject(compose(
    equals(req.params.id),
    prop('id')
  ), buzzwords)
  res.send({ok: true})
})
  }
