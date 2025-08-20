const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const conexao = require('./infraestrutura/conexao')  // <<< Importa aqui
const Tabelas = require('./infraestrutura/tables')
const atendimento = require('./controllers/atendimento')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

async function start() {
  try {
    await Tabelas.init(conexao);

    const cadastroCliente = require('./controllers/cadastroCliente');
    const servico = require('./controllers/servico');
    const login = require('./controllers/login');
    const atendimento = require ('./controllers/atendimento');
    const pets = require ('./controllers/pets')

    cadastroCliente(app);
    servico(app);
    login(app);
    atendimento(app)
    pets(app)

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
}

start();
