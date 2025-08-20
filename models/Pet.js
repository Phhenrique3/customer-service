class Pet {
  constructor({ nome, raca, especie, cliente_id }) {
    this.nome = nome
    this.raca = raca
    this.especie = especie
    this.cliente_id = cliente_id // vínculo com cliente
  }
}
module.exports = Pet
