const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tables')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

conexao.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar no banco:', erro)
  } else {
    console.log('Conectado ao banco MySQL')
    Tabelas.init(conexao)

    
    const cadastroCliente = require('./controllers/cadastroCliente')
    const servico = require('./controllers/servico')
    cadastroCliente(app)
    servico(app)
  }
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
