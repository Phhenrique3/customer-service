const atendimentosModel = require("../models/atendimentos");

// GET todos
const listarAgendamento = async (req, res) => {
  try {
    const agendamentos = await atendimentosModel.listarAgendamento();
    
    if (agendamentos.length === 0) {
      return res
        .status(404)
        .json({ mensagem: "Nenhum agendamento encontrado" });
    }

    return res.status(200).json(agendamentos);
  } catch (erro) {
    console.error("Erro ao listar agendamentos:", erro);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
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
  listarAgendamento,
  buscaPorId,
  adiciona,
  altera,
  deleta,
};
