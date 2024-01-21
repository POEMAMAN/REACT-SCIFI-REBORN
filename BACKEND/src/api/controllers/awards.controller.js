const Award = require('../models/awards.model');

const getAwards = async (req,res) => {
  try {
    const allAwards = await Award.find();
    return res.status(200).json(allAwards);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const postAward = async (req,res) => {
  try {
    // console.log(req.body);
    const newAward = new Award(req.body);
    const createdAward = await newAward.save();
    return res.status(201).json(createdAward);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putAward = async (req, res) => {
  try {
    const { id } = req.params;
    const putAwards = new Award(req.body);
    putvs._id = id;
    const updateAwards = await Award.findByIdAndUpdate(id, putAwards, {
      new: true,
    });
    if (!updateAwards) {
      return res.status(404).json({ message: 'Award not found' });
    }
    return res.status(200).json(updateAwards);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteAward = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAward = await Award.findByIdAndDelete(id);
    if (!deleteAward) {
      return res.status(404).json({ message: 'Award not found' });
    }
    return res.status(200).json(deleteAward);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAwards, postAward, putAward, deleteAward };
