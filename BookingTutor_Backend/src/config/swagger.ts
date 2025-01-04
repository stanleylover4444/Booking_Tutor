import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";

import authRoutes from "../routers/authRoutes"


dotenv.config();


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for the application",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`, 
        description: "Local server",
      },
    ],
  },
//   apis: ["../routers/*.ts"], 

apis: ["./src/routers/*.ts"],


};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;