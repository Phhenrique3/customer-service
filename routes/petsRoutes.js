const express = require("express");
const router = express.Router();
const pestController = require("../controllers/petsContoller");

router.post("/Cadastrar", pestController.cadastrar);
router.get("/Clientes/:id/pets", pestController.listarPetId);
router.delete("/:id", pestController.deletaePetsId);

module.exports = router