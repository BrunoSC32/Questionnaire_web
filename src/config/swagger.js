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
        url: "/api",
        description: "Usa el mismo origen (HTTP/HTTPS) con el que abriste Swagger",
      },
    ],
    components: {
      securitySchemes: {
        sessionAuth: {
          type: "apiKey",
          in: "cookie",
          name: "connect.sid",
          description:
            "Autenticación basada en sesión. Inicia sesión para obtener la cookie de sesión.",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
export const swaggerUiMiddleware = swaggerUi;
