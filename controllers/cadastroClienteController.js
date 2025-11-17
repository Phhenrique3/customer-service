const CadastroCliente = require("../models/cadastroClienteModel");
const bcrypt = require("bcrypt");

const cadastra = async (req, res) => {
  const cliente = req.body;
  console.log("Dados recebidos:", cliente);

  if (
    !cliente.nome ||
    !cliente.email ||
    !cliente.telefone ||
    !cliente.senha ||
    !cliente.cpf
  ) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  try {
    const clienteExistente = await CadastroCliente .buscaPorCPF(cliente.cpf);

    if (clienteExistente) {
      return res
        .status(409)
        .json({ erro: "Já existe um usuário cadastrado com esse CPF/CNPJ" });
    }

    // Hash da senha
    cliente.senha = await bcrypt.hash(cliente.senha, 10);

    // Inserindo no banco
    const clienteCriado = await CadastroCliente.adiciona(cliente);

    return res
      .status(201)
      .json({ mensagem: "Cadastro realizado com sucesso", cliente: clienteCriado });

  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
};

module.exports = { cadastra };
