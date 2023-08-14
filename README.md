# Use Docker to setup this proyect run this script
```
docker compose up
```

URL: http://localhost:6200/employee-list

#This project will execute this script to insert some data in the database, just to get some default data.
``` insert into deparments( description)
values ('Finances'),
 ('IT'),
 ('Human Resource');


insert into employees (first_name, last_name, hire_date, phone, deparment_id, address)
 values ('Jason', 'Hernandez', '20150106',  '32376666', 1, 'San Pedro Sula, colonia San Jose de Sula')
 ,('Laura', 'Aguilar', '20130516', '99011756', 2,'La Ceiba Barrio Indenpenencia')
 ,('Dianna', 'Buezo', '20200320', '98213421', 3,'Tegucigalpa Colonia Kenedy')
```
