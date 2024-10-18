import ClientRepository from "../repositories/ClientRepository.js";

class ClientController {
  // Método para criar um novo cliente
  async store(req, res) {
    const client = req.body;
    const row = await ClientRepository.create(client);
    res.json(row);
  }

  // Método para listar todos os clientes
  async index(req, res) {
    const row = await ClientRepository.findAll();
    res.json(row);
  }

  // Método para mostrar um cliente específico
  async show(req, res) {
    const id = req.params.id;
    const row = await ClientRepository.findById(id);
    res.json(row);
  }

  // Método para atualizar um cliente
  async update(req, res) {
    const id = req.params.id;
    const client = req.body;
    const row = await ClientRepository.update(client, id);
    res.json(row);
  }

  // Método para deletar um cliente
  async delete(req, res) {
    const id = req.params.id;
    const row = await ClientRepository.delete(id);
    res.json(row);
  }
}

// Padrão Singleton
export default new ClientController();
