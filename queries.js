/*all queries required for the assignment*/


/*Find all Fiction books*/
db.books.find({ genre: 'Fiction' })

/*Find books published after 1980*/
db.books.find({ published_year: { $gt: 1980 } })

/*Find my book - Teshome B. Tadesse*/
db.books.find({ author: 'Teshome B. Tadesse' })

/*Update the price of my book from 18.75 to 30*/
db.books.updateOne(
  { title: 'Integrated Watershed Management' },
  { $set: { price: 30 } }
)

/*Delete a book by its title*/
const bookTitleToDelete = 'Geospatial Analysis for Watershed Planning';
db.books.deleteOne({ title: bookTitleToDelete })