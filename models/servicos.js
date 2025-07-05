const moment = require("moment");
const conexao = require("../infraestrutura/conexao.js");

class Servicos {
  adiciona(servico, res) {
    const criado_em = moment().format("YYYY-MM-DD HH:mm:ss");
    const servicoDatado = { ...servico, criado_em };

    const sql = "INSERT INTO Servicos SET ?";

    conexao.query(sql, servicoDatado, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json({ id: resultados.insertId, ...servicoDatado });
      }
    });
  }

  lista(res) {
    const sql = "SELECT * FROM Servicos";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscarPorId(id, res) {
    const sql = "SELECT * FROM Servicos WHERE id=?";

    conexao.query(sql, [id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        const servico = resultados[0];
        res.status(200).json(servico);
      }
    });
  }

  altera(id, valores, res) {
    const sql = `UPDATE Servicos SET ? WHERE id=?`;

    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }

  deleta(id, res) {
    const sql = `DELETE FROM Servicos WHERE id=?`;

    conexao.query(sql, [id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ mensagem: "Serviço deletado com sucesso!", id });
      }
    });
  }
}

module.exports = new Servicos();
