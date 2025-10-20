const express = require("express");
const router = express.Router();

const atendimentos = require("../controllers/atendimentoController");

router.post("/atendimentos", atendimentos.adiciona);
router.get("/atendimentos", atendimentos.listarAgendamento);
router.get("/atendimentos/:id", atendimentos.buscaPorId);
router.patch("/atendimentos/:id", atendimentos.altera);
router.delete("/atendimentos/:id", atendimentos.deleta);

module.exports = router;


