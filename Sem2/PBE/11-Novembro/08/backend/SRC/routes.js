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

const carros = require('./controller/controller_carros');

router.post('/carros', carros.create);
router.get('/carros', carros.read);
router.put('/carros/:id', carros.update);
router.delete('/carros/:id', carros.deletar);


module.exports = router;