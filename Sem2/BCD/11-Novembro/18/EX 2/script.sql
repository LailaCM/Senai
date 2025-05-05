DROP DATABASE IF EXISTS academia;
CREATE DATABASE academia;
USE academia;

CREATE TABLE alunos (
    id_aluno INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,
    peso DECIMAL(5, 2)
);

CREATE TABLE telefones (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20) NOT NULL,
    id_aluno INT NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno)
);

CREATE TABLE exercicios (
    id_exercicio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT,
    grupo_muscular VARCHAR(50),
    aparelho VARCHAR(100)
);

CREATE TABLE atividade (
    id_exercicio INT NOT NULL,
    dia_semana VARCHAR(255) NOT NULL,
    serie VARCHAR(255) NOT NULL,
    id_aluno INT NOT NULL,
    FOREIGN KEY (id_exercicio) REFERENCES exercicios(id_exercicio),
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno)
);

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex2/aluno.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex2/telefone.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex2/exercicio.csv'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/dadoscsv/18-11/ex2/atividade.csv'
INTO TABLE atividade
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;
