const starwarsObj = require('starwars-names')
const { map, keys, prop, append, isNil, find, propEq, reject, equals, compose } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const single = starwarsObj.all
// create color document
const createStarwars = k => ({id: uuid.v4(), name: k,
  value: prop(k, single)})

let starwars = map(createStarwars, keys(single))

    module.exports = app => {
      app.use(bodyParser.json())

      app.get('/starwars', (req, res) => {
        res.send(starwars)
      })

      app.get('/starwars/:id', (req, res) => {
      res.send(find(propEq('id', req.params.id))(starwars))
    })

      app.post('/starwars/new', (req, res) => {
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
        starwars = append(req.body, starwars)
        res.send({ ok: true })
      })

      app.delete('/starwars/:id', (req, res) => {
        starwars = reject(compose(
          equals(req.params.id),
          prop('id')
        ), starwars)
        res.send({ok: true})
      })

    }
