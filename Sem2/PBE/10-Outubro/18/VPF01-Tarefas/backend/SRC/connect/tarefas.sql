drop database if exists tarefas;
create database tarefas character set utf8 collate utf8_general_ci;
use tarefas;

-- Tabela de modalidades
create table info(
    id int not null primary key auto_increment,
    titulo varchar(100) not null,
    descricao varchar(100) not null,
    data_cadastro  datetime,
    nome varchar(100) not null
);

show tables;

insert into info values
(null, 'Limpar casa','Passar vassoura e organizar a casa', '2024-09-23', 'Biazinha'),
(null,'Arrumar a cama', 'Esticar e dobrar os lençóis', '2024-09-23','Milenão');

select * from info;