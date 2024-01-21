const express = require('express');
const {
  getCollections,
  postCollections,
  putCollections,
  deleteCollections,
} = require('../controllers/collection.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/',   getCollections);
router.post('/', [isAuth], postCollections);
router.put('/:id', [isAuth], putCollections);
router.delete('/:id', [isAuth], deleteCollections);

module.exports = router;