const express = require('express');
const {
  getAuthors,
  postAuthors,
  putAuthors,
  deleteAuthors,
} = require('../controllers/author.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getAuthors);
router.post('/', [isAuth], postAuthors);
router.put('/:id', [isAuth], putAuthors);
router.delete('/:id', [isAuth], deleteAuthors);

module.exports = router;