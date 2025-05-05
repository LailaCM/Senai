CREATE DATABASE IF NOT EXISTS interclasse_atividade;
USE interclasse_atividade;

CREATE TABLE jogadores (
    id_jogador INT PRIMARY KEY AUTO_INCREMENT,
    nome_jogador VARCHAR(255) NOT NULL,
    idade_jogador INT NOT NULL,
    sala_jogador VARCHAR(255) NOT NULL,
    modalidade_jogador VARCHAR(255) NOT NULL,
    quantidade_pontos INT NOT NULL
);