import { Router } from "express";
import ClientController from "./app/controllers/ClientController.js";

const router = Router();

// Rotas
router.get("/client", ClientController.index);
// Retorna um client especifico
router.get("/client/:id", ClientController.show);
//Create
router.post("/client", ClientController.store);
//Update
router.put("/client/:id", ClientController.update);
//Delete
router.delete("/client/:id", ClientController.delete);

export default router;
