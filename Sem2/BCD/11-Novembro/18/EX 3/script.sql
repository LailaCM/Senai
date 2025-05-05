drop database if exists linhas;
create database linhas;
use linhas;

create table linhas(
    id_linha int not null primary key auto_increment,
    descrição_linha text,
    horarios varchar(255) not null
);

create table telefones(
    id int not null primary key auto_increment,
    telefone varchar(255) not null,
    cpf varchar(255) not null,
    FOREIGN KEY (cpf) REFERENCES motoristas(cpf),
);			

create table motoristas(
    cpf int not null primary key auto_increment,
    nome varchar(100) not null
);

load data infile 'C:/dadoscsv/18-11/ex3/linhas.csv'
into table linhas
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex3/telefones.csv'
into table telefones
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/dadoscsv/18-11/ex3/motoristas.csv'
into table motoristas
fields terminated by ';'
lines terminated by '\r\n'
ignore 1 rows;

select * from linhas;

select * from telefones;

select * from motoristas;
