const conexao = require("../infraestrutura/conexao.js");
const Pet = require("./Pet.js"); // Este require está correto (procurando Pet.js na mesma pasta 'models')

class CadastroPet {
  adiciona(dadosDoPet) {
    return new Promise((resolve, reject) => {
      const pet = new Pet(dadosDoPet);
      const sql = "INSERT INTO pets SET ?";
      conexao.query(sql, pet, (erro, resultado) => {
        if (erro) return reject(erro);
        resolve({ id: resultado.insertId, ...pet });
      });
    });
  }
}

module.exports = new CadastroPet();
