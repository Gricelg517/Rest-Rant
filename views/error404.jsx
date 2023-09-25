const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div> 
                    <img src="/images/Error_1.jpg" alt="Error page" width ="500" hight= "300"/>
                      <div> 
                        Photo by <a href="AUTHOR_LINK">Приморский край</a> on <a href="UNSPLASH_LINK">unsplash  </a> 
                   </div>  
               </div>   
          </main>
      </Def>
    )
  }
  

module.exports = error404

