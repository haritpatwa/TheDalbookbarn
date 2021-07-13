var express = require('express');
var router = express.Router();

let userController = require('../controllers/user');

router.get('/', userController.displayUserList);

router.post('/addToCart', userController.addToCart);

module.exports = router;
