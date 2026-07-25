import express from "express";
import categoriaRoute from "./routes/categoriaRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./outputSwagger.json" with { type: "json" };

const app = express();

app.use(express.json());
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
);
app.use("/categorias",categoriaRoute);

export default app;