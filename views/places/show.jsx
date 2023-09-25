const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
          <h1> Serving {data.place.cuisines}
            </h1>
            <a href={'/places/${data.id}/edit'} className="btn btn-warning"> 
                Edit
                </a>
                <form method="POST" action={'/places/${data.id}?_method=DELETE'}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                 </form> 
          <h2>Comments</h2>
            {comments}
            <form action="/places" method="POST">
             <label htmlFor="Author">Author</label>
                <input type="text" name="Author" id="name" required />

             <label htmlFor="Content">Content</label>
                     <input type="text area" name="Content" id="Content" requred /> 

             <label htmlFor="Rating">Star Rating</label>
                     <input type="number"  step="0.5" name="Rating" id="Rating" requred />
            
            <label htmlFor="Rant">Rant</label>
                     <input type="checkbox"  name="Rant" id="Rant" requred />
             </form>                    
         </main>
        </Def>
    )
}

module.exports = show
