const express = require('express');
const router = express.Router();

const UpdateCartController = require('../app/controllers/UpdateCartController');

router.post('/', UpdateCartController.postUpdateCart);

module.exports = router;