
create table user_level(
    IdUserLevel int not null AUTO_INCREMENT,
    Name varchar(30),
    PRIMARY KEY(IdUserLevel)
)

create table user(
    IdUser int not null AUTO_INCREMENT,
    Name varchar(30),
    Surname varchar(50),
    Email varchar(50),
    password varchar(50),
    Fnac date,
    Rut varchar(15),
    Phone int,
    UserLevelID int,
    FOREIGN KEY(UserLevelID) REFERENCES user_level(IdUserLevel),
    PRIMARY KEY(IdUser)
)

create table event_type(
    IdEventType int not null AUTO_INCREMENT,
    Name varchar(30),
    PRIMARY KEY(IdEventType)
)

create table event_state(
    IdEventState int not null AUTO_INCREMENT,
    Name varchar(30),
    PRIMARY KEY(IdEventState)
)

create table event(
    IdEvent int not null AUTO_INCREMENT,
    Name varchar(30),
    LocationName varchar(30),
    Date datatime,
    Price int,
    Description varchar(300),
    Image varchar(200),
    CoordLat varchar(50),
    CoordLng varchar(50),
    TypeId int,
    UserCreatorId int,
    StateId int,
    FOREIGN KEY(TypeId) REFERENCES event_type(IdEventType),
    FOREIGN KEY(UserCreatorId) REFERENCES user(IdUser),   
    FOREIGN KEY(StateId) REFERENCES event_state(IdEventState),
    PRIMARY KEY(IdEvent)
)

Create table revision (

    IdRevision int not null AUTO_INCREMENT,
    Revision varchar(300),
    EventId int,
    PRIMARY KEY(IdRevision)

)


insert into user VALUES (null, 'Salomod', 'Mod', 'salomod@encuentralo.cl','admin',2001-11-28,209205599,9123456789,1)
insert into event_type values (null, 'Concierto'), (null, 'Expo'), (null,'Deportivo'), (null,'Culturales'), (null,'Fiestas Masivas'), (null,'Ferias Libres'),(null,'Gastrónomicos')
insert into user_level values (null, 'admin'),(null, 'normal'),(null, 'inhabilitado')
insert into event_state values (null,'pendiente'),(null,'aceptado'),(null,'rechazado'),(null,'Pendiente de pago'),(null,'Pendiente de cambios')