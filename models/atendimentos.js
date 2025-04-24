const moment = require("moment");
const conexao = require("..//infraestrutura/conexao.js");

class Atendimento {
  adiciona(atendimento, res ) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const data = moment(atendimento.data,"DD-MM-YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
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
}

module.exports = new Atendimento();
