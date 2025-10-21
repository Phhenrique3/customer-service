const conexao = require('../infraestrutura/conexao.js')

class CadastroCliente {
  adiciona(cadastroCliente, res) {
    const sql = 'INSERT INTO Clientes SET ?'
    conexao.query(sql, cadastroCliente, (erro, resultado) => {
      if (erro) {
        res.status(400).json({ erro: erro.message })
      } else {
        res.status(201).json({ id: resultado.insertId, ...cadastroCliente })
      }
    })
  }
}

module.exports = new CadastroCliente()
