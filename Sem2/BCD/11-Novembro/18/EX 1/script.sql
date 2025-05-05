-- DML (Importação dos dados)
DROP DATABASE IF EXISTS clientes;
CREATE DATABASE Clientes CHARSET=UTF8 COLLATE utf8_general_ci;
USE Clientes;
-- DDL
CREATE TABLE clientes(
    id_cliente int not null PRIMARY KEY auto_increment,
    nome varchar(255) not null,
    nascimento varchar(8) not null, 
    sexo varchar(1) not null,
    peso int(5) not null
);

CREATE TABLE telefones(
    id_telefone int not null PRIMARY KEY auto_increment,
    telefone varchar(15) not null,
    id_cliente int not null,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex1/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex1/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM clientes;

SELECT * FROM telefones;