/* 
Database에 Table들을 만들고 Value들을 추가하는 방법 예제다.
*/

/* ! User Table */
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) not NULL,
  `email` varchar(255) not NULL
);

/* ! Content Table */
CREATE TABLE `content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) not NULL,
  `body` varchar(255) not NULL,
  `created_at` timestamp not NULL DEFAULT CURRENT_TIMESTAMP
);

/* Edit Table */
ALTER TABLE `content` ADD userId int;
ALTER TABLE `content` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

/* ! Category Table */
CREATE TABLE `category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) not NULL
);

/* ! Content_Category Table */
CREATE TABLE `content_category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `contentId` int NOT NULL, 
  `categoryId` int NOT NULL
);

/* Edit Table */
ALTER TABLE `content_category` ADD FOREIGN KEY (`contentId`) REFERENCES `content` (`id`);
ALTER TABLE `content_category` ADD FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

/* ! Role Table */
CREATE TABLE `role` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) not NULL
);

/* Edit Table */
ALTER TABLE `user` ADD roleId int;
ALTER TABLE `user` ADD FOREIGN KEY (`roleId`) REFERENCES `role` (`id`);