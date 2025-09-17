// routes/login.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.post('/api/clientes/login', loginController.login);

module.exports = router;
