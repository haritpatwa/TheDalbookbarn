let express = require('express');
let router = express.Router();

let bookController = require('../controllers/book');

router.get('/', bookController.displayBookList);

router.get('/book/:id', bookController.getParticularBook);

module.exports = router;