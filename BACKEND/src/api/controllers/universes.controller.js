const Universe = require('../models/universes.model');

const getUniverses = async (req,res) => {
  try {
    const allUniverses = await Universe.find();
    return res.status(200).json(allUniverses);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneUniverse = async (req,res) => {
  try {
    const { id } = req.params;
    const oneUniverse = await Universe.findById(id);
    return res.status(200).json(oneUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postUniverse = async (req,res) => {
  try {
    // console.log(req.body);
    const newUniverse = new Universe(req.body);
    const createdUniverse = await newUniverse.save();
    return res.status(201).json(createdUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putUniverse = async (req, res) => {
  try {
    const { id } = req.params;
    const putUniverses = new Universe(req.body);
    putvs._id = id;
    const updateUniverses = await Universe.findByIdAndUpdate(id, putUniverses, {
      new: true,
    });
    if (!updateUniverses) {
      return res.status(404).json({ message: 'Universe not found' });
    }
    return res.status(200).json(updateUniverses);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUniverse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUniverse = await Universe.findByIdAndDelete(id);
    if (!deleteUniverse) {
      return res.status(404).json({ message: 'Universe not found' });
    }
    return res.status(200).json(deleteUniverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getUniverses, getOneUniverse, postUniverse, putUniverse, deleteUniverse };