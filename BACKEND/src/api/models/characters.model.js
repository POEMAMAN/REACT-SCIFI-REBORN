const mongoose = require('mongoose');
const Country = require('./countries.model');

const Schema = mongoose.Schema;

const charactersSchema = new Schema(
  {
    name: { type: String, required: true },
    profession: { type: String, required: true },
    rank: { type: String, required: false },
    birthday: { type: String, required: false },
    planet: [{ type: Schema.Types.ObjectId, ref: 'planet' }],
    country: [{ type: Schema.Types.ObjectId, ref: 'country' }],
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const Characters = mongoose.model('character', charactersSchema);

module.exports = Characters;
