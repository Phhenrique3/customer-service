const atendimentos = require("../models/atendimentos");
const Atendimento = require("../models/atendimentos");



module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    atendimentos.lista(res);
    console.log("Listando atendimentos");
    
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    atendimentos.buscaPorId(id, res);
    console.log("Buscando atendimento com id: " + id);
  })

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res )
    console.log(atendimento);
    });
};

