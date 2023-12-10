/* Swagger configuration */
const options = {
  openapi: "OpenAPI 3", // Enable/Disable OpenAPI. By default is null
  language: "en-US", // Change response language. By default is 'en-US'
  disableLogs: false, // Enable/Disable logs. By default is false
  autoHeaders: true, // Enable/Disable automatic headers capture. By default is true
  autoQuery: false, // Enable/Disable automatic query capture. By default is true
  autoBody: false, // Enable/Disable automatic body capture. By default is true
};

const swaggerAutoGen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0",
    title: "Jagota Sales Report Api",
    description: "Get api to filter sales data for a range of years",
    contact: {
      name: "Sudesh Nimesha",
      email: "sudeshnt93@gmail.com",
    },
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {},
  definitions: {
    "errorResponse.400": {
      code: "400",
      message: "Bad Request",
    },
    "errorResponse.403": {
      code: "403",
      message: "Forbidden",
    },
    "errorResponse.404": {
      code: "404",
      message: "Not found",
    },
    "errorResponse.500": {
      code: "500",
      message: "Internal Server Error",
    },
  },
};

const outputFile = "./docs/swagger.json";
const endpointsFiles = ["./index.ts", "./controllers/*.ts"];

/* NOTE: if you use the express Router, you must pass in the 
 'endpointsFiles' only the root file where the route starts,
 such as: index.js, app.js, routes.js, ... */
swaggerAutoGen(outputFile, endpointsFiles, doc);
