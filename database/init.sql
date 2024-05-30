-- Active: 1711168995727@@127.0.0.1@3306@daily_app

DROP DATABASE IF EXISTS daily_app;

SET GLOBAL max_allowed_packet = 16777216;

CREATE DATABASE
    daily_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE daily_app;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` int(11) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `role_id` int NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` enum('admin','manager','user') NOT NULL DEFAULT 'user',
    PRIMARY KEY (`id`)
);
CREATE TABLE `spend_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `image` longtext,
  `price` DOUBLE NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `spends` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` double NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `decription` VARCHAR(255) DEFAULT NULL,
  `user_id` int NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `spend_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `spend_id` int NOT NULL,
  `spend_type_id` int NOT NULL,
  `price` double NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `daily_notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `cycles` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int NOT NULL,
    PRIMARY KEY (`id`)
);


ALTER TABLE `spends`
  ADD
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `spend_items`
  ADD
  FOREIGN KEY (`spend_id`) REFERENCES `spends` (`id`);
ALTER TABLE `spend_items`
  ADD
  FOREIGN KEY (`spend_type_id`) REFERENCES `spend_types` (`id`);

ALTER TABLE `daily_notifications`
  ADD
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `notes`
  ADD 
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users`
  ADD 
  FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

