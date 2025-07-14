const atendimentos = require("../models/atendimentos");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    atendimentos.lista(res);
    console.log("Listando atendimentos");
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    atendimentos.buscaPorId(id, res);
    console.log("Buscando atendimentos com id: " + id)
  });

  app.post("/atendimentos", (req, res) => {
    const atendimentos = req.body;

    atendimentos.adiciona(atendimentos, res);
    console.log(atendimentos);
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    atendimentos.altera(id, valores, res);
  });

  app.delete("/atendimentos/:id",
    (req, res) => {
      const id = parseInt(req.params.id);
      console.log("Deletando atendimento com id: " + id);
    
      atendimentos.deleta(id, res); // Só chama o método, não manda mais resposta aqui.
    });
    
};
