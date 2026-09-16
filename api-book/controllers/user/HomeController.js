const Book = require('../../models/Book')

const getBooks = async(req, res) => {
    try{
        let books = await Book.find({});
        res.status(200).send({ data: books})
    } catch(err) {
        res.status(400).send({ message: 'something went wrong'})
    }
}

module.exports = {
    getBooks,
}