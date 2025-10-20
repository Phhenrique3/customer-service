const conexao = require('../infraestrutura/conexao');
const bcrypt = require('bcrypt');

class AdminsModel {
  // Criar um novo admin
  static async adicionar({ nome, telefone, email, senha, tipo = 'funcionario' }) {
    try {
      const hash = await bcrypt.hash(senha, 10);
      const sql = 'INSERT INTO Admins (nome, telefone, email, senha, tipo) VALUES (?, ?, ?, ?, ?)';
      const [resultado] = await conexao.query(sql, [nome, telefone, email, hash, tipo]);
      return { id: resultado.insertId, nome, telefone, email, tipo };
    } catch (erro) {
      throw new Error(erro.message);
    }
  }

  // Buscar por email (para login)
  static async buscarPorEmail(email) {
    const sql = 'SELECT * FROM Admins WHERE email = ?';
    const [rows] = await conexao.query(sql, [email]);
    return rows[0];
  }

  // Listar todos
  static async listarTodos() {
    const sql = 'SELECT id, nome, telefone, email, senha, tipo FROM Admins';
    const [rows] = await conexao.query(sql);
    return rows;
  }
}

module.exports = AdminsModel;
