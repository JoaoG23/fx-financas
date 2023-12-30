import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "FX Finance API",
    description:
      "Uma API de gestão de fluxo de caixa é uma ferramenta crucial para empresas, permitindo a integração de sistemas para automatizar o controle financeiro. Ela oferece funcionalidades como monitoramento em tempo real de receitas, despesas, projeções orçamentárias e geração de relatórios detalhados. Essa API facilita a tomada de decisões estratégicas, categorização de transações e promove eficiência e transparência nas operações financeiras, garantindo segurança e conformidade regulatória. Ideal para empresas de todos os tamanhos, é essencial para uma gestão financeira eficaz.",
    contact: {
      email: "joaoguilherme94@live.com",
    },
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/*.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
