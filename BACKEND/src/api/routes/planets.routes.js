const express = require('express');
const {
  getPlanets,
  getOnePlanet,
  postPlanet,
  putPlanet,
  deletePlanet,
} = require('../controllers/planets.controller');
const { isAuth } = require('../../middlewares/auth');

const planetRoutes = express.Router();

planetRoutes.get('/', getPlanets);
planetRoutes.get('/:id', getOnePlanet);
planetRoutes.post('/', [isAuth], postPlanet);
planetRoutes.put('/:id', [isAuth], putPlanet);
planetRoutes.delete('/:id', [isAuth], deletePlanet);

module.exports = planetRoutes;
