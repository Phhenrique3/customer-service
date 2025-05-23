const moment = require("moment");
const conexao = require("..//infraestrutura/conexao.js");

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const data = moment(atendimento.data, "DD-MM-YYYY HH:mm:ss").format(
      "YYYY-MM-DD HH:mm:ss"
    );
    const atedimentoDatado = { ...atendimento, dataCriacao, data };

    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atedimentoDatado, (erro, resultados) => {
      if (erro) {
        res.status(401).json(erro);
      } else {
        res.status(201).json(resultados);
      }
    });
  }
  lista(res) {
    const sql = "SELECT * FROM atendimentos";

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM atendimentos WHERE id=${id}`;
    conexao.query(sql, (erro, resultados) => {
      const atendimento = resultados[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(atendimento);
      }
    });
  }

  altera(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, "DD-MM-YYYY").format("YYYY-MM-DD");
    }
    const sql = `UPDATE atendimentos SET ? WHERE id=?`;
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }

  deleta(id, res) {
    const sql = `DELETE FROM atendimentos WHERE id=${id}`;
    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }
}
module.exports = new Atendimento();
