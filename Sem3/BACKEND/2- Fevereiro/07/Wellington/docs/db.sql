DROP DATABASE IF EXISTS clinica;
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE clientes(
    id_cliente INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    nascimento date NOT NULL
);