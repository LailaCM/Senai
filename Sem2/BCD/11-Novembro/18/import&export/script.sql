drop database if exists Pedidos;
create database Pedidos;
use Pedidos;

create table produtos(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    descricao text,
    imagem varchar(5000),
    preco int not null,
    quantidade int not null default(0)
);

create table pedidos(
    id int not null primary key auto_increment,
    idProdutos int not null,
    quantidade int not null default(0),
    data_venda datetime not null,
    FOREIGN KEY (idProdutos) REFERENCES produtos(id)
);

load data infile 'C:/dadoscsv/18-11/Produtos.csv'
into table produtos
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/Pedidos.csv'
into table pedidos
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

select * from produtos;

select * from pedidos;
