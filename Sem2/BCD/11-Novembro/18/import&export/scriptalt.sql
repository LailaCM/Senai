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

insert into produtos values
(null, 'Alicate', 'Alicate universal', 'alicate.png', 30.00,	7),
(null, 'Martelo', 'Martelo médio', 'martelo.png', 15.00,	66),
(null, 'Prego', '15mm 1.5mm', 'prego.png', 0.15, 12),
(null, 'Parafuso', '10mm 2mm', 'parafuso.png', 0.25, 84),
(null, 'Arruela', '20mm 10mm', 'arruela.png', 0.10, 35),
(null, 'Trena', '5 metros', 'trena.png', 25.00, 60),
(null, 'Fita isolante', '15 metros', 'fitaisolante.png', 8.00, 22),
(null, 'Tinta', '5 litros - Coral', 'tinta.png', 45.00, 14),
(null, 'Pincel', '25mm', 'pincel.png', 9.90, 95),
(null, 'Tela', '1x2m', 'tela.png', 40.00, 43);

insert into pedidos values
(null, 9, 7, '2024-11-08'),
(null, 1, 7, '2024-11-08'),
(null, 2, 1, '2024-11-10'),
(null, 5, 6, '2024-11-08'),
(null, 5, 10, '2024-11-11');

select * from produtos;

select * from pedidos;
