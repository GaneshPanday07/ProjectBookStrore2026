const Book = require('../../models/Book')

const getBooks = async(req, res) => {
    try{
        let books = await Book.find({});
        res.status(200).send({ data: books})
    } catch(err) {
        res.status(400).send({ message: 'something went wrong'})
    }
}

const getBookForUser = async(req, res) => {
    try{
        let id = req.params.id;
        let book = await Book.findOne({ _id: id });
        console.log(book)
        res.status(200).send({ data: book })
    } catch(err){
        res.status(400).send({ message: 'Something went wrong'})
    }
}

module.exports = {
  getBooks,
  getBookForUser,
}