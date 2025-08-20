const CadastroPet = require("../models/cadastroPet");

module.exports = (app) => {
  app.post("/api/pets/cadastrar", async (req, res) => {
    const pet = req.body;
    console.log("Dados do pet recebidos:", pet);

    // Validação simples
    if (!pet.nome || !pet.raca || !pet.especie || !pet.cliente_id) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

try {
  const resultado = await CadastroPet.adiciona(pet)

  return res.status(201).json({
    mensagem: 'Pet cadastrado com sucesso',
    pet: {
      id: resultado.insertId,
      nome: pet.nome,
      raca: pet.raca,
      especie: pet.especie,
      cliente_id: pet.cliente_id
    }
  })
} catch (error) {
  console.error('Erro ao cadastrar pet:', error)
  return res.status(500).json({ erro: 'Erro interno do servidor' })
}

  });
};
