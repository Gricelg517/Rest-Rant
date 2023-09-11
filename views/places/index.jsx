const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>
          <a href="/places">
                <button className="btn-primary">Places Page</button>
          </a>

          </h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
  module.exports = index
  