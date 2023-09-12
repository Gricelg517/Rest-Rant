const router = require('express').Router()

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
        res.send('POST /places')
      })
      
      
  })
  

module.exports = router

