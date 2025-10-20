const Servicos = require("../models/servicos");

module.exports = {
  // LISTAR TODOS OS SERVIÇOS
  async listarServico (req, res) {
    console.log("Listando todos os serviços");
    Servicos.lista(res);
  },

  // BUSCAR SERVIÇO POR ID
  async buscarServicoId(req, res){
    const id = parseInt(req.params.id);
    console.log(`Buscando serviço com ID: ${id}`);
    Servicos.buscarPorId(id, res);
  },

  // CRIAR UM NOVO SERVIÇO
  async criarServico (req, res){
    const servico = req.body;

    if (!servico.nome || !servico.preco) {
      return res.status(400).json({ erro: "Nome e preço do serviço são obrigatórios!" });
    }

    console.log("Adicionando novo serviço:", servico);
    Servicos.adiciona(servico, res);
  },

  // ATUALIZAR UM SERVIÇO
  async atualizarServico (req, res){
    const id = parseInt(req.params.id);
    const valores = req.body;

    console.log(`Alterando serviço ID: ${id} com valores:`, valores);
    Servicos.altera(id, valores, res);
  },

  // DELETAR UM SERVIÇO
  async deleterServico(req, res) {
    const id = parseInt(req.params.id);
    console.log(`Deletando serviço com ID: ${id}`);
    Servicos.deleta(id, res);
  },
};
