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

insert into user (email, passwd, user_type) values
    ('naoconhecomusica@gmail.com', SHA1('senha'), NULL),
    ('babyshark@gmail.com', SHA1('abril'), NULL),
    ('tercadetarde@gmail.com', SHA1('cacetada'), NULL),
    ('depoisdeamanha@gmail.com', SHA1('carambolha'), 'COMUM'),
    ('assimvai@gmail.com', SHA1('cocada'), NULL),
    ('amamentar@gmail.com', SHA1('poxavida'), NULL),
    ('Luaiso@gmail.com', SHA1('caracas'), 'COMUM');


select * from user;

