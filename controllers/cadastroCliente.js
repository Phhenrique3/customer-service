
const CadastroCliente = require('../models/cadastroCliente');
const bcrypt = require('bcrypt');

module.exports = (app) => {
  app.post('/api/clientes/cadastrar', async (req, res) => {
    const cliente = req.body;
    console.log('Dados recebidos:', cliente);

    if (!cliente.nome || !cliente.email || !cliente.telefone || !cliente.senha) {
      return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
    }

    try {
      // Hash da senha
      const hashSenha = await bcrypt.hash(cliente.senha, 10);
      cliente.senha = hashSenha; // substitui senha

      // Chama método para inserir no banco e espera o retorno com o usuário criado
      const usuario = await CadastroCliente.adiciona(cliente);

      // Retorna o sucesso com dados do usuário criado
      return res.status(200).json({mensagem: 'Cadastro realizado com sucesso'});
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
  });
};
