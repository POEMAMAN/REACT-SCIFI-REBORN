const Book = require('../models/books.model');

const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Book.findById(id);
    return res.status(200).json(oneBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBook = async (req, res) => {
  try {
    // console.log(req.body);
    const newBook = new Book(req.body);
    const createdBook = await newBook.save();
    return res.status(201).json(createdBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBook = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooks = new Book(req.body);
    putvs._id = id;
    const updateBooks = await Book.findByIdAndUpdate(id, putBooks, {
      new: true,
    });
    if (!updateBooks) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBook);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooks, getOneBook, postBook, putBook, deleteBook };
