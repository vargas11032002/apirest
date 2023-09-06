CREATE DATABASE IF NOT EXISTS companydb;

 use companydb;

 CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
 );
 
insert into employee VALUES
(1,'jose',1000),
(2,'maria',1500),
(3,'eduardo',2000),
(4,'yineth',2500);