const conexao = require('../infraestrutura/conexao');

class LoginCliente {
  static async buscarPorEmail(email) {
    const sql = 'SELECT * FROM clientes WHERE email = ?';
    const [rows] = await conexao.query(sql, [email]);
    return rows[0];
  }
}

module.exports = LoginCliente;
