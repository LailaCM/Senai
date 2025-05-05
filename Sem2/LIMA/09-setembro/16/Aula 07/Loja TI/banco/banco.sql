DROP DATABASE IF EXISTS lojati;
CREATE DATABASE lojati;
USE lojati;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    endereco VARCHAR(255)NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    rg VARCHAR(255) UNIQUE NOT NULL,
    estado_civil VARCHAR (255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

show tables;
describe users;
