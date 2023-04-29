# Fx Fluxos Segunda Versão 💵- Em desenvolvimento 🤰🏽

## 1. Introdução 💹

Este projeto **(em desenvolvimento) 🤰🏽** se trata de um sistema financeiro de fluxo de caixa, que permite a gestão financeira de empresas de pequeno, médio e grande porte. Com ele, é possível realizar o controle de receitas, despesas, contas a pagar e a receber, além de gerar relatórios e gráficos de análise financeira.

## 2. Tecnologias Utilizadas 📲

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Vite
- React
- React Query
- React Hook Form
- Styled Components
- TypeScript
- Express
- PostgreSQL
- Prisma
- Docker

## 3. Como Instalar 👨🏽‍💻

Para instalar o projeto, siga os seguintes passos:

1. Clone este repositório
2. Instale as dependências utilizando o comando `npm install` ou `yarn`
3. Crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis:

```
DATABASE_URL=postgres://usuario:senha@endereco-do-banco:5432/nome-do-banco
JWT_SECRET=segredo
```

Substitua `usuario`, `senha`, `endereco-do-banco` e `nome-do-banco` pelos valores corretos de acordo com a configuração do seu banco de dados. 4. Execute as migrations do banco de dados com o comando `npx prisma migrate dev` ou `yarn prisma migrate dev` 5. Inicie o servidor com o comando `npm run dev` ou `yarn dev` 6. Acesse o sistema em `http://localhost:3001`

## 4. Como Usar 😐

O sistema possui as seguintes telas:

- Login
- Cadastro de Usuário
- Dashboard
- Agenda
- Fluxo de caixa
- Elementos
- Relatórios

### Lista de features a adicionar

- [x] Soma saldo (Somar entrada e saídas)
- [] Corrigir valor (Corrigir valor ao editar item ou deletar item)
- [] Trazer todos os items gasto por tabela do mes
- [] Fluxo de caixa somente com os item do referente este mes
- [] Trazer todos os gasto e lucros dos ultimo 12 meses
- [] Estabelece Limite de gastos por item

Para utilizar o sistema, siga os seguintes passos:

1. Acesse o sistema em `http://localhost:5173`
2. Faça login com um usuário existente ou cadastre um novo usuário
3. Na tela de Dashboard, é possível visualizar um resumo das informações financeiras
4. Nas demais telas, é possível realizar o cadastro, edição e exclusão das informações financeiras, além de gerar relatórios e gráficos de análise financeira.

## 5. Agradecimentos

Gostaríamos de agradecer a todos os contribuidores que ajudaram no desenvolvimento deste projeto.

## 6. Autor do Projeto

 <img style="border-radius:50%;" src="https://avatars.githubusercontent.com/u/80895578?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Joao Guilherme</b></sub></a> <a href="https://github.com/JoaoG23/">🚀</a>

Feito com 🤭 por Joao Guilherme 👋🏽 Entre em contato links abaixo!

[![Linkedin Badge](https://shields.io/badge/-Joao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jaoo/)](https://www.linkedin.com/in/joaog123/)

[![Badge](https://shields.io/badge/-joaoguilherme94@live.com-c80?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:joaoguilherme94@live.com)](mailto:joaoguilherme94@live.com)

<h2 id='licenca'><b>7 - Licença</b></h2>

[![Licence](https://shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
