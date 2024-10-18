import { consulta } from "../database/conexao.js";

class ClientRepository {
  //CRUD

  create(client) {
    const sql = "INSERT INTO clients SET ?";
    return consulta(sql, client, "Não foi possível cadastar!");
  }

  findAll() {
    const sql = "SELECT * FROM clients;";
    return consulta(sql, "Não foi possível localizar");
  }

  findById(id) {
    const sql = "SELECT * FROM clients WHERE id=?;";
    return consulta(sql, id, "Não foi possível localizar");
  }

  update(client, id) {
    const sql = "UPDATE clients SET ? WHERE id=?;";
    return consulta(sql, [client, id], "Não foi possível atualizar");
  }

  delete(id) {
    const sql = "DELETE FROM clients WHERE id=?;";
    return consulta(sql, id, "Não foi possível deletar");
  }
}

export default new ClientRepository();
