drop database if exists rede;
create database rede character set utf8 collate utf8_general_ci;
use rede;

create table usuario(
    id int not null primary key auto_increment,
    nome_usuario varchar(100) not null,
    idade int(3) not null,
    data_nascimento datetime not null,
    foto varchar(1000)
);

create table playlist(
    id int not null primary key auto_increment,
    id_usuario int not null,
    data_lancamento datetime not null,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

create table musica(
    id int not null primary key auto_increment,
    titulo varchar(11) not null,
    duracao int(20) not null,
    genero varchar(2400) not null
);

create table musicas(
    id int not null primary key auto_increment,
    id_playlist int not null,
    id_musica int not null,
    FOREIGN KEY (id_playlist) REFERENCES playlist(id),
    FOREIGN KEY (id_musica) REFERENCES musica(id)
);

create table curtidas(
    id int not null primary key auto_increment,
    data_curtida datetime,
    id_playlist int not null,
    id_usuario int not null,
    FOREIGN KEY (id_playlist) REFERENCES playlist(id),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

show tables;

insert into usuario values
(null,'Bia.saias', '16', '2008-04-19', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzitnNDu5zTL8lKb3T_XglcsDiXFvm5W82BQ&usqp=CAU'),
(null,'Milena.feliz', '16', '2008-05-21', 'https://i.pinimg.com/236x/23/f7/ef/23f7ef3aebaef1a5ad3b729dc59ff965.jpg'),
(null,'Laila.casada', '17', '2007-07-20', 'https://i.pinimg.com/236x/2a/0e/bd/2a0ebd0dfe8ee15b2feafc4b5fa8b6a4.jpg');

insert into playlist values
(null,1, '2009-04-30'),
(null,2,'2000-12-05'),
(null,3,'1997-01-28'),
(null,1, '2009-04-30'),
(null,2,'2000-12-05'),
(null,3,'1997-01-28');

insert into musica values
(null,'quero vê-la sorri', 2, 'rap'),
(null,'hoje é um novo amanhã',5, 'rap'),
(null,'a droga do amor', 3,'rap');

insert into musicas values
(null,1,1),
(null,1,2),
(null,2,2),
(null,2,3),
(null,3,1),
(null,3,2),
(null,3,3),
(null,4,1),
(null,5,1),
(null,6,3);

insert into curtidas values
(null,'2024-09-02', 1, 1),
(null,'2024-09-04', 2, 2),
(null,'2024-09-03', 4, 3),
(null,'2024-09-08', 6, 3),
(null,'2024-09-22', 3, 3),
(null,'2024-09-30', 5, 2),
(null,'2024-09-25', 2, 1),
(null,'2024-09-23', 2, 3),
(null,'2024-09-17', 5, 1),
(null,'2024-09-28', 4, 2),
(null,'2024-09-14', 6, 2),
(null,'2024-09-10', 1, 3);