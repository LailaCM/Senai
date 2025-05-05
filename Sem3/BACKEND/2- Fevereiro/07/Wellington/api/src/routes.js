const express = require('express');

const routes = express.Router();

const Cliente = require('./controllers/cliente');

routes.get('/', (req, res) => {
    res.send('API Clínica Respondendo');
});

routes.post('/clientes', Cliente.create);
routes.get('/clientes', Cliente.read);
routes.delete('/clientes/:id', Cliente.deletar);
routes.put('/clientes/:id', Cliente.update);

module.exports = routes;
