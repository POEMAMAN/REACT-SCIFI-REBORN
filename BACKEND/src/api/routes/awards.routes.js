const express = require('express');
const {
  getAwards,
  postAward,
  putAward,
  deleteAward,
} = require('../controllers/awards.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getAwards);
router.post('/', [isAuth], postAward);
router.put('/:id', [isAuth], putAward);
router.delete('/:id', [isAuth], deleteAward);

module.exports = router;