const express = require('express');
const {
  getUniverses,
  postUniverses,
  putUniverses,
  deleteUniverses,
} = require('../controllers/universe.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getUniverses);
router.post('/', [isAuth], postUniverses);
router.put('/:id', [isAuth], putUniverses);
router.delete('/:id', [isAuth], deleteUniverses);

module.exports = router;