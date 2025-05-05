const express = require('express');
const routes = express.Router();

const clientes = require('./controller/controllerclientes')
const funcionarios = require('./controller/controllerfuncionarios')
const produtos = require('./controller/controllerprodutos')

routes.get('/clientes', clientes.read)
routes.post('/clientes', clientes.create)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.del)

routes.get('/funcionarios', funcionarios.read)
routes.post('/funcionarios', funcionarios.create)
routes.put('/funcionarios/:id', funcionarios.update)
routes.delete('/funcionarios/:id', funcionarios.del)

routes.get('/produtos', produtos.read)
routes.post('/produtos', produtos.create)
routes.put('/produtos/:id', produtos.update)
routes.delete('/produtos/:id', produtos.del)

module.exports = routes