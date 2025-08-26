const conexao = require('../infraestrutura/conexao.js');

class Pet {
  constructor({ nome, raca, especie, cliente_id }) {
    this.nome = nome;
    this.raca = raca;
    this.especie = especie;
    this.cliente_id = cliente_id;
  }

  static async buscaPorCliente(clienteId, res) {
    try {
      const query = 'SELECT id, nome, especie, raca FROM pets WHERE cliente_id = ?';
      const [resultados] = await conexao.query(query, [clienteId]);
      res.status(200).json(resultados);
    } catch (erro) {
      console.error('ERRO AO BUSCAR PETS:', erro);
      res.status(400).json({ erro: 'Erro ao buscar pets no banco de dados.' });
    }
  }
}

module.exports = Pet;
