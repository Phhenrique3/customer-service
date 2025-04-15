# Projeto Node.js REST API com Express e MySQL

Este projeto é uma API REST simples construída com Node.js e Express. Ele utiliza o módulo `consign` para carregar automaticamente os controladores e o MySQL como banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [MySQL](https://www.mysql.com/) (para o banco de dados)
- Gerenciador de pacotes `npm` (instalado junto com o Node.js)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Phhenrique3/customer-service.git   cd customer-service   npm install

   Configure o banco de dados MySQL:

Certifique-se de que o MySQL está em execução.
Crie um banco de dados para o projeto.
Atualize as configurações de conexão no arquivo infraestrutura/conexao.js com as credenciais do seu banco de dados.

Executando o Projeto
Inicie o servidor:
npm run dev

O servidor estará disponível em: http://localhost:3000

Estrutura do Projeto
.
├── config/
│   └── customExpress.js  # Configuração do servidor Express
├── controllers/
│   └── atendimento.js    # Controlador para o recurso "atendimento"
├── infraestrutura/
│   ├── conexao.js        # Configuração da conexão com o banco de dados
│   └── tables.js         # Criação e inicialização das tabelas no banco de dados
├── [index.js](http://_vscodecontentref_/1)              # Ponto de entrada da aplicação
├── [package.json](http://_vscodecontentref_/2)          # Configurações do projeto e dependências
├── .gitignore            # Arquivos ignorados pelo Git
└── [README.md](http://_vscodecontentref_/3)             # Documentação do projeto



Endpoints da API
GET /atendimento
Retorna uma mensagem de boas-vindas.

Exemplo de resposta:

{
  "mensagem": "Bem-vindo ao sistema de atendimento!"
}

POST /atendimento
Cria um novo atendimento.

Exemplo de corpo da requisição:

{
  "cliente": "João Silva",
  "servico": "Consulta médica",
  "data": "2025-04-14"
}

Exemplo de resposta:

{
  "id": 1,
  "cliente": "João Silva",
  "servico": "Consulta médica",
  "data": "2025-04-14",
  "status": "Agendado"
}


Tecnologias Utilizadas
Node.js
Express
MySQL
Consign
Autor
Desenvolvido por Pedro Henrique.


Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.


### Observações:
- Certifique-se de ajustar os exemplos de endpoints e respostas conforme a implementação real da sua API.
- Atualize o nome do autor e o link do repositório, se necessário.