drop database if exists pedidos;
create database pedidos;
use pedidos;
create table produtos(
    id int primary key auto_increment,
    nome varchar(100) not null,
    preco decimal(10,2) not null
);


create table clientes(
    id int primary key auto_increment,
    cpf int not null,
    nome varchar(100) not null,
    cep int not null,
    numero int,
    complemento varchar(1000)
);

create table pedidos(
    id int primary key auto_increment,
    data_pedido datetime not null default(now()),
    produto int not null,
    quantidade int not null,
    cliente int not null,
    foreign key(cliente) references clientes(id),
    foreign key(produto) references produtos(id)
);

DROP VIEW IF EXISTS vw_pedidos;
CREATE VIEW vw_pedidos AS
SELECT
    ped.*,
    prod.nome,
    prod.preco,
    prod.preco * ped.quantidade as total
FROM pedidos ped
INNER JOIN produtos prod ON prod.id = ped.produto;
