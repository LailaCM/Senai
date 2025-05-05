-- Criar o banco de dados
drop database if exists campeonato;
create database campeonato character set utf8 collate utf8_general_ci;
USE campeonato;

-- Criar as tabelas
CREATE TABLE equipes (
    id INT not null PRIMARY KEY auto_increment,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE jogos (
    id int not null PRIMARY KEY auto_increment,
    equipe1_id INT NOT NULL,
    equipe2_id INT NOT NULL,
    resultado_final VARCHAR(20),
    data DATE not null default(now()),
    FOREIGN KEY (equipe1_id) REFERENCES equipes(id),
    FOREIGN KEY (equipe2_id) REFERENCES equipes(id)
);


CREATE TABLE tentativas_gol (
    id INT PRIMARY KEY auto_increment,
    jogo_id INT REFERENCES jogos(id),
    equipe_id INT REFERENCES equipes(id),
    tentativas INT,
    finalizacoes INT
);

CREATE TABLE gols (
    id INT PRIMARY KEY auto_increment,
    jogo_id INT REFERENCES jogos(id),
    equipe_id INT REFERENCES equipes(id),
    jogador VARCHAR(50),
    numero_gols INT
);

CREATE TABLE substituicoes (
    id INT PRIMARY KEY auto_increment,
    jogo_id INT REFERENCES jogos(id),
    jogador_saida VARCHAR(50),
    jogador_entrada VARCHAR(50)
);

CREATE TABLE escanteios (
    id INT PRIMARY KEY auto_increment,
    jogo_id INT REFERENCES jogos(id),
    equipe_id INT REFERENCES equipes(id),
    quantidade INT
);

-- Inserir os dados
INSERT INTO equipes (nome) VALUES ('2° EM'), ('9° B'), ('1° EM A');

INSERT INTO jogos (equipe1_id, equipe2_id, resultado_final, data)
VALUES 
    (1, 2, '6 x 1', '2024-09-01'), 
    (3, 2, '2 x 0', '2024-09-01'), 
    (1, 3, '7 x 1', '2024-09-01');

INSERT INTO tentativas_gol (jogo_id, equipe_id, tentativas, finalizacoes) VALUES 
    (1, 1, 3, 2), 
    (1, 2, 3, 2),
    (2, 3, 1, 1),
    (3, 1, 4, 4),
    (3, 2, 0, 1);

INSERT INTO gols (jogo_id, equipe_id, jogador, numero_gols) VALUES 
    (1, 2, 'Cauã', 1),
    (1, 2, 'Ney', 1),
    (1, 1, 'Leonardo', 1),
    (1, 1, 'Stafocher', 1),
    (2, 3, 'Leonardo', 1),
    (3, 1, 'Jogador 1 EM A', 1),
    (3, 2, 'Jogador 2 EM', 1);

INSERT INTO substituicoes (jogo_id, jogador_saida, jogador_entrada) VALUES 
    (1, 'Jão', 'Hasmann');

INSERT INTO escanteios (jogo_id, equipe_id, quantidade) VALUES 
    (1, 2, 1),
    (2, 2, 1);

select * from equipes;

select * from jogos;

select * from tentativas_gol;

select * from gols;

select * from substituicoes;

select * from escanteios;