drop database if exists interclasse;
create database interclasse;
use interclasse;

create table times(
    id int not null primary key auto_increment,
    classe varchar(100) not null,
    modalidade varchar(100) not null,
    vitorias varchar(100) not null,
    derrotas varchar(100) not null,
    q_ouro varchar(100) not null,
    q_prata varchar(100) not null,
    q_bronze varchar(100) not null

);

create table jogadores(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    classe varchar(11) not null,
    modalidade varchar(100) not null,
    idade varchar(11) not null
);

create table destaques(
    id int not null primary key auto_increment,
    classe varchar(100) not null,
    nome varchar(100) not null,
    modalidade varchar(100) not null,
    pontos varchar(100) not null,
    FOREIGN KEY (nome) REFERENCES jogadores(nome),
);

create table modalidades(
    id int not null primary key auto_increment,
    modalidades varchar(100) not null

);

create table jogos(
    id int not null primary key auto_increment,
    preco_custo int not null,
    quantidade int not null,
    id_compra int not null,
    id_produto int not null,
    FOREIGN KEY (id_compra) REFERENCES compra(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);

create table penalidade(
    id int not null primary key auto_increment,
    preco_custo int not null,
    quantidade int not null,
    id_compra int not null,
    id_produto int not null,
    FOREIGN KEY (id_compra) REFERENCES compra(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);

show tables;

insert into cliente values
(null,'Bia atriz', '11111111111', 'Ap25 Bl13', '44444444444'),
(null,'Mil ema', '22222222222', 'Rua Corce', '55555555555'),
(null,'Alial', '33333333333', 'Rua Mogi Guarana', '66666666666');

insert into produto values
(null,'Laço', 10, 15 ),
(null,'Perfume Dog',5,30),
(null,'Gravata', 20, 15),
(null,'Ratinho', 30,8),
(null,'Osso', 45, 20),
(null,'Cama p', 14, 85);

insert into compra values
(null,'Laço', 'Acessório','2009-04-30',1),
(null,'Perfume Dog', 'Higiene','2000-12-05',2),
(null,'Gravata','Acessório','1997-01-28',3),
(null,'Ratinho', 'Brinquedo','2009-04-30',1),
(null,'Osso', 'Brinquedo','2000-12-05',2),
(null,'Cama p','Acessório','1997-01-28',3);


insert into itemcompra values
(null,10,1,1,1),
(null,20,1,2,2),
(null,10,1,3,3),
(null,5,1,1,4),
(null,10,1,2,5),
(null,65,1,3,6);

select * from cliente;
select * from produto;
select * from compra;
select * from itemcompra;
