const conexao = require("../infraestrutura/conexao.js");

class Pet {
  constructor({ nome, raca, especie, cliente_id }) {
    this.nome = nome;
    this.raca = raca;
    this.especie = especie;
    this.cliente_id = cliente_id;
  }

  static async listaPorCliente(cliente_id) {
    try {
      const sql =
        "SELECT id, nome, raca, especie FROM Pets WHERE cliente_id = ?";
      const [rows] = await conexao.query(sql, [cliente_id]);
      return rows;
    } catch (erro) {
      throw erro;
    }
  }

  // Adicionando delete
  static async deletaPetsId(id) {
    try {
      const sql = "DELETE FROM Pets WHERE cliente_id = ? AND id = ?";
      const [resultado] = await conexao.query(sql, [id]);
      return resultado.affectedRows > 0; // retorna true se deletou
    } catch (erro) {
      throw erro;
    }
  }
}

module.exports = Pet;
