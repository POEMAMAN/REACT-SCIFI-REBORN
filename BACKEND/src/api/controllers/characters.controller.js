const Character = require('../models/characters.model');

const getCharacters = async (req, res) => {
  try {
    const allCharacters = await Character.find();
    return res.status(200).json(allCharacters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacter = await Character.findById(id)
      .populate('planet')
      .populate('country');
    return res.status(200).json(oneCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharacters = new Country(req.body);
    putCharacters._id = id;
    const updateCharacters = await Character.findByIdAndUpdate(
      id,
      putCharacters,
      { new: true }
    );
    if (!updateCharacters) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharacters);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacter = await Character.findByIdAndDelete(id);
    if (!deleteCharacter) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharacters,
  getOneCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
};
