const customExpress = require("./config/customExpress.js");
const conexao = require("./infraestrutura/conexao.js");

conexao.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro);
  } else {
    console.log("Conectado com sucesso ao banco de dados!");
  }
});

const app = customExpress();

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
