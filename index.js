require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use (express.static('public'))

//Controller & Routes
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('home')
      })
          

app.get('*', (req, res) => {
        res.render('error404')
      })
      
// Listed for Connection
app.listen(process.env.PORT)



