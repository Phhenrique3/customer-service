const CadastroCliente = require('../models/cadastroCliente')

module.exports = (app) => {
  app.post('/api/clientes/cadastrar', (req, res) => {
    const cliente = req.body
    console.log('Dados recebidos:', cliente)

    if(!cliente.nome || !cliente.email || !cliente.telefone || !cliente.senha){
      return res.status(400).json({erro: 'Todos os campos são obrigatorios'})
    }
    CadastroCliente.adiciona(cliente, res)
  })

  
}
