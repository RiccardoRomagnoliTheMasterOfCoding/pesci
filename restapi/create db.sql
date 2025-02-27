create table Clients(
ID int primary key identity(1, 1),
Name varchar(50) not null,
Email varchar(50) unique,
SignUpDate Date,
Salt char(32) not null,
HashedPassword char(64) not null,
Role varchar(16) not null,
PfpUrl varchar(255),
constraint UQ_Salt unique (Salt)
);

create table Catalog(
ID int primary key identity(1, 1),
Name varchar(50) not null,
Water varchar(15) not null,
Colors varchar(255) not null,
Length smallint not null,
ImageUrl varchar(255),
Price int not null
);

insert into Clients (Name, Email, SignUpDate, Salt, HashedPassword, Role, PfpUrl)
values
	('Pine Daniels', 'pine@daniels.com', '2024-01-05', '78148bfb42d4e6631806015c841bbc90', '25d7b3800b567f8305c1a3846abbb51200fdedc84f985f925cee7293d34e5bec', 'admin', 'https://i.redd.it/fat-tux-i-created-this-simple-tux-logo-for-fun-v0-w9zk1c24wgz91.png?auto=webp&s=78ae0dec3e65420a44af1ad983f9b708b3efb73f'),
	('Juan Popepeter', 'juan@pope.com', '2025-06-09', 'b10d66715f9bbfd8a709bad102f67088', 'd71288910ad1b9598629b04e956a6197ca660a27bdf40f8642a71f475033e217', 'user', 'https://i.imgflip.com/5c4mhi.jpg');

insert into Catalog (Name, Water, Colors, Length, ImageUrl, Price)
values
	('Pesce angelo', 'saltwater', 'blue, yellow, light blue', 15, 'https://misanimales.com/wp-content/uploads/2021/06/pez-angel-reina-amarillo.jpg', 30),
	('Pesce pagliaccio', 'saltwater', 'orange, white', 10, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg/960px-Amphiprion_ocellaris_%28Clown_anemonefish%29_Nemo.jpg', 40),
	('Pesce pietra', 'saltwater', 'orange, black', 24, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stone_Fish_at_AQWA_SMC2006.jpg/959px-Stone_Fish_at_AQWA_SMC2006.jpg', 42),
	('Pesce pappagallo', 'saltwater', 'light blue, pink', 100, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bicolor_parrotfish.JPG/640px-Bicolor_parrotfish.JPG', 69);