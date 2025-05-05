drop database if exists rsm;
create database rsm;
use rsm;

-- Criar uma tabela de Alunos
create table RedeSocial(
    id int not null primary key auto_increment,
    usuario varchar(100) not null,
    musicas varchar(20),
    albuns varchar(100) not null
    artistas varchar(100) not null
);

-- Listar as tabelas
show tables;
-- Ver a estrutura da tabela
describe RedeSocial;

-- Excluir uma tabela
-- drop table Alunos;

-- Ver a estrutura da tabela
describe Alunos;

-- Ver a estrutura da tabela
describe Alunos;

-- Read - Listar alunos
select * from Alunos;

--Update - Atualizar os dados de um aluno
Update Alunos set nome = "Ana Luiza" where id = 1;

-- Delete - Excluir um aluno
Delete from Alunos where id = 1;