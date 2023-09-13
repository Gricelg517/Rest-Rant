const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/delicious_grill.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/dessert.jpg'
      }]
      res.render('places/index',{places})
      
router.get('/new', (req, res) => {
        res.render('places/new')
      })
      router.post('/', (req, res) => {
        console.log(req.body)
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        res.send('POST /places')
      })
      router.get('/:id', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
          res.render('error404')
        }
        else if (!places[id]) {
            res.render('error404')
        }
        else {
          res.render('places/show' , {place:places[id] })
        }
      })
      
        
      
      
  })
  

module.exports = router

