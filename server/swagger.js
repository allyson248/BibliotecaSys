import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "BibliotecaSys API",
        description: "API do Sistema BibliotecaSys"
    },
    host: "localhost:3000",
    schemes: ["http"]
};

const outputFile = "./outputSwagger.json";
const routes = ["./app.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);