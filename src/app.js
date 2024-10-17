import express from "express";
import ClientController from "./app/controllers/ClientController.js";

const app = express();
app.use(express.json());

// Rotas
app.get("/client", ClientController.index);
// Retorna um client especifico
app.get("/client/:id", ClientController.show);
//Create
app.post("/client", ClientController.store);
//Update
app.put("/client/:id", ClientController.update);
//Delete
app.delete("/client/:id", ClientController.delete);

export default app;
