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

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [client, id]} valores a serem passados para o sql
 * @param {string} msgReject mensagem a ser exibida
 * @returns objeto da promise
 */

export const consulta = (sql, valores = "", msgReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        return reject(msgReject);
      }
      resolve(result);
    });
  });
};

export default conexao;
