const express = require('express');

const routes = express.Router();
const Pessoas = require('./controllers/pessoas');
const Clientes = require('./controllers/clientes');
const Vendedores = require('./controllers/vendedores');
const Produto = require('./controllers/produtos');
const Pedido = require('./controllers/pedidos');
const Item = require('./controllers/itens');
const PedidoComposto = require('./controllers/pedidoComposto');

routes.get('/', (req, res) => {
  return res.json({ message: 'API produtos composição executando' });
});

routes.post('/pessoas', Pessoas.create);
routes.get('/pessoas', Pessoas.read);

routes.post('/clientes', Clientes.create);
routes.get('/clientes', Clientes.read);

routes.post('/vendedores', Vendedores.create);
routes.get('/vendedores', Vendedores.read);

routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);

routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);

routes.post('/itens', Item.create);
routes.get('/itens', Item.read);

routes.get('/pedidocomposto', PedidoComposto.read);

module.exports = routes;