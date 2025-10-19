const AdminsModel = require("../models/adminsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (app) => {
  // Criar admin
  app.post("/admins/criar", async (req, res) => {
    try {
      const admin = await AdminsModel.adicionar(req.body);
      res.status(201).json({ mensagem: "Admin criado!", admin });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  });

  // Login admin
  app.post("/admins/login", async (req, res) => {
    const { email, senha } = req.body;
    const admin = await AdminsModel.buscarPorEmail(email);
    if (!admin) return res.status(401).json({ erro: "Admin não encontrado." });

    const senhaValida = await bcrypt.compare(senha, admin.senha);
    if (!senhaValida) return res.status(401).json({ erro: "Senha inválida." });

    const token = jwt.sign({ id: admin.id, role: admin.tipo }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ mensagem: "Login realizado!", token });
  });
};
