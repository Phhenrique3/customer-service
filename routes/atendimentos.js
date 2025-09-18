const express = require("express");
const router = express.Router();

const atendimentos = require("../controllers/atendimento");

router.post("/atendimentos", atendimentos.adiciona);
router.get("/atendimentos", atendimentos.lista);
router.get("/atendimentos/:id", atendimentos.buscaPorId);
router.patch("/atendimentos/:id", atendimentos.altera);
router.delete("/atendimentos/:id", atendimentos.deleta);

module.exports = router;
