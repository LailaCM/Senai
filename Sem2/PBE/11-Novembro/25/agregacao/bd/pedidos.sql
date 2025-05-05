drop database if exists pedidos;
create database pedidos;
use pedidos;
create table produtos(
    id int primary key auto_increment,
    nome varchar(100) not null,
    preco decimal(10,2) not null
);

create table pedidos(
    id int primary key auto_increment,
    nome_cliente varchar(100) not null,
    data_pedido datetime not null default(now())
);

create table itens_pedido(
    id int primary key auto_increment,
    pedido int not null,
    produto int not null,
    quantidade int not null,
    foreign key (pedido) references pedidos(id),
    foreign key (produto) references produtos(id)
);

CREATE VIEW vw_itens AS
SELECT 
    i.id,
    i.pedido,
    i.produto,
    i.quantidade,
    prod.nome,
    prod.preco,
    prod.preco * i.quantidade as total
FROM itens_pedido i
JOIN produtos prod ON i.produto = prod.id;

CREATE VIEW vw_pedidos AS
SELECT
    ped.id,
    ped.data_pedido,
    ped.nome_cliente,
    iv.id as item_id,
    iv.produto,
    iv.quantidade,
    iv.nome,
    iv.preco,
    iv.total
FROM pedidos ped
LEFT JOIN vw_itens iv ON ped.id = iv.pedido;

insert into produtos(nome, preco) values('Produto 1', 10.00);
insert into produtos(nome, preco) values('Produto 2', 20.00);
insert into produtos(nome, preco) values('Produto 3', 30.00);
insert into produtos(nome, preco) values('Produto 4', 40.00);

insert into pedidos(nome_cliente) values('Cliente 1');

insert into itens_pedido(pedido, produto, quantidade) values(1, 1, 2);
insert into itens_pedido(pedido, produto, quantidade) values(1, 2, 1);

insert into pedidos(nome_cliente) values('Cliente 2');

insert into itens_pedido(pedido, produto, quantidade) values(2, 3, 3);

insert into pedidos(nome_cliente) values('Cliente 3');

select * from vw_itens;
select * from vw_pedidos;
