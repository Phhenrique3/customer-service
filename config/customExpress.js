// Importa o módulo "express", que é um framework para criar servidores web em Node.js.
const express = require("express");

const consign = require("consign"); // Importa o módulo "consign", que é usado para carregar automaticamente arquivos e módulos em uma aplicação.


module.exports = () => {   // Exporta uma função que configura e retorna uma instância do aplicativo Express.
  const app = express()   // Cria uma instância do aplicativo Express, que será usada para configurar e gerenciar o servidor.
  app.use(express.urlencoded({extended: true})) // Configura o middleware para processar dados enviados em formulários (application/x-www-form-urlencoded).
  // A opção "extended: true" permite que objetos aninhados sejam analisados.
  app.use(express.json()) // Configura o middleware para processar dados enviados no formato JSON (application/json).
  // Isso é útil para APIs que recebem dados no corpo das requisições.
  consign() // Usa o módulo "consign" para carregar automaticamente os arquivos da pasta "controllers".// Esses arquivos são injetados na instância do aplicativo Express, permitindo que os controladores sejam acessados.
      .include('controllers')
      .into(app)
  return app
}