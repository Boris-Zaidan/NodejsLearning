import app from "./app.js";

const Port = process.env.Port || 3000;

app.listen(Port, () => {
  console.log(`Servidor rodando na porta ${Port}...!`);
});
