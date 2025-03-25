# Sistema de Gestão de Ingressos para Eventos - Backend
## Este projeto é um backend desenvolvido em Node.js para um sistema de venda de ingressos para eventos. Ele oferece operações CRUD (Create, Read, Update, Delete) para gerenciar ingressos, além de regras de negócio específicas para controle de preços e vendas.

### 📋 Requisitos do Sistema
Node.js

PostgreSQL

Bibliotecas: express, cors, dotenv, uuid, pg

Ferramenta para testar APIs (como Postman ou Insomnia)

### 🛠️ Instalação
Clone este repositório:

bash
Copy
git clone [URL_DO_REPOSITORIO]
Instale as dependências:

bash
Copy
npm install express cors dotenv uuid
npm install nodemon --save-dev
Configure o banco de dados PostgreSQL:

Crie um banco de dados PostgreSQL

Configure as variáveis de ambiente no arquivo .env

Execute o servidor:

bash
Copy
npm run dev
🗃️ Estrutura do Banco de Dados
A tabela de ingressos possui os seguintes campos:

Campo	Tipo de Dado	Descrição
id	SERIAL (PK)	Identificador único gerado automaticamente
evento	VARCHAR(255)	Nome do evento
local	VARCHAR(255)	Local onde acontecerá o evento
data_evento	DATE	Data do evento
categoria	VARCHAR(50)	Tipo de ingresso (Pista, VIP, etc.)
preco	DECIMAL(10,2)	Valor do ingresso
quantidade_disponivel	INTEGER	Número de ingressos disponíveis
📝 Regras de Negócio
Preço mínimo por categoria:
"Pista": mínimo de R$100,00

"Pista VIP": mínimo de R$200,00

"Camarote": mínimo de R$300,00

"Arquibancada": mínimo de R$80,00

## 🚀 Rotas da API
### 1. Buscar todos os ingressos
Método: GET

URL: http://localhost:3000/api/ingressos

Resposta: Lista de todos os ingressos cadastrados

### 2. Buscar um ingresso pelo ID
Método: GET

URL: http://localhost:3000/api/ingressos/:id

Resposta: Dados do ingresso com o ID especificado

### 3. Criar um ingresso
Método: POST

URL: http://localhost:3000/api/ingressos

Body:

json
Copy
{
  "evento": "Nome do Evento",
  "local": "Local do Evento",
  "data_evento": "YYYY-MM-DD",
  "categoria": "Pista|Pista VIP|Camarote|Arquibancada",
  "preco": 150.00,
  "quantidade_disponivel": 100
}
Resposta: Ingresso criado

### 4. Atualizar um ingresso
Método: PUT

URL: http://localhost:3000/api/ingressos/:id

Body: (mesma estrutura do POST, com todos os campos)

Resposta: Ingresso atualizado

### 5. Deletar um ingresso
Método: DELETE

URL: http://localhost:3000/api/ingressos/:id

Resposta: Mensagem de confirmação

### 6. Comprar um ingresso
Método: POST

URL: http://localhost:3000/api/venda

Body:

json
Copy
{
  "id": 1,
  "quantidade_requerida": 2
}
Resposta: Confirmação da compra ou mensagem de erro se não houver ingressos suficientes

# 🧪 Testando a API
Recomenda-se utilizar o Postman para testar as rotas da API. Importe a coleção de requisições fornecida ou crie manualmente as requisições conforme descrito acima.
