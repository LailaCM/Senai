const express = require('express');
const router = express.Router();

const clientes = require('./controller/controller_clientes');

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes/:id', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

const telefone = require('./controller/controller_telefone');

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone/:id', telefone.update);
router.delete('/telefone/:id', telefone.deletar);

const quartos = require('./controller/controller_quartos');

router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);
router.put('/quartos/:id', quartos.update);
router.delete('/quartos/:id', quartos.deletar);

const reservas = require('./controller/controller_reservas');

router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);
router.put('/reservas/:id', reservas.update);
router.delete('/reservas/:id', reservas.deletar);

const estacionamento = require('./controller/controller_estacionamento');

router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.put('/estacionamento/:id', estacionamento.update);
router.delete('/estacionamento/:id', estacionamento.deletar);


module.exports = router;