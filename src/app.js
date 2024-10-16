import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

//indicar para o express ler body com json
app.use(express.json());

// retorna objeto por id
function buscarClientPorId(id) {
  return client.filter((client) => client.id == id);
}

//Pegar a posição ou index do elemento no array por id
function burcarIndexClient(id) {
  return client.findIndex((client) => client.id == id);
}

//Create/Criar
app.post("/client", (req, res) => {
  const client = req.body;
  const sql = " INSERT INTO clients SET ?;";
  conexao.query(sql, client, (error, result) => {
    if (error) {
      res.status(400).json({ Error: error });
    } else {
      res.status(201).json({ "Cadastrado com sucesso!": result });
    }
  });
});

// Retorna o objeto por id
app.get("/client/:id", (req, res) => {
  const id = req.params.id;
  const sql = " SELECT * FROM clients WHERE id=?;";
  conexao.query(sql, id, (error, result) => {
    const linha = result[0];
    if (error) {
      res.status(404).json({ Error: error });
    } else {
      res.status(200).json(linha);
    }
  });
});

app.get("/client", (req, res) => {
  const sql = " SELECT * FROM clients;";
  conexao.query(sql, (error, result) => {
    if (error) {
      res.status(404).json({ Error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

//Update/Atualizar
app.put("/client/:id", (req, res) => {
  const id = req.params.id;
  const client = req.body;
  const sql = "UPDATE clients SET ? WHERE id=?;";
  conexao.query(sql, [client, id], (error, result) => {
    if (error) {
      res.status(400).json({ Error: error });
    } else {
      res.status(200).json({ "Atualizado com sucesso!": result });
    }
  });
});

//Delete/Deletar
app.delete("/client/:id", (req, res) => {
  const id = req.params.id;
  //Nunca fazer delete sem o "Where"
  const sql = " DELETE FROM clients WHERE id=?;";
  conexao.query(sql, id, (error, result) => {
    if (error) {
      res.status(404).json({ Error: error });
    } else {
      res.status(200).json({ "Client Deletado com sucesso!": result });
    }
  });
});

export default app;
