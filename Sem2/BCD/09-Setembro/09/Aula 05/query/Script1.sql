drop database if exists users;
create database users;
use users;
create table user(
    id int not null primary key auto_increment,
    email varchar(255) not null,
    passwd varchar(100) not null,
    user_type varchar(20) default('ADMIN')
);

show tables;

insert into user(email, passwd, user_type) values
('Gabi.Caramujo@gmail.com',sha1 ('nhip#qv'),null),
--gabiujo
('Milena.FeliseBelo@gmail.com',sha1 ('tpslth'),null),
--milema
('Laila.casei.maiscedo@gmail.com',sha1 ('shpshjhzhkh'),null),
--lailacasada
('Marcola@gmail.com',sha1 ('thyjvspuoh'),null),
--marcolinha

select * from user;
-- +7 a/z@#%*&$ 