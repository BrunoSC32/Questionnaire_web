import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Questionnaire Web API",
      version: "1.0.0",
      description: "Documentación de la API del proyecto Questionnaire Web",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/routes/*.js"], 
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
export const swaggerUiMiddleware = swaggerUi;
