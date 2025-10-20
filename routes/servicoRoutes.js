const express = require("express");
const router = express.Router();
const servicoController = require("../controllers/servicoController");


router.get("/listarServico",servicoController.listarServico)


module.exports = router; 