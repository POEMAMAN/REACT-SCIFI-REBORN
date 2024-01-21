const Country = require('../models/countries.model');

const getCountries = async (req, res) => {
  try {
    const allCountries = await Country.find();
    return res.status(200).json(allCountries);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountry = await Country.findById(id);
    return res.status(200).json(oneCountry);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountry = async (req, res) => {
  try {
    // console.log(req.body);
    const newCountry = new Country(req.body);
    const createdCountry = await newCountry.save();
    return res.status(201).json(createdCountry);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountries = new Country(req.body);
    putCountries._id = id;
    const updateCountries = await Country.findByIdAndUpdate(id, putCountries, {
      new: true,
    });
    if (!updateCountries) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountries);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountry = await Country.findByIdAndDelete(id);
    if (!deleteCountry) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountry);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountries,
  getOneCountry,
  postCountry,
  putCountry,
  deleteCountry,
};
