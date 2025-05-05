const express = require('express');

const routes = express.Router();

const Telefones = require('./controllers/telefones');

routes.get('/', (req, res) => {
    res.send('API Agenda Respondendo');
});

routes.post('/telefones', Telefones.create);
routes.get('/telefones', Telefones.read);
routes.delete('/telefones/:id', Telefones.deletar);
routes.put('/telefones/:id', Telefones.update);

module.exports = routes;
