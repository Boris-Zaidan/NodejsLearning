import mysql from "mysql";
import dotenv from "dotenv";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexao.connect();

export default conexao;

// Atualizar
// UPDATE `dbclient`.`clients` SET `age` = '32' WHERE (`id` = '4');

// Delete nunca fazer sem o Where
// DELETE FROM `dbclient`.`clients` WHERE (`id` = '3');
