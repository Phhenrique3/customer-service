const express = require('express');
const router = express.Router();
const AdminsController = require('../controllers/adminsController');
const { autenticarToken, isAdmin } = require('../Middleware/autenticarToken');

router.post("api/admins/criar", AdminsController.criar)
router.post("/login", AdminsController.login)
router.get("/listar", autenticarToken, isAdmin, AdminsController.listarAdmin)


module.exports = router;
