const AdminsModel = require("../models/adminsModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Criar admin
const criar = async (req, res) => {
  try {
    const admin = await AdminsModel.adicionar(req.body);
    res.status(201).json({ mensagem: "Admin criado!", admin });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

// Login admin
const login = async (req, res) => {
  const { email, senha } = req.body;
  const admin = await AdminsModel.buscarPorEmail(email);
  if (!admin) return res.status(401).json({ erro: "Admin não encontrado." });

  const senhaValida = await bcrypt.compare(senha, admin.senha);
  if (!senhaValida) return res.status(401).json({ erro: "Senha inválida." });

const role = admin.tipo === "funcionario" ? "funcionario" : "admin";

const token = jwt.sign(
  { id: admin.id, role }, // agora sim está correto
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

  res.status(200).json({ mensagem: "Login realizado!", token });
};


// listar 
const listarAdmin = async (req, res) => {
  try {
    const admins = await AdminsModel.listarTodos();

    if (!admins || admins.length === 0) {
      return res.status(200).json({ mensagem: "Nenhum admin cadastrado", admins: ["nenhum admin"] });
    }

    // Remove a senha de cada admin
    const adminsSeguros = admins.map(({ senha, ...resto }) => resto);

    return res.status(200).json({ admins: adminsSeguros });
  } catch (erro) {
    console.error("Erro ao listar admins", erro);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
};

module.exports = {
  listarAdmin,
  criar,
  login,
};
