const express = require('express');
const router = express.Router();
const AdminsController = require('../controllers/adminsController');

// 🧑‍💼 Criar um novo admin (ex: funcionário ou master)
router.post('/criar', AdminsController.criar);

// 🔐 Login do admin
router.post('/login', AdminsController.login);

// 📋 (opcional) Listar todos os admins
// router.get('/', AdminsController.listar);

module.exports = router;
