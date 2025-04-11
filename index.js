const customExpress = require("./config/customExpress.js");
const conexao = require("./infraestrutura/conexao.js");
const Tabelas = require("./infraestrutura/tables.js");

conexao.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro);
  } else {
    console.log("Conectado com sucesso ao banco de dados!");
  }

  Tabelas.init(conexao);
  const app = customExpress();

  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
});
