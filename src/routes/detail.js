const express = require('express');
const router = express.Router();

const detailController = require('../app/controllers/DetailController');

router.get("/detail/:id", detailController.getDetail);

module.exports = router;
