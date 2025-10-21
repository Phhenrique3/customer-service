const express = require("express");
const router = express.Router();
const pestController = require("../controllers/petsContoller");

router.post("api/pets/cadastrar", pestController.cadastrar);
router.get("/api/Clientes/:id/pets", pestController.listarPetId);
router.delete("/api/pets/:id", pestController.deletaePetsId);

module.exports = router