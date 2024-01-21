const Planet = require('../models/planets.model');

const getPlanets = async (req, res) => {
  try {
    const allPlanets = await Planet.find();
    return res.status(200).json(allPlanets);
  } catch (error) {
    return res.status(500).json(error);
  }
  console.log(res);
};

const getOnePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanet = await Planet.findById(id).populate('planet');
    return res.status(200).json(onePlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanet = async (req, res) => {
  try {
    const newPlanet = new Planet(req.body);
    const createdPlanet = await newPlanet.save();
    return res.status(201).json(createdPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanets = new Planet(req.body);
    putPlanets._id = id;
    const updatePlanets = await Planet.findByIdAndUpdate(id, putPlanets, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanets);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanet = await Planet.findByIdAndDelete(id);
    if (!deletePlanet) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanets,
  getOnePlanet,
  postPlanet,
  putPlanet,
  deletePlanet,
};
