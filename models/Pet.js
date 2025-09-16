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
      const sql = "SELECT id, nome, raca FROM Pets WHERE cliente_id = ?";
      const [rows] = await conexao.query(sql, [cliente_id]);
      return rows;
    } catch (erro) {
      throw erro;
    }
  }
}

module.exports = Pet;
