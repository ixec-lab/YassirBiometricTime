CREATE DATABASE `abc_school`;
USE `abc_school`;

CREATE TABLE `abc_school`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `uuid` varchar(36) NOT NULL UNIQUE,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `token` VARCHAR(100) NOT NULL,
  `dateCreated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  `department` VARCHAR(100) NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;


CREATE TABLE `abc_school`.`checks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employee` INT NOT NULL,
  `checkdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type`ENUM('IN','OUT') NOT NULL,
  `comment` TEXT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`employee`) REFERENCES employees(`id`)
) ENGINE = InnoDB;

CREATE TABLE `abc_school`.`working_time` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employee` INT NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time` TIME NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`employee`) REFERENCES employees(`id`)
) ENGINE = InnoDB;


INSERT INTO employees(uuid,first_name,last_name,token,department) VALUES ('aaa-bbb-111','Meghnine','Islem','1999','Informatics');
INSERT INTO employees(uuid,first_name,last_name,token,department) VALUES ('ccc-ddd-222','Meghnine','Zakaria','1234','Informatics');
