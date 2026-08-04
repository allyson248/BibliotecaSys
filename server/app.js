import express from "express";
import categoriaRoute from "./routes/categoriaRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./outputSwagger.json" with { type: "json" };
import autorRoute from "./routes/autorRoute.js";
import leitorRoute from "./routes/leitorRoute.js";
import livroRoute from "./routes/livroRoute.js";
import emprestimoRoute from "./routes/emprestimoRoute.js"
const app = express();

app.use(express.json());
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerFile)
);
app.use("/categorias",categoriaRoute);
app.use("/autor",autorRoute);
app.use("/leitor",leitorRoute);
app.use("/livro",livroRoute);
app.use("/emprestimo",emprestimoRoute);
export default app;