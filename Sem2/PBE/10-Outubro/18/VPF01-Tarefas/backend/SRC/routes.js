const express = require('express');
const router = express.Router();

const info = require('./controller/controller_info');

router.post('/info', info.create);
router.get('/info', info.read);
router.delete('/info/:id', info.deletar);

module.exports = router;