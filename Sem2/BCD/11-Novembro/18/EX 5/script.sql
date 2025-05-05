drop database if exists Pedidos;
create database Pedidos;
use Pedidos;

create table clientes(
    id_cliente int not null primary key auto_increment,
    cpf int not null,
    nome_cliente varchar(100) not null,
    Endereço_cep int not null,
    Endereço_numero int not null,
    Endereço_complemento text
);


create table telefones(
    id_telefone int not null primary key auto_increment,
    Telefone int not null,
    id_cliente int not null,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);			

create table entregadores(
    id_entregador int not null primary key auto_increment,
    nome_entregador varchar(100) not null,
    veiculo text
);

create table produtos(
    id_produto int not null primary key auto_increment,
    nome_produto varchar(100) not null,
    preco_unitario int not null
);

create table pedidos(
    id_pedido int not null primary key auto_increment,
    id_cliente int not null,
    id_entregador int not null,
    data date,
    hora_pedido time,
    hora_entrega time,
    hora_fim time,
    quantidade int not null,
    id_produto int not null
);


load data infile 'C:/dadoscsv/18-11/ex5/clientes.csv'
into table clientes
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex5/telefones.csv'
into table telefones
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex5/entregador.csv'
into table entregador
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex5/produtos.csv'
into table produtos
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex5/pedidos.csv'
into table pedidos
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

select * from clientes;

select * from telefones;

select * from entregadores;

select * from produtos;

select * from pedidos;
