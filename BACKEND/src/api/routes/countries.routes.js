const express = require('express');
const {
  getCountries,
  getOneCountry,
  postCountry,
  putCountry,
  deleteCountry,
} = require('../controllers/countries.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getCountries);
router.get('/:id', getOneCountry);
router.post('/', [isAuth], postCountry);
router.put('/:id', [isAuth], putCountry);
router.delete('/:id', [isAuth], deleteCountry);

module.exports = router;
