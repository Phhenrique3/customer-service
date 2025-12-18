const app = require("./app")

const conexao = require("./infraestrutura/conexao")
const table = require("./infraestrutura/tables")
const logger = require("./config/logger")
const { Logger } = require("winston")


const PORT = 3000



async function  startServer() {
  try{
    logger.info("iniciando servidor")

    await table.init(conexao)
    logger.info("Tabelas inciado com sucesso ")

    app.listen(PORT, () =>{
      logger.info(`servidor rodando na porta >> ${PORT}`)
    })
  }catch(error){

    logger.error("Erro ao iniciar aplicação", error)
    process.exit(1)
  }
}

startServer();