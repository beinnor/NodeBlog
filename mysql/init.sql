USE `NodeBlog_db`;

CREATE TABLE `Posts` (
  `PostId` int NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Body` text,
  PRIMARY KEY (`PostId`)
); 

INSERT INTO `Posts` (`PostId`, `Title`, `Updated`, `Body`) VALUES
(1,	'First post!',	'2022-02-13 20:09:13',	'This is the first post. How awesome!'),
(2,	'Today I made a webapp',	'2022-02-13 20:09:49',	'It\'s the next facebook'),
(3,	'Hello World',	'2022-02-13 20:10:52',	'This works');