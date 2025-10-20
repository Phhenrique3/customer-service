const express = require('express');
const router = express.Router();
const AdminsController = require('../controllers/adminsController');

router.post("/admins/criar", AdminsController.criar)
router.post("/admins/login", AdminsController.login)
router.get("/admins/listarLogin", AdminsController.listarAdmins)


module.exports = router;
