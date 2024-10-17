import conexao from "../database/conexao.js";

class ClientRepository {
  //CRUD

  create(client) {
    const sql = "INSERT INTO clients SET ?";
    return new Promise((resolve, reject) => {
      conexao.query(sql, client, (error, result) => {
        if (error) {
          return reject(`Erro ao criar novo client: ${error}`);
        }
        resolve(result);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM clients;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if (error) {
          return reject(`Erro ao buscar os dados: ${error}`);
        }
        resolve(result);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM clients WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [id], (error, result) => {
        if (error) {
          return reject(`Erro ao buscar os dados: ${error}`);
        }
        resolve(result);
      });
    });
  }

  update(client, id) {
    const sql = "UPDATE clients SET ? WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [client, id], (error, result) => {
        if (error) {
          return reject(`Erro ao atualizar os dados: ${error}`);
        }
        resolve(result);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM clients WHERE id=?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [id], (error, result) => {
        if (error) {
          return reject(`Erro ao deletar client: ${error}`);
        }
        resolve(result);
      });
    });
  }
}

export default new ClientRepository();
