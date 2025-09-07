// controllers/pets.js
const CadastroPet = require("../models/cadastroPet");
const Pet = require("../models/Pet");

module.exports = (app) => {
  // Rota para cadastrar um pet
  app.post("/api/pets/cadastrar", async (req, res) => {
    const pet = req.body;
    console.log("Dados do pet recebidos:", pet);

    // Validação simples
    if (!pet.nome || !pet.raca || !pet.especie || !pet.cliente_id) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    try {
      const resultado = await CadastroPet.adiciona(pet);

      return res.status(201).json({
        mensagem: "Pet cadastrado com sucesso",
        pet: {
          id: resultado.id,
          nome: pet.nome,
          raca: pet.raca,
          especie: pet.especie,
          cliente_id: pet.cliente_id,
        },
      });
    } catch (error) {
      console.error("Erro ao cadastrar pet:", error);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  });

  // Rota para listar pets de um cliente
    app.get("/api/Clientes/:id/pets", async (req, res) => {
    const cliente_id = parseInt(req.params.id);
    console.log(`🔹 Cliente ID recebido: ${cliente_id}`);

    try {
      const Pets = await Pet.listaPorCliente(cliente_id,);
      res.json(Pets);
    } catch (erro) {
      console.error("ERRO AO BUSCAR PETS:", erro);
      res.status(500).json({ erro: "Erro ao buscar pets" });
    }
  });
};
