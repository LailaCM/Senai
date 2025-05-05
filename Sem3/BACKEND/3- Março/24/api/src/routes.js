const express = require('express');
const routes = express.Router();

const Cliente = require('./controller/controllercliente')
const Pizza = require('./controller/controllerpizza')
const Pedido = require('./controller/controllerpedido')
const Itens = require('./controller/controlleritens')

routes.post('/cliente', Cliente.create);
routes.get('/cliente', Cliente.read);
routes.put('/cliente/:id', Cliente.update);
routes.delete('/cliente/:id', Cliente.remove);

routes.post('/pizza', Pizza.create);
routes.get('/pizza', Pizza.read);
routes.put('/pizza/:id', Pizza.update);
routes.delete('/pizza/:id', Pizza.remove);

routes.post('/pedido', Pedido.create);
routes.get('/pedido', Pedido.read);
routes.get('/pedido/:id', Pedido.readOne);
routes.put('/pedido/:id', Pedido.update);
routes.delete('/pedido/:id', Pedido.remove);

routes.post('/itens', Itens.create);
routes.get('/itens', Itens.read);
routes.put('/itens/:id', Itens.update);
routes.delete('/itens/:id', Itens.remove);

module.exports = routes;
