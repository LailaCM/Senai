drop database if exists cantina;
create database cantina;
use cantina;

-- Criar uma tabela de Alunos
create table vendas(
    id integer primary key auto_increment,
    produto varchar(255) not null,
    vendedor varchar(255) not null,
    descricao varchar(255) not null,
    custo int (100) not null,
    preco int (100) not null
);

-- Listar as tabelas
show tables;