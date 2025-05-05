const express = require('express');

const routes = express.Router();
const Clientes = require('./controllers/clientes');
const Fornecedores = require('./controllers/fornecedores');
const Telefone = require('./controllers/telefone');
const Produtos = require('./controllers/produtos');
const Pedidos = require('./controllers/pedidos');

routes.get('/', (req, res) => {
  return res.json({ message: 'API produtos composição executando' });
});

routes.post('/clientes', Clientes.create);
routes.get('/clientes', Clientes.read);
routes.put('/clientes/:id', Clientes.update);
routes.delete('/clientes/:id', Clientes.deletar);

routes.post('/fornecedores', Fornecedores.create);
routes.get('/fornecedores', Fornecedores.read);
routes.put('/fornecedores/:id', Fornecedores.update);
routes.delete('/fornecedores/:id', Fornecedores.deletar);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.put('/telefone/:id', Telefone.update);
routes.delete('/telefone/:id', Telefone.deletar);

routes.post('/produtos', Produtos.create);
routes.get('/produtos', Produtos.read);
routes.put('/produtos/:id', Produtos.update);
routes.delete('/produtos/:id', Produtos.deletar);

routes.post('/pedidos', Pedidos.create);
routes.get('/pedidos', Pedidos.read);
routes.put('/pedidos/:id', Pedidos.update);
routes.delete('/pedidos/:id', Pedidos.deletar);

module.exports = routes;