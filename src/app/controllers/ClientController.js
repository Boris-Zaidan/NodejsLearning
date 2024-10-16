import conexao from "../database/conexao.js";

class ClientController {
  // Método para listar todos os clientes
  index(req, res) {
    const sql = "SELECT * FROM clients;";
    conexao.query(sql, (error, result) => {
      if (error) {
        res.status(404).json({ Error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  // Método para mostrar um cliente específico
  show(req, res) {
    const id = req.params.id;
    const sql = "SELECT * FROM clients WHERE id=?;";
    conexao.query(sql, id, (error, result) => {
      const linha = result[0];
      if (error) {
        res.status(404).json({ Error: error });
      } else {
        res.status(200).json(linha);
      }
    });
  }

  // Método para criar um novo cliente
  store(req, res) {
    const client = req.body;
    const sql = "INSERT INTO clients SET ?;";
    conexao.query(sql, client, (error, result) => {
      if (error) {
        res.status(404).json({ Error: error });
      } else {
        res.status(201).json({ "Cadastrado com sucesso!": result });
      }
    });
  }

  // Método para atualizar um cliente
  update(req, res) {
    const id = req.params.id;
    const client = req.body;
    const sql = "UPDATE clients SET ? WHERE id=?;";
    conexao.query(sql, [client, id], (error, result) => {
      if (error) {
        res.status(404).json({ Error: error });
      } else {
        res.status(200).json({ "Atualizado com sucesso!": result });
      }
    });
  }

  // Método para deletar um cliente
  delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM clients WHERE id=?;";
    conexao.query(sql, id, (error, result) => {
      if (error) {
        res.status(404).json({ Error: error });
      } else {
        res.status(200).json({ "Client Deletado com sucesso!": result });
      }
    });
  }
}

// Padrão Singleton
export default new ClientController();
