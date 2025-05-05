-- Banco de animais chamado uni
drop database if exists uni;
create database uni;
use uni;
create table animais(
    id int primary key auto_increment,
    nome varchar(100) not null,
    especie varchar(50) not null,
    raca varchar(50) not null
);
insert into animais values
(1, 'Totó', 'cachorro', 'Caramelo'),
(2, 'Mingau', 'gato','Siamês'),
(3, 'Nemo', 'peixe', 'Palhaço'),
(4, 'Gluglu','Peru', 'Natal');