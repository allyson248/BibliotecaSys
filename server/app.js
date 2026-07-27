import express from "express";
import categoriaRoute from "./routes/categoriaRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./outputSwagger.json" with { type: "json" };
import autorRoute from "./routes/autorRoute.js";
const app = express();

app.use(express.json());
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
);
app.use("/categorias",categoriaRoute);
app.use("/autor",autorRoute);
export default app;