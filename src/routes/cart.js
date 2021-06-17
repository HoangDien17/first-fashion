const express = require('express');
const router = express.Router();

const CartController = require('../app/controllers/CartController');

router.post('/', CartController.postAddCart);
router.get('/', CartController.getCart);  

module.exports = router;