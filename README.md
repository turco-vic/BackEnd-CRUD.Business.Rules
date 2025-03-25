# Sistema de Gestão de Ingressos para Eventos - Backend
### Este projeto é um backend desenvolvido em Node.js para um sistema de venda de ingressos para eventos. Ele oferece operações CRUD (Create, Read, Update, Delete) para gerenciar ingressos, além de regras de negócio específicas para controle de preços e vendas.

## 📋 Requisitos do Sistema
Node.js

PostgreSQL

Bibliotecas: express, cors, dotenv, uuid, pg

Ferramenta para testar APIs (como Postman ou Insomnia)

## 🛠️ Instalação
### Clone este repositório:
git clone [https://github.com/turco-vic/BackEnd-CRUD.Business.Rules.git]

###Instale as dependências:

npm install express cors dotenv uuid
npm install nodemon --save-dev
Configure o banco de dados PostgreSQL:

### Crie um banco de dados PostgreSQL

### Configure as variáveis de ambiente no arquivo .env

Execute o servidor:

npm run dev

## 🗃️ Estrutura do Banco de Dados
### A tabela de ingressos possui os seguintes campos:

| Campo                    | Tipo de Dado       | Descrição                                                                 |
|--------------------------|--------------------|---------------------------------------------------------------------------|
| id                       | SERIAL (PK)        | Identificador único do evento, gerado automaticamente                    |
| evento                   | VARCHAR(255)       | Nome completo do evento                                                  |
| local                    | VARCHAR(255)       | Local físico onde o evento será realizado                                 |
| data_evento              | DATE               | Data do evento (formato: YYYY-MM-DD)                                     |
| categoria                | VARCHAR(50)        | Tipo de ingresso (Pista, VIP, Camarote, etc.)                            |
| preco                    | DECIMAL(10,2)      | Valor do ingresso (formato: 99999999.99)                                 |
| quantidade_disponível    | INTEGER            | Número de ingressos disponíveis para venda                               |


## 📝 Regras de Negócio
Preço mínimo por categoria:

"Pista": mínimo de R$150,00

"Pista Premium": mínimo de R$250,00

"Camarote": mínimo de R$400,00

"Frontstage": mínimo de R$450,00

"VIP": mínimo de R$600,00

"Gold": mínimo de R$800,00

"Platinum": mínimo de R$1200,00

"ackstage": mínimo de R$2000,00

## 🚀 Rotas da API
### 1. Buscar todos os ingressos
Método: GET

URL: http://localhost:3000/api/ticket

Resposta: Lista de todos os ingressos cadastrados

### 2. Buscar um ingresso pelo ID
Método: GET

URL: http://localhost:3000/api/ticket/:id

Resposta: Dados do ingresso com o ID especificado

### 3. Criar um ingresso
Método: POST

URL: http://localhost:3000/api/ticket

Resposta: Ingresso criado

### 4. Atualizar um ingresso
Método: PUT

URL: http://localhost:3000/api/ticket/:id

Body: (mesma estrutura do POST, com todos os campos)

Resposta: Ingresso atualizado

### 5. Deletar um ingresso
Método: DELETE

URL: http://localhost:3000/api/ticket/:id

Resposta: Mensagem de confirmação

### 6. Comprar um ingresso
Método: POST

URL: http://localhost:3000/api/venda

Body:

{
  "id": 1,
  "quantidade_requerida": 2
}
Resposta: Confirmação da compra ou mensagem de erro se não houver ingressos suficientes

# 🧪 Testando a API
Recomenda-se utilizar o Postman para testar as rotas da API. Importe a coleção de requisições fornecida ou crie manualmente as requisições conforme descrito acima.
