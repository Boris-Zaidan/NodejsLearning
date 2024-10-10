import express from "express";

const app = express();
app.use(express.json());

// Podemos fazer o mock
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
  {
    id: 4,
    name: "Naiara",
    age: 32,
    city: "juiz de fora-Mg",
  },
];

function buscarClientPorId(id) {
  return client.filter((client) => client.id == id);
}

//Pegar a posição ou index do elemento no array por id
function burcarIndexClient(id) {
  return client.findIndex((client) => client.id == id);
}

// Criar rota padrão ou raiz
app.get("/", (req, res) => {
  res.status(200).send("Hello Word, Pequeno gafanhoto");
});

app.get("/client", (req, res) => {
  res.status(200).send(client); // Enviando a lista dos clients
});

// Retorna o objeto por id
app.get("/client/:id", (req, res) => {
  res.json(buscarClientPorId(req.params.id));
});

app.post("/client", (req, res) => {
  client.push(req.body);
  res.status(201).send("Novo client cadastrado com sucesso!"); // Add novo client
});

app.delete("/client/:id", (req, res) => {
  let index = burcarIndexClient(req.params.id);
  client.splice(index, 1);
  res.status(200).send(`Client com id ${req.params.id} excluido com sucesso`); //deletando 1 client com sucesso por id/index
});

app.put("/client/:id", (req, res) => {
  let index = burcarIndexClient(req.params.id);
  client[index].name = req.body.name;
  client[index].age = req.body.age;
  client[index].city = req.body.city;
  res
    .status(200)
    .send(`Client com id ${req.params.id} foi atualizado com sucesso`);
});

export default app;
