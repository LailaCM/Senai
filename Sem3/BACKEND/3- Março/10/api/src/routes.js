const express = require('express');
const routes = express.Router();

const Turma = require('./controller/controllerturma')
const Aluno = require('./controller/controlleraluno')
const Professor = require('./controller/controllerprofessor')
const Disciplina = require('./controller/controllerdisciplina')
const Matricula = require('./controller/controllermatricula')

routes.post('/aluno', Aluno.create);
routes.get('/aluno', Aluno.read);
routes.get('/aluno/:ra', Aluno.readOne);
routes.put('/aluno/:ra', Aluno.update);
routes.delete('/aluno/:ra', Aluno.remove);

routes.post('/professor', Professor.create);
routes.get('/professor', Professor.read);
routes.get('/professor/:id', Professor.readOne);
routes.put('/professor/:id', Professor.update);
routes.delete('/professor/:id', Professor.remove);

routes.post('/turma', Turma.create);
routes.get('/turma', Turma.read);
routes.get('/turma/:id', Turma.readOne);
routes.put('/turma/:id', Turma.update);
routes.delete('/turma/:id', Turma.remove);

routes.post('/matricula', Matricula.create);
routes.get('/matricula', Matricula.read);
routes.get('/matricula/:id', Matricula.readOne);
routes.put('/matricula/:id', Matricula.update);
routes.delete('/matricula/:id', Matricula.remove);

routes.post('/disciplina', Disciplina.create);
routes.get('/disciplina', Disciplina.read);
routes.get('/disciplina/:id', Disciplina.readOne);
routes.put('/disciplina/:id', Disciplina.update);
routes.delete('/disciplina/:id', Disciplina.remove);

module.exports = routes;
