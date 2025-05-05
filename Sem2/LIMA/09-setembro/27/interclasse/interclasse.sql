drop database if exists interclasse;
create database interclasse character set utf8 collate utf8_general_ci;
use interclasse;

-- Tabela de modalidades
create table modalidade(
    id int not null primary key auto_increment,
    nome varchar(100) not null
);

-- Tabela de classes
create table classe(
    id int not null primary key auto_increment,
    sala varchar(100) not null,
    q_ouro int not null,
    q_prata int not null,
    q_bronze int not null
);

-- Tabela de jogadores
create table jogadores(
    id int not null primary key auto_increment,
    nome varchar(100) not null,
    idade varchar(3) not null,
    sala_id int not null,
    FOREIGN KEY (sala_id) REFERENCES classe(id)
);

-- Tabela de destaques
create table destaques(
    id int not null primary key auto_increment,
    sala_id int not null,
    jogador_id int not null,
    modalidade_id int not null,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id),
    FOREIGN KEY (modalidade_id) REFERENCES modalidade(id),
    FOREIGN KEY (sala_id) REFERENCES classe(id)
);

-- Tabela de jogos
create table jogos(
    id int not null primary key auto_increment,
    data_jogo datetime,
    modalidade_id int not null,
    sala1_id int not null,
    sala2_id int not null,
    vencedor_id int not null,
    placar varchar(100) not null,
    FOREIGN KEY (modalidade_id) REFERENCES modalidade(id),
    FOREIGN KEY (sala1_id) REFERENCES classe(id),
    FOREIGN KEY (sala2_id) REFERENCES classe(id),
    FOREIGN KEY (vencedor_id) REFERENCES classe(id)
);

-- Tabela de penalidades
create table penalidade(
    id int not null primary key auto_increment,
    jogador_id int not null,
    sala_id int not null,
    modalidade_id int not null,
    penalidade varchar(100) not null,
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id),
    FOREIGN KEY (modalidade_id) REFERENCES modalidade(id),
    FOREIGN KEY (sala_id) REFERENCES classe(id)
);

show tables;


insert into modalidade values
(null,'Vôlei Fem'),
(null,'Vôlei Masc'),
(null,'Vôlei Misto'),
(null,'Futsal Fem'),
(null,'Futsal Masc'),
(null,'Society'),
(null,'Dama'),
(null,'Xadrez'),
(null,'Futmesa');

insert into classe values
(null,'2ºA', 2, 1, 2),
(null,'1ºA', 1, 2, 1),
(null,'1ºB', 0, 0, 0),
(null,'9ºA', 1, 0, 1),
(null,'9ºB', 1, 1, 0);

--id - sala  - ouro - prata -  bronze

INSERT INTO jogadores VALUES
(null,'Milena', '16', 1),
(null,'Lohaine', '16', 1),
(null,'Henrico', '16', 1),
(null,'Lucas Hasmann', '16', 1),
(null,'Guilherme Stafocher', '17', 1),
(null,'Leonardo', '17', 1),
(null,'Gabriela', '16', 1),
(null,'Guilherme Canina', '16', 1),
(null,'Laila', '17', 1),
(null,'Isabelle', '16', 1),
(null,'Olavo', '16', 1),
(null,'Dahra', '16', 1),
(null,'Maria Eduarda Silva', '16', 1),
(null,'Lucas Giachetto', '17', 1),
(null,'João Lucas', '17', 1),
(null,'Juliano', '16', 2),
(null,'Murilo', '15', 2),
(null,'Ítalo', '16', 2),
(null,'Miguel Gerbi', '16', 2),
(null,'Luiz Otávio', '15', 2),
(null,'Kaique', '15', 2),
(null,'Davi', '15', 2),
(null,'Otávio', '15', 2),
(null,'Luiza', '16', 2),
(null,'Leandro', '15', 2),
(null,'Beatriz', '15', 2),
(null,'Letícia', '16', 2),
(null,'Julia Novo', '15', 2),
(null,'Clara', '15', 2),
(null,'Tamires', '15', 2),
(null,'Enzo', '15', 2),
(null,'Luiz Henrique', '16', 2),
(null,'Gustavo', '17', 2),
(null,'João Tandello', '15', 2),
(null,'Mirella', '15', 2),
(null,'Mariana', '16', 2),
(null,'Sayury', '15', 2),
(null,'Isabele', '16', 2),
(null,'Nicollas', '15', 3),
(null, 'Tobias', '15', 4),
(null, 'Enzo', '15', 4),
(null, 'Pedro', '15', 4),
(null, 'Otávio', '15', 4),
(null, 'Caio', '15', 4),
(null, 'Victor', '14', 4),
(null, 'Mateus', '15', 4),
(null, 'Maycon', '15', 4),
(null, 'Briam', '15', 4),
(null, 'Lavínia', '14', 4),
(null, 'Marina', '15', 4),
(null, 'Heitor', '15', 4),
(null, 'Otávio', '15', 4),
(null, 'Miguel Pignata', '15', 5),
(null, 'Enzo', '14', 5),
(null, 'Isabeli', '15', 5),
(null, 'Alicia', '15', 5),
(null, 'Ana Clara', '14', 5),
(null, 'Miguel S.', '15', 5),
(null, 'Mirela', '15', 5),
(null, 'João Henrique', '15', 5),
(null, 'Cauã', '16', 5),
(null, 'Davi Cardeal', '15', 5),
(null, 'Thiago Amaral', '15', 5),
(null, 'Samuel Gomes', '15', 5),
(null, 'Jéssica', '15', 5),
(null, 'Lívia', '15', 5);

insert into destaques values
(null, 1, 5, 6),
(null, 2, 16, 6),
(null, 2, 30, 3),
(null, 4, 44, 3),
(null, 1, 1, 1),
(null, 1, 7, 3),
(null, 2, 22, 6),
(null, 4, 41, 6),
(null, 3, 39, 7),
(null, 5, 65, 7),
(null, 1, 11, 7),
(null, 2, 30, 1),
(null, 2, 30, 3),
(null, 4, 49, 3),
(null, 5, 53, 3),
(null, 3, 24, 2),
(null, 9, 6, 1),
(null, 9, 5, 1),
(null, 3, 56, 5),
(null, 3, 57, 5);


-- id - sala - jogador - modalidade


insert into jogos values
(null, '2024-09-23', 3, 2, 4, 4, '2x0'),
(null, '2024-09-23', 6, 1, 5, 1, '6x1'),
(null, '2024-09-23', 6, 2, 4, 2,'2x0'),
(null, '2024-09-23', 6, 1, 2, 1,'7x1'),
(null, '2024-09-23', 1, 1, 2, 1, '1x0'),
(null, '2024-09-23', 3, 1, 2, 1, '2x0'),
(null, '2024-09-23', 2, 1, 2, 2, '2x0'),
(null, '2024-09-26', 7, 3, 5, 3, null),
(null, '2024-09-30', 9, 2, 4, 2, '2x1'),
(null, '2024-10-03', 4, 1, 2, 1, '3x0'),
(null, '2024-10-03', 8, 1, 4, 1, null),
(null, '2024-10-03', 5, 1, 3, 1, '4x2'),
(null, '2024-10-03', 5, 2, 4, 2, '5x4'),
(null, '2024-10-03', 5, 1, 2, 2, '6x1');

-- id - data- modalidade - sala1 - sala2 - vencedor - placar

insert into penalidade values
(null, 11, 1, 6, 'expulsão'),
(null, 15, 2, 6, 'expulsão'),
(null, 4, 1, 6, 'Amarelo'),
(null, 5, 1, 6, 'Amarelo');

--id - jodador -  sala - modalidade - penalidade 

select * from modalidade;

select * from classe;

select * from jogadores;

select * from destaques;

select * from jogos;

select * from penalidade;