const express = require('express');
const {
  getCharacters,
  getOneCharacter,
  postCharacter,
  putCharacter,
  deleteCharacter,
} = require('../controllers/characters.controller');
const { isAuth } = require('../../middlewares/auth');

const characterRoutes = express.Router();

characterRoutes.get('/', getCharacters);
characterRoutes.get('/:id', getOneCharacter);
characterRoutes.post('/', [isAuth], postCharacter);
characterRoutes.put('/:id', [isAuth], putCharacter);
characterRoutes.delete('/:id', [isAuth], deleteCharacter);

module.exports = characterRoutes;
