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

routes.post('/fornecedores', Fornecedores.create);
routes.get('/fornecedores', Fornecedores.read);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);

routes.post('/produtos', Produtos.create);
routes.get('/produtos', Produtos.read);

routes.post('/pedidos', Pedidos.create);
routes.get('/pedidos', Pedidos.read);

module.exports = routes;