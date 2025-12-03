<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
CREATE DATABASE IF NOT EXISTS `auth`;
USE `auth`;

CREATE TABLE `users` (
  `id` INT(9) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `verified` TINYINT(1) DEFAULT 0,
  `verify_token` VARCHAR(100) DEFAULT NULL,
  `role` VARCHAR(20) DEFAULT 'user',
  PRIMARY KEY (`id`)
);

CREATE TABLE `user_sessions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `login_time` DATETIME NOT NULL,
  `logout_time` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT FK_sessions_user
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
    ON UPDATE CASCADE ON DELETE CASCADE
);
<<<<<<< HEAD
=======
=======
CREATE DATABASE IF NOT EXISTS `auth`;
USE `auth`;

CREATE TABLE `users` (
  `id` INT(9) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `verified` TINYINT(1) DEFAULT 0,
  `verify_token` VARCHAR(100) DEFAULT NULL,
  `role` VARCHAR(20) DEFAULT 'user',
  PRIMARY KEY (`id`)
);

CREATE TABLE `user_sessions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `login_time` DATETIME NOT NULL,
  `logout_time` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT FK_sessions_user
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
    ON UPDATE CASCADE ON DELETE CASCADE
);
>>>>>>> 077125945804a39eb25db9e7e35c7106b3fe620b
>>>>>>> f24186366f458676c6652a067842fc4cfa3ebaea
