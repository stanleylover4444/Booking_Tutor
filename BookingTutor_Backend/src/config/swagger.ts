import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for the application",
    },
    tags: [
      {
        name: "Auth",
        description: "Register & Login",
      },
      {
        name: "Users",
        description: "Operations related to users",
      },
      {
        name: "Customer",
        description: "Operations related to customers",
      },
    ],
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`, 
        description: "Local server",
      },
    ],
  },
apis: ["./src/routers/*.ts"],


};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
