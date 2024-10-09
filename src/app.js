import express from "express";

const app = express();
app.use(express.json());

// Podemos fazer o mok
const client = [
  {
    id: 1,
    name: "Boris",
    age: 31,
    city: "juiz de fora-Mg",
  },
  {
    id: 2,
    name: "Maria",
    age: 41,
    city: "juiz de fora-Mg",
  },
  {
    id: 3,
    name: "Brayan",
    age: 23,
    city: "juiz de fora-Mg",
  },
];

// Criar rota padrão ou raiz
//http://localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Hello Word, Pequeno gafanhoto");
});

//http://localhost:3000/client
app.get("/client", (req, res) => {
  res.status(200).send(client); // Enviando a lista dos clients
});

export default app;
