const express = require('express');
const {
  getUniverses,
  putUniverse,
  postUniverse,
  deleteUniverse,
} = require('../controllers/universes.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getUniverses);
router.post('/', [isAuth], postUniverse);
router.put('/:id', [isAuth], putUniverse);
router.delete('/:id', [isAuth], deleteUniverse);

module.exports = router;

