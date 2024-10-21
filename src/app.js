import express from "express";
import routes from "./routes.js";

const app = express();

app.use(express.json());

// Usando as rotas importadas
app.use(routes);

export default app;
