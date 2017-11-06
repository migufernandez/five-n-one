const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors.js')
const starwarRoutes = require('./routes/starwars.js')
const buzzwordRoutes = require('./routes/buzzwords.js')
const fortuneCookieRoutes = require('./routes/fortune-cookies.js')
const emojiRoute = require('./routes/emojis.js')

const app = express()
app.use(cors({ credentials: true }))

app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)
starwarRoutes(app)
buzzwordRoutes(app)
fortuneCookieRoutes(app)
emojiRoute(app)

app.listen(5000)
console.log('Server listening at 5000')
