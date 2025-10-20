const express = require("express");
const router = express.Router();

const cadastro = require("../controllers/cadastroClienteController");

router.post("/api/clientes/cadastrar", cadastro.cadastra);

module.exports = router;
