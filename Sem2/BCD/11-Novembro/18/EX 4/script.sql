DROP DATABASE IF EXISTS sistema_parcelas;
CREATE DATABASE sistema_parcelas;
USE sistema_parcelas;

CREATE TABLE clientes (
    cod_cli INT NOT NULL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    end VARCHAR(50),
    endereco VARCHAR(255),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf CHAR(2),
    telefone VARCHAR(20),
    celular VARCHAR(20)
);

CREATE TABLE parcelas (
    cod_cli INT NOT NULL,
    num_dupli INT NOT NULL,
    data_compra DATE NOT NULL,
    vencimento DATE NOT NULL,
    pagamento DATE,
    valor DECIMAL(10, 2) NOT NULL,
    diferenca DECIMAL(10, 2),
    v_final DECIMAL(10, 2),
    FOREIGN KEY (cod_cli) REFERENCES Clientes(cod_cli)
);

CREATE TABLE numeros (
    cod_num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cod_cli INT NOT NULL,
    numero VARCHAR NOT NULL,
    FOREIGN KEY (cod_cli) REFERENCES clientes(cod_cli)
);				

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex4/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex4/parcelas.csv'
INTO TABLE parcelas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex4/numeros.csv'
INTO TABLE numeros
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;