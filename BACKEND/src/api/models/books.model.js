const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title: { type: String, required: true },
    serie: { type: String, required: true },
    publication_date: { type: Number, required: true },
    pages: { type: Number, required: false },
    timeframe: { type: String, required: false },
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model('book', booksSchema);

module.exports = Books;
