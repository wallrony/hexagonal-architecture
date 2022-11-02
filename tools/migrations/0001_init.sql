create database myrestaurant;

\ c myrestaurant;

create table accounts (
  id serial primary key,
  name varchar(60),
  birth_date date,
  cpf varchar(11)
);

create table foods (
  id serial primary key,
  name varchar(60),
  price decimal
);

create table demands (
  id serial primary key,
  account_id integer,
  created_at timestamp default NOW(),
  CONSTRAINT demand_account_fk FOREIGN KEY (account_id) references accounts (id)
);

create table demand_foods (
  demand_id integer,
  food_id integer,
  CONSTRAINT demand_fk FOREIGN KEY (demand_id) references demands (id),
  CONSTRAINT food_fk FOREIGN KEY (food_id) references foods (id)
);