const conexao = require("../infraestrutura/conexao.js");

class CadastroCliente {
  adiciona(cadastroCliente, res) {
    const sql = "INSERT INTO Clientes SET ?";
    conexao.query(sql, cadastroCliente, (erro, resultado) => {
      if (erro) {
        res.status(400).json({ erro: erro.message });
      } else {
        res.status(201).json({ id: resultado.insertId, ...cadastroCliente });
      }
    });
  }

  async buscaPorCPF(cpf) {
    const sql = "SELECT * FROM Clientes WHERE cpf = ? LIMIT 1";
    const [linhas] = await conexao.query(sql, [cpf]);
    return linhas[0];
  }
}

module.exports = new CadastroCliente();
