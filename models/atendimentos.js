const moment = require("moment");
const conexao = require("..//infraestrutura/conexao.js");

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:mm:ss");
    const data = moment(atendimento.data,"DD-MM-YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
    const atedimentoDatado = { ...atendimento, dataCriacao, data };

    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atedimentoDatado, (erro, resultados) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento();
