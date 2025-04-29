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
   git clone https://github.com/Phhenrique3/customer-service.git


   2. Navegue até o diretório do projeto: cd customer-service

   3. Instale as dependências do projeto: npm install

   4. Configure o banco de dados MySQL:
   Certifique-se de que o MySQL está em execução.
   Crie um banco de dados para o projeto.
   Atualize as configurações de conexão no arquivo infraestrutura/conexao.js com as credenciais do seu banco de dados.
   ```

Executando o Projeto

1. Inicie o servidor: npm run dev

2. O servidor estará disponível em: http://localhost:3000

Estrutura do Projeto
O projeto foi organizado da seguinte forma:

    .

├── config/
│ └── customExpress.js # Configuração do servidor Express
├── controllers/
│ └── atendimento.js # Controlador para o recurso "atendimento"
├── infraestrutura/
│ ├── conexao.js # Configuração da conexão com o banco de dados
│ └── tables.js # Criação e inicialização das tabelas no banco de dados
├── [index.js](http://_vscodecontentref_/1) # Ponto de entrada da aplicação
├── [package.json](http://_vscodecontentref_/2) # Configurações do projeto e dependências
├── .gitignore # Arquivos ignorados pelo Git
└── [README.md](http://_vscodecontentref_/3)  
 Endpoints da API
GET /atendimento
Retorna uma mensagem de boas-vindas.

Exemplo de resposta: # Documentação do projeto
{
"mensagem": "Bem-vindo ao sistema de atendimento!"
}


GitHub Copilot
Aqui está o README.md finalizado com explicações detalhadas sobre o que foi feito no projeto:

Navegue até o diretório do projeto:

cd customer-service
Instale as dependências do projeto:

npm install
Configure o banco de dados MySQL:

Certifique-se de que o MySQL está em execução.
Crie um banco de dados para o projeto.
Atualize as configurações de conexão no arquivo infraestrutura/conexao.js com as credenciais do seu banco de dados.
Executando o Projeto
Inicie o servidor:

O servidor estará disponível em: http://localhost:3000

Estrutura do Projeto
O projeto foi organizado da seguinte forma:

Endpoints da API
GET /atendimento
Retorna uma mensagem de boas-vindas.

Exemplo de resposta:

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


Aqui está o README.md finalizado com explicações detalhadas sobre o que foi feito no projeto:

```markdown
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
   git clone https://github.com/Phhenrique3/customer-service.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd customer-service
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Configure o banco de dados MySQL:
   - Certifique-se de que o MySQL está em execução.
   - Crie um banco de dados para o projeto.
   - Atualize as configurações de conexão no arquivo `infraestrutura/conexao.js` com as credenciais do seu banco de dados.

## Executando o Projeto

1. Inicie o servidor:

   ```bash
   npm run dev
   ```

2. O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

O projeto foi organizado da seguinte forma:

```
.
├── config/
│   └── customExpress.js  # Configuração do servidor Express
├── controllers/
│   └── atendimento.js    # Controlador para o recurso "atendimento"
├── infraestrutura/
│   ├── conexao.js        # Configuração da conexão com o banco de dados
│   └── tables.js         # Criação e inicialização das tabelas no banco de dados
├── index.js              # Ponto de entrada da aplicação
├── package.json          # Configurações do projeto e dependências
├── .gitignore            # Arquivos ignorados pelo Git
└── README.md             # Documentação do projeto
```

## Endpoints da API

### GET `/atendimento`
Retorna uma mensagem de boas-vindas.

**Exemplo de resposta:**
```json
{
  "mensagem": "Bem-vindo ao sistema de atendimento!"
}
```

### POST `/atendimento`
Cria um novo atendimento.

**Exemplo de corpo da requisição:**
```json
{
  "cliente": "João Silva",
  "servico": "Consulta médica",
  "data": "2025-04-14"
}
```

**Exemplo de resposta:**
```json
{
  "id": 1,
  "cliente": "João Silva",
  "servico": "Consulta médica",
  "data": "2025-04-14",
  "status": "Agendado"
}
```

## Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

- [Node.js](https://nodejs.org/): Plataforma para execução de JavaScript no lado do servidor.
- [Express](https://expressjs.com/): Framework para criação de APIs REST.
- [MySQL](https://www.mysql.com/): Banco de dados relacional utilizado para armazenar as informações.
- [Consign](https://www.npmjs.com/package/consign): Módulo para carregar automaticamente arquivos e módulos no projeto.

## O que foi feito

1. **Configuração do servidor Express**:
   - O arquivo `customExpress.js` foi criado para configurar o servidor Express, adicionando middlewares para processar dados enviados em formulários e no formato JSON.
   - O módulo `consign` foi utilizado para carregar automaticamente os controladores da pasta `controllers`.

2. **Conexão com o banco de dados MySQL**:
   - O arquivo `conexao.js` foi configurado para estabelecer a conexão com o banco de dados MySQL.
   - O arquivo `tables.js` foi criado para inicializar as tabelas necessárias no banco de dados.

3. **Criação dos endpoints**:
   - O endpoint `GET /atendimento` foi implementado para retornar uma mensagem de boas-vindas.
   - O endpoint `POST /atendimento` foi implementado para criar um novo atendimento, recebendo os dados no corpo da requisição.

4. **Estrutura do projeto**:
   - O projeto foi organizado em pastas (`config`, `controllers`, `infraestrutura`) para facilitar a manutenção e escalabilidade.

5. **Documentação**:
   - Este arquivo `README.md` foi criado para documentar o projeto, explicando como configurá-lo, executá-lo e utilizá-lo.

## Autor

Desenvolvido por **Pedro Henrique**.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

### Observações:
- Certifique-se de ajustar os exemplos de endpoints e respostas conforme a implementação real da sua API.
- Atualize o nome do autor e o link do repositório, se necessário.
```