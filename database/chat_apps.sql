create database chat_application;
use chat_application;

CREATE TABLE `users`  (
  `id`          int NOT NULL AUTO_INCREMENT,
  `username`    VARCHAR(255) NOT NULL, 
  `password`    VARCHAR(255) NOT NULL, 
  PRIMARY KEY (`id`)
);

CREATE TABLE `chats`  (
  `id`              int NOT NULL AUTO_INCREMENT,
  `sender_id`		int,
  `receiver_id`		int,
  `text`			varchar(255),
  `created_at`  	datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  foreign key (`sender_id`) references `users`(`id`),
  foreign key (`receiver_id`) references `users`(`id`)
);

CREATE TABLE `photoTable`  (
  `id`            int,
  `foto`			    varchar(255),
  `created_at`  	datetime NOT NULL DEFAULT current_timestamp(),
  foreign key (`id`) references `users`(`id`)
); 
