drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

-- Criar uma tabela de Alunos
create table estante(
    id integer primary key auto_increment,
    livro varchar(255) not null,
    autor varchar(255) not null,
    descricao varchar(255) not null,
    datasp date not null
);

-- Listar as tabelas
show tables;