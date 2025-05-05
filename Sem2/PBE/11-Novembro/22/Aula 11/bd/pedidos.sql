drop database if exists pedidos;
create database pedidos character set utf8 collate utf8_general_ci;
use pedidos;

create table produtos(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    preco decimal(10,2) not null
);

create table pedidos(
    id int not null primary key auto_increment,
    data_pedido date not null default (now()),
    id_produto int not null,
    quantidade int not null,
    foreign key (id_produto) references produtos(id)
);

CREATE VIEW vw_pedidos AS
SELECT
    ped.*,
    prod.nome,
    prod.preco,
    prod.preco * ped.quantidade as total
FROM pedidos ped
INNER JOIN produtos prod ON prod.id = ped.produto;