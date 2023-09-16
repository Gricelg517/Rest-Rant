require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Setting
app.set('views' ,__dirname + '/views')
app.set('view engine', 'jnpm i methodsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use (express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controller & Routes
app.use('/places', require('./controllers/place'))


app.get('/', (req, res) => {
    res.render('home')
      })
          

app.get('*', (req, res) => {
        res.render('error404')
      })
      
// Listed for Connection
app.listen(process.env.PORT)



