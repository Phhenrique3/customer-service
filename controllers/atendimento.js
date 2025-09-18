const atendimentosModel = require("../models/atendimentos");

// GET todos
const lista = (req, res) => {
  atendimentosModel.lista(res);
  console.log("Listando atendimentos");
};

// GET por ID
const buscaPorId = (req, res) => {
  const id = parseInt(req.params.id);
  atendimentosModel.buscaPorId(id, res);
  console.log("Buscando atendimento com id: " + id);
};

// POST
const adiciona = (req, res) => {
  const dados = req.body;
  atendimentosModel.adiciona(dados, res);
  console.log("Adicionando novo atendimento");
};

// PATCH
const altera = (req, res) => {
  const id = parseInt(req.params.id);
  const valores = req.body;
  atendimentosModel.altera(id, valores, res);
  console.log("Atualizando atendimento com id: " + id);
};

// DELETE
const deleta = (req, res) => {
  const id = parseInt(req.params.id);
  atendimentosModel.deleta(id, res);
  console.log("Deletando atendimento com id: " + id);
};

module.exports = {
  lista,
  buscaPorId,
  adiciona,
  altera,
  deleta,
};
