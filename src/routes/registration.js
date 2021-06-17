const express = require('express');
const router = express.Router();
const userValidation = require('../app/validator/userValidation');
const transValidation = require('../../lang/vi');

const registrationController = require('../app/controllers/RegistrationController');
router.get('/', registrationController.index);
router.post('/',userValidation.register, registrationController.postRegistration);


module.exports = router;


