module.exports = (app) => {
  app.get("/atendimento", (req, res) => {
    res.send("Bem-vindo no atendimento !");
  });

  app.post("/atendimento", (req, res) => {
    console.log(req.body);
    res.send("você está no atendimento");
  });
};
