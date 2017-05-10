
CREATE DATABASE ProductosCompras;

use ProductosCompras;
create table Usuario (
  id varchar(20) not null primary key,
  clave varchar(20),
  tipo integer
);

create table Cliente (
 id  varchar(20) not null primary key,
 nombre varchar(30),
 correo varchar(30),
 direccion_envio varchar(30),
 telefono varchar(10)
);

alter table Cliente
  add constraint foreign key (id) references  Usuario (id);

create table Compra (
 cliente varchar(20),
 numero integer auto_increment not null primary key,
 fecha date,
 direccion_envio varchar(30),
 total float,
 tarjeta varchar(12),
 vencimiento date
);

alter table Compra
  add constraint foreign key (cliente) references  Cliente (id);

create table Producto (
       codigo  varchar(10)  not null,
       descripcion varchar(30) not null, 
	   precio int,
       Primary Key (codigo)         
     );

 create table Categoria (
   codigo  varchar(10)  not null,
   descripcion varchar(30) not null, 
   Primary Key (codigo)         
 );

 create table Producto_Categoria (
   producto  varchar(10)  not null,
   categoria  varchar(10)  not null,
   Primary Key (producto,categoria)         
 );

ALTER TABLE Producto_Categoria ADD Foreign Key (producto) REFERENCES Producto(codigo);
ALTER TABLE Producto_Categoria ADD Foreign Key (categoria) REFERENCES Categoria(codigo);

create table Detalle(
 compra integer not null,
 producto varchar(10) not null,
 precio float,
 cantidad integer
);

alter table Detalle add constraint primary key (compra,producto);
alter table Detalle add constraint foreign key (compra) references  Compra(numero);
alter table Detalle add constraint foreign key (producto) references  Producto(codigo);

insert into Usuario (id,clave,tipo) values ('001','001', 1);
insert into Usuario (id,clave,tipo) values ('002','002', 1);
insert into Usuario (id,clave,tipo) values ('003','003', 2);

insert into Cliente (id,nombre,correo,direccion_envio,telefono) values ('001', 'Juan','juan@compradores.com','Alajuela','111-1111');
insert into Cliente (id,nombre,correo,direccion_envio,telefono) values ('002', 'Maria','maria@lossuper.com','Heredia','222-2222');

insert into Producto (codigo,descripcion,precio) values("001","Computadora HP All in One",120);
insert into Producto (codigo,descripcion,precio) values("002","Intel Classmate ",75);
insert into Producto (codigo,descripcion,precio) values("011","Impresora Epson",120);
insert into Producto (codigo,descripcion,precio) values("101","Bicicleta Orbea",80);
insert into Producto (codigo,descripcion,precio) values("102","Bicicleta Coppel",80);

insert into Categoria (codigo ,descripcion) values("0","Promocion");
insert into Categoria (codigo ,descripcion) values("1","Computadoras");
insert into Categoria (codigo ,descripcion) values("2","Impresoras");
insert into Categoria (codigo ,descripcion) values("3","Bicicletas");

insert into Producto_Categoria (producto,categoria) values("001","1");
insert into Producto_Categoria (producto,categoria) values("002","0");
insert into Producto_Categoria (producto,categoria) values("002","1");
insert into Producto_Categoria (producto,categoria) values("011","2");
insert into Producto_Categoria (producto,categoria) values("101","0");
insert into Producto_Categoria (producto,categoria) values("101","3");
insert into Producto_Categoria (producto,categoria) values("102","3");
