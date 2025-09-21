const LoginCliente = require("../models/loginCliente");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res) {
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

      const token = jwt.sign(
        { id: usuario.id, role: usuario.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        cliente: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          role: usuario.role,
        },
        token,
      });
    } catch (erro) {
      console.error("Erro no login:", erro);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  },
};
