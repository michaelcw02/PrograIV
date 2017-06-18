CREATE DATABASE Questions;

use Questions;
create table Usuario(
  id varchar(20) not null primary key,
  clave varchar(20),
  tipo integer
);

create table Question(
  id integer auto_increment not null primary key,
  questionname varchar(40),
  topic varchar(20)
);

create table Answer(
  id integer auto_increment not null primary key,
  answername varchar(30) not null,
  idQuestion integer
);
ALTER TABLE Answer ADD Foreign Key(idQuestion) REFERENCES Question(id);

create table UserQuestion(
  idUser varchar(20),
  idQuestion integer,
  idAnswer integer,
  Primary Key(idUser, idQuestion)
);
ALTER TABLE UserQuestion ADD Foreign Key(idUser) REFERENCES Usuario(id);
ALTER TABLE UserQuestion ADD Foreign Key(idQuestion) REFERENCES Question(id);
ALTER TABLE UserQuestion ADD Foreign Key(idAnswer) REFERENCES Answer(id);

create table QuestionAnswer(
  idQuestion integer,
  idAnswer integer,
  Primary Key(idQuestion, idAnswer)
);
ALTER TABLE QuestionAnswer ADD Foreign Key(idQuestion) REFERENCES Question(id);
ALTER TABLE QuestionAnswer ADD Foreign Key(idAnswer) REFERENCES Answer(id);


insert into Usuario(id, clave, tipo) values('guest', 'guest', 1);
insert into Usuario(id, clave, tipo) values('student', 'student', 1);
insert into Usuario(id, clave, tipo) values('admin', 'admin', 2);

insert into Question(questionname, topic) values('What is java?', 'Prog. Lang.');
insert into Question(questionname, topic) values('Not Object Oriented', 'Prog. Lang.');
insert into Question(questionname, topic) values('An example of a database server?', 'Data Bases');

insert into Answer(answername, idQuestion) values('A programming language', 1);
insert into Answer(answername, idQuestion) values('A scripting language', 1);
insert into Answer(answername, idQuestion) values('A animation language', 1);

insert into Answer(answername, idQuestion) values('C++', 2);
insert into Answer(answername, idQuestion) values('C', 2);
insert into Answer(answername, idQuestion) values('Java', 2);

insert into Answer(answername, idQuestion) values('Android', 3);
insert into Answer(answername, idQuestion) values('MySql', 3);
insert into Answer(answername, idQuestion) values('Linux', 3);

insert into QuestionAnswer(idQuestion, idAnswer) values(1, 1);
insert into QuestionAnswer(idQuestion, idAnswer) values(2, 5);
insert into QuestionAnswer(idQuestion, idAnswer) values(3, 8);