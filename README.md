# Sistema Financeiro Fluxos | Segunda Versão 💵


<img align='right' src='./assets/calculadora.svg'  width="200px"/>

## 1. Introdução 

Este projeto se trata de um sistema financeiro de fluxo de caixa, que permite a gestão financeira de empresas de pequeno, médio porte e usuários comuns. Com ele, é possível realizar o controle de receitas, despesas, contas a pagar e a receber, além de gerar gráficos para análise financeira.

<img src='./assets/introducao.gif' width="800px"/>



## 2. Tecnologias Utilizadas 📲

O projeto foi desenvolvido utilizando as seguintes tecnologias:

**Frontend** 📲

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Styled-components](https://img.shields.io/badge/Styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://react-query.tanstack.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-276749?style=for-the-badge&logo=react-hook-form&logoColor=white)](https://react-hook-form.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Backend** 🛠️

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]()
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

**Outros**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Espero que isso ajude! Se você precisar de mais shields, fique à vontade para pedir.

## 3. Como Instalar 👨🏽‍💻

### Backend

Para instalar o projeto, siga os seguintes passos:

1. Clone este repositório
2. Instale as dependências utilizando o comando `npm install` ou `yarn`
3. Crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis:

```
DATABASE_URL=postgres://usuario:senha@endereco-do-banco:5432/nome-do-banco
JWT_SECRET=segredo
```

Substitua `usuario`, `senha`, `endereco-do-banco` e `nome-do-banco` pelos valores corretos de acordo com a configuração do seu banco de dados. 4. Execute as migrations do banco de dados com o comando `npx prisma migrate dev` ou `yarn prisma migrate dev` 5. Inicie o servidor com o comando `npm run dev` ou `yarn dev` 6. Acesse o sistema em `http://localhost:3001`

**Atenção**, a aplicação ainda pode conter alguns bugs, portanto, fiquem alerta. 

Segue uma coleção incompleta no Insomnia.

    backend/docs/collection.json

😁 Estamos trabalhando na documentação externa.

[![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)

#### Frontend 

1. Entre na pasta `/frontend-vite`
2. Instale as dependências utilizando o comando `npm install` ou `yarn`
3. Crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis:

```
    # PRODUCAO 
    VITE_ENDPOINT=http://192.168.100.7:3001/api/v1
```
4. Execute o **npm run dev** para rodar a aplicação em ambiente de desenvolvimento e **npm run build** para gerar o build da aplicação;


**Observação:**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Se necessário, temos duas imagens **Docker** disponíveis para o projeto. Você pode encontrar a imagem do **Backend** [aqui](https://hub.docker.com/r/joaog545/fx-finances-backend) e a imagem do **Frontend** [aqui](https://hub.docker.com/r/joaog545/fx-finances-frontend).

## 4. Como Usar 😐

Principais Funcionalidades:

Claro, aqui estão as descrições corrigidas e melhoradas para cada item da lista:

1. **Cadastro de Usuário**: Trata-se de uma aplicação multilocatário simples que suporta vários usuários, cada um com seu próprio fluxo de caixa e funcionalidades. Os usuários têm a liberdade de personalizar os métodos de classificação dos itens de fluxo de caixa.

2. **Dashboard**: O painel exibe os dados do fluxo de caixa, classificados de acordo com a classificação do elemento.

3. **Agenda**: A agenda é um calendário que exibe as datas em que os itens do fluxo de caixa foram inseridos.

4. **Fluxo de Caixa**: Esta é a principal funcionalidade da aplicação, responsável pela manipulação dos dados financeiros.

5. **Tipo de Despesas**: Esta funcionalidade, compartilhada por todos os usuários, permite o controle do tipo de despesa, seja PIX, boleto, TED, DOC, Crédito ou Débito.

6. **Locais**: Nesta seção, os usuários podem cadastrar as instituições financeiras, como bancos e corretoras de valores.

7. **Programação**: Esta funcionalidade permite aos usuários cadastrar itens de rotina que serão inseridos no fluxo de caixa todos os meses.

8. **Elementos**: Esta funcionalidade permite aos usuários personalizar os métodos de classificação dos itens de fluxo de caixa. É aqui que os usuários podem definir e gerenciar os elementos que são usados para classificar as transações no fluxo de caixa.


### Lista de funcionalidades

Aqui está a lista de funcionalidades do sistema, reescrita para uma melhor compreensão:

1. **Cálculo do Saldo Atual**: O sistema é capaz de calcular o saldo atual, somando todas as entradas e saídas.
2. **Despesa Mensal por Usuário**: O sistema pode somar todas as despesas de um usuário específico em um mês.
3. **Receita Mensal por Usuário**: Da mesma forma, o sistema pode calcular a receita total de um usuário em um mês.
5. **Despesas por Classificação**: O sistema pode somar todas as despesas de uma determinada classificação em um intervalo de datas.
6. **Receitas por Classificação**: Similarmente, o sistema pode somar todas as receitas de uma determinada classificação.
7. **Despesas dos Últimos 12 Meses**: O sistema pode recuperar todas as despesas dos últimos 12 meses.
8. **Receitas dos Últimos 12 Meses**: Da mesma forma, o sistema pode recuperar todas as receitas dos últimos 12 meses.
9. **Limite de Gastos por Item**: O sistema permite estabelecer um limite de gastos para cada item.
10. **Adição Programada**: O sistema pode criar itens de fluxo de caixa rotineiros.

Espero que isso ajude a entender melhor as funcionalidades do sistema! Se você tiver mais perguntas, fique à vontade para perguntar.

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

[![Linkedin Badge](https://shields.io/badge/-Joao%20Guilherme-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jaoo/)](https://www.linkedin.com/in/joaog123/)


[![Badge](https://shields.io/badge/-joaoguilherme94@live.com-c80?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:joaoguilherme94@live.com)](mailto:joaoguilherme94@live.com)

<h2 id='licenca'><b>7 - Licença</b></h2>

[![Licence](https://shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)


