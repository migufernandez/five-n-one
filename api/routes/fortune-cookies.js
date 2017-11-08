const cssfortuneCookiesObj = require('fortune-cookie')
const { map, keys, prop, append, isNil } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
// create color document
const createFortuneCookies = k => ({id: uuid.v4(), name: k,
  value: prop(k, cssfortuneCookiesObj)})

let fortunecookies = map(createFortuneCookies, keys(cssfortuneCookiesObj))

    module.exports = app => {
      app.use(bodyParser.json())
      app.get('/fortune-cookies', (req, res) => {
        res.send(fortunecookies)
      })

      app.post('/fortune-cookies/new', (req, res) => {
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
        fortunecookies = append(req.body, fortunecookies)
        res.send({ ok: true })
      })
    }
