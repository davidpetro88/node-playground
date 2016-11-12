# Bookshelf-poc

### Download dependencies
npm install

### create database 
```
CREATE DATABASE app_bookshelf
```

### Create tables

```
USE app_bookshelf

CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1; 

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `street` varchar(45) DEFAULT NULL,
  `person_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_1_idx` (`person_id`),
  CONSTRAINT `fk_address_1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/

```

### Start project
npm start

### Get all forge()
GET -> http://localhost:3000/ <br>
Response
```
 {
   "code": 200,
   "data": [
     {
       "id": 1,
       "name": "David Petro",
       "age": 27
     },
     {
       "id": 2,
       "name": "David Abraao",
       "age": 27
     }
   ]
 }
 ```
 
### Get by id with one to one
GET -> http://localhost:3000/1 <br>
Body Response
```
 {
   "code": 200,
   "data": {
     "id": 1,
     "name": "David Petro",
     "age": 27,
     "address": {
       "id": 1,
       "street": "Teste",
       "person_id": 1
     }
   }
 }
 ```
### Save new user
POST -> http://localhost:3000/ <br>
Body 
 ```
 {
   "name":"new user",
   "age":20
 }
 ```
 Body Response
```
 {
   "code": 200,
   "data": {
     "name": "new user",
     "age": 20,
     "id": 4
   }
 }
``` 

### Edit user
PUT -> http://localhost:3000/4 <br>
Body
```
 {
   "name":"new user edit",
   "age":20
 }
 ```
 Body Response
```
 {
   "code": 200,
   "data": {
     "name": "new user edit",
     "age": 20,
     "id": 4
   }
 }
```
 
### Delete user
DELETE -> http://localhost:3000/4 <br>

 
 
