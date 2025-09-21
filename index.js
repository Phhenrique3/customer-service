const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tables");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

async function start() {
  try {
    await Tabelas.init(conexao);

    const cadastroCliente = require("./routes/cadastro");
    const servico = require("./controllers/servicoController");
    const loginRoutes = require("./routes/login"); // <- router
    const atendimento = require("./routes/atendimentos");
    const pets = require("./controllers/petsContoller");

    // controllers que recebem app
    servico(app);
    pets(app);

    // routes que já são routers
    app.use("/", loginRoutes);
    app.use("/",atendimento)
    app.use("/" , cadastroCliente)

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
}

start();
