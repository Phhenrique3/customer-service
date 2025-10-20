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

    const cadastroCliente = require("./routes/cadastroRoutes");
    const servico = require("./routes/servicoRoutes");
    const loginRoutes = require("./routes/loginRoutes"); // <- router
    const atendimento = require("./routes/atendimentosRoutes");
    const pets = require("./controllers/petsContoller");
    const Admins = require("./routes/adminRoutes");

    // controllers que recebem app
    pets(app);

    // routes que já são routers
    app.use("/", loginRoutes);
    app.use("/", atendimento);
    app.use("/", cadastroCliente);
    app.use("/", Admins);
    app.use("/", servico)

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
  }
}

start();
