const conexao = require('../infraestrutura/conexao.js');
const Pet = require('./Pet.js'); // Este require está correto (procurando Pet.js na mesma pasta 'models')

class CadastroPet {
  adiciona(dadosDoPet) {
    return new Promise((resolve, reject) => {
      const pet = new Pet(dadosDoPet);
      const sql = 'INSERT INTO Pets SET ?';
      conexao.query(sql, pet, (erro, resultado) => {
        if (erro) reject(erro);
        else resolve({ id: resultado.insertId, ...pet });
      });
    });
  }

  listaPorCliente(clienteId) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id, nome, especie, raca FROM Pets WHERE cliente_id = ?';
      conexao.query(sql, [clienteId], (erro, resultados) => {
        if (erro) reject(erro);
        else resolve(resultados);
      });
    });
  }
}

module.exports = new CadastroPet();
