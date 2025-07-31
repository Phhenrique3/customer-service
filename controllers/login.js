const LoginCliente = require("../models/loginCliente");
const bcrypt = require("bcrypt"); // <<< IMPORTA O BCRYPT AQUI

module.exports = (app) => {
  app.post("/api/clientes/login", async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: "E-mail e senha são obrigatórios" });
    }

    try {
      const usuario = await LoginCliente.buscarPorEmail(email);

      if (!usuario) {
        return res.status(401).json({ erro: "Usuário não localizado" });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(401).json({ erro: "Senha inválida" });
      }

      return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        cliente: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        },
      });
    } catch (erro) {
      console.error("Erro no login:", erro);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  });
};
