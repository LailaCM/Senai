const express = require('express');
const router = express.Router();

const jogadores = require('./controller/controller_jogadores');
const classe = require('./controller/controller_classe');
const modalidade = require('./controller/controller_modalidade');
const jogos = require('./controller/controller_jogos');
const destaques = require('./controller/controller_destaques');
const penalidade = require('./controller/controller_penalidade');

router.post('/modalidade', modalidade.create);
router.get('/modalidade', modalidade.read);
router.post('/classe', classe.create);
router.get('/classe', classe.read);
router.post('/jogadores', jogadores.create);
router.get('/jogadores', jogadores.read);
router.post('/destaques', destaques.create);
router.get('/destaques', destaques.read);
router.post('/jogos', jogos.create);
router.get('/jogos', jogos.read);
router.post('/penalidade', penalidade.create);
router.get('/penalidade', penalidade.read);

module.exports = router;