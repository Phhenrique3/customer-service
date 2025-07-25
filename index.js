const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const conexao = require('./infraestrutura/conexao')  // <<< Importa aqui
const Tabelas = require('./infraestrutura/tables')

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

    cadastroCliente(app);
    servico(app);
    login(app);

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  } catch (error) {
    console.error('Erro ao iniciar a aplicação:', error);
  }
}

start();
