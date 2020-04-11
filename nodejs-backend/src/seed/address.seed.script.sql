-- SQLite
PRAGMA foreign_keys = ON;
DROP TABLE Address;
create table Address (
	Id INT PRIMARY KEY,
	Address VARCHAR(50) NOT NULL,
	CustomerId INT  NOT NULL,
	FOREIGN KEY (CustomerId)
       REFERENCES Customer (id) 
);
insert into Address (Id, Address, CustomerId) values (1, '2 Charing Cross Trail', 1);
insert into Address (Id, Address, CustomerId) values (2, '8 Dennis Drive', 2);
insert into Address (Id, Address, CustomerId) values (3, '7 Bluestem Parkway', 3);
insert into Address (Id, Address, CustomerId) values (4, '877 Mayer Hill', 4);
insert into Address (Id, Address, CustomerId) values (5, '181 Hooker Point', 5);
insert into Address (Id, Address, CustomerId) values (6, '623 Cody Terrace', 6);
insert into Address (Id, Address, CustomerId) values (7, '6696 Sullivan Point', 7);
insert into Address (Id, Address, CustomerId) values (8, '224 Leroy Parkway', 8);
insert into Address (Id, Address, CustomerId) values (9, '2 Dixon Trail', 9);
insert into Address (Id, Address, CustomerId) values (10, '0 Mendota Court', 10);
insert into Address (Id, Address, CustomerId) values (11, '31377 Dixon Parkway', 11);
insert into Address (Id, Address, CustomerId) values (12, '06896 Haas Crossing', 12);
insert into Address (Id, Address, CustomerId) values (13, '34 Walton Street', 13);
insert into Address (Id, Address, CustomerId) values (14, '75720 Petterle Parkway', 14);
insert into Address (Id, Address, CustomerId) values (15, '0066 Tennessee Point', 15);
insert into Address (Id, Address, CustomerId) values (16, '9900 Prairie Rose Point', 16);
insert into Address (Id, Address, CustomerId) values (17, '9208 Garrison Drive', 17);
insert into Address (Id, Address, CustomerId) values (18, '48 Eagle Crest Road', 18);
insert into Address (Id, Address, CustomerId) values (19, '23551 Schmedeman Pass', 19);
insert into Address (Id, Address, CustomerId) values (20, '29981 Portage Lane', 20);
insert into Address (Id, Address, CustomerId) values (21, '21 Forster Park', 21);
insert into Address (Id, Address, CustomerId) values (22, '625 Sullivan Circle', 22);
insert into Address (Id, Address, CustomerId) values (23, '81640 Arrowood Hill', 23);
insert into Address (Id, Address, CustomerId) values (24, '6092 Heffernan Way', 24);
insert into Address (Id, Address, CustomerId) values (25, '7487 Northridge Crossing', 25);
insert into Address (Id, Address, CustomerId) values (26, '633 6th Circle', 26);
insert into Address (Id, Address, CustomerId) values (27, '3 Sugar Street', 27);
insert into Address (Id, Address, CustomerId) values (28, '28259 Shasta Point', 28);
insert into Address (Id, Address, CustomerId) values (29, '57 Hintze Place', 29);
insert into Address (Id, Address, CustomerId) values (30, '62 Pond Park', 30);
insert into Address (Id, Address, CustomerId) values (31, '4758 International Pass', 31);
insert into Address (Id, Address, CustomerId) values (32, '88 Sundown Avenue', 32);
insert into Address (Id, Address, CustomerId) values (33, '0948 Bunker Hill Point', 33);
insert into Address (Id, Address, CustomerId) values (34, '6 Rigney Circle', 34);
insert into Address (Id, Address, CustomerId) values (35, '0 Bultman Place', 35);
insert into Address (Id, Address, CustomerId) values (36, '659 Burning Wood Plaza', 36);
insert into Address (Id, Address, CustomerId) values (37, '332 Westridge Trail', 37);
insert into Address (Id, Address, CustomerId) values (38, '6216 Annamark Parkway', 38);
insert into Address (Id, Address, CustomerId) values (39, '27 Russell Road', 39);
insert into Address (Id, Address, CustomerId) values (40, '44 Glacier Hill Pass', 40);
insert into Address (Id, Address, CustomerId) values (41, '43918 Lakeland Lane', 1);
insert into Address (Id, Address, CustomerId) values (42, '52 Grasskamp Street', 1);
insert into Address (Id, Address, CustomerId) values (43, '51 Rieder Road', 3);
insert into Address (Id, Address, CustomerId) values (44, '34539 Kings Hill', 4);
insert into Address (Id, Address, CustomerId) values (45, '784 Blackbird Plaza', 5);
insert into Address (Id, Address, CustomerId) values (46, '5663 Debs Alley', 6);
insert into Address (Id, Address, CustomerId) values (47, '0 Division Lane', 7);
insert into Address (Id, Address, CustomerId) values (48, '7 Calypso Trail', 8);
insert into Address (Id, Address, CustomerId) values (49, '21747 Ridge Oak Hill', 9);
insert into Address (Id, Address, CustomerId) values (50, '2928 Corscot Road', 10);
insert into Address (Id, Address, CustomerId) values (51, '472 Blaine Road', 11);
insert into Address (Id, Address, CustomerId) values (52, '781 Jana Alley', 22);
insert into Address (Id, Address, CustomerId) values (53, '64275 Hovde Road', 1);
insert into Address (Id, Address, CustomerId) values (54, '3 Nobel Place', 4);
insert into Address (Id, Address, CustomerId) values (55, '41 Lukken Drive', 2);
insert into Address (Id, Address, CustomerId) values (56, '2266 Coolidge Park', 6);
insert into Address (Id, Address, CustomerId) values (57, '9221 Harper Hill', 7);
insert into Address (Id, Address, CustomerId) values (58, '88 Clemons Trail', 8);
insert into Address (Id, Address, CustomerId) values (59, '31257 Moose Alley', 9);
insert into Address (Id, Address, CustomerId) values (60, '37 Oak Way', 16);