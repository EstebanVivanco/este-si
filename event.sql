-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2022 a las 22:11:50
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `eventos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event`
--

CREATE TABLE `event` (
  `IdEvent` int(11) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `LocationName` varchar(30) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Image` varchar(200) DEFAULT NULL,
  `CoordLat` varchar(50) DEFAULT NULL,
  `CoordLng` varchar(50) DEFAULT NULL,
  `TypeId` int(11) DEFAULT NULL,
  `UserCreatorId` int(11) DEFAULT NULL,
  `StateId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `event`
--

INSERT INTO `event` (`IdEvent`, `Name`, `LocationName`, `Date`, `Price`, `Description`, `Image`, `CoordLat`, `CoordLng`, `TypeId`, `UserCreatorId`, `StateId`) VALUES
(7, 'Fiesta Aniversario Rancaguino', 'Parque Comunal', '2022-10-29', 0, 'Fiesta de celebración del aniversario de Rancagua con variedad de artistas invitados, food trucks y ferias de emprendedores.', '147ac125-fc04-4857-99a9-7fcaae5e0af8.jpg', '-34.168635904722734', '-70.72216987609865', 5, 1, 2),
(8, 'Freaklands', 'Open Plaza Rancagua', '2022-10-31', 3990, 'Feria de emprendedores y Concurso de cosplays orientado a la cultura japonesa', 'eabcb68f-a7df-4524-babf-f56bf4a0a0b4.jpg', '-34.16913301031389', '-70.74092388153078', 2, 2, 2),
(9, 'WARHAMMER OVER SOUTH AMERICA', 'Golden Bar', '2022-11-14', 9990, 'Banda tributo presenta los mejores éxitos de WARHAMMER ', '7229c5e7-7698-4bde-bd0d-8496bdb902b9.jpg', '-34.166221350207444', '-70.73219060897829', 1, 1, 3),
(10, 'MOB PSYCHO WATCH PARTY', 'Casa de la cultura', '2022-11-20', 9990, 'Watchparty temporada 3 alo si alo', '5f125bb1-c7ac-4b59-9f46-1bfc11abd79d.jpg', '-34.17445895791768', '-70.74113845825197', 5, 2, 2),
(11, 'Exposición de pinturas', 'Casa de la cultura', '0000-00-00', 9990, 'AAAAAAAAAAAAAAAAAAAAAAAA', '2a4ea075-28e1-4068-8fff-02d256bd30f0.jpg', '-34.175328830761394', '-70.74169635772706', 4, 1, 4),
(12, 'Venta de garage', 'Mi casa', '2022-12-04', 1000, 'Venta de todo alo', '5c4e5dc8-9478-4f21-80ed-c2521fc3ed70.jpg', '-34.18170170726633', '-70.7102394104004', 7, 1, 4),
(13, 'hola buenas', 'queral', '2022-10-20', 2000, 'QUEEEEEEEEEEE', '615d9781-93fe-455e-9d97-89968ae02bbd.jpg', '-34.173180761144984', '-70.77512741088869', 1, 9, 1),
(14, 'dsasdasd', 'dasda', '2020-02-20', 1231, 'qadasd', 'a9e5e4ce-a43f-4db7-b70d-7a7a9343dc05.jpg', '-34.15741474260415', '-70.63728332519533', 3, 9, 1),
(16, 'ALOALO', 'ALOKK', '2022-12-20', 9990, 'ALO', '9e27c65e-2f47-47c4-91a4-d7d326b6cba0.jpg', '-34.16593728042962', '-70.73204040527345', 6, 9, 2),
(17, 'aloalo', 'kakakak', '2022-12-20', 0, 'hola que tal', '8ec27257-708b-4eae-859e-1343f0326817.jpg', '-34.167073553805295', '-70.72568893432619', 9, 9, 2),
(18, 'Fauna Primavera', 'Movistar Arena', '2022-11-20', 47990, 'Evento de música con más de 3 escenarios', 'd1e43894-473a-42d6-a445-2e33c892b762.jpg', '-34.17247064346156', '-70.73804855346681', 1, 9, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`IdEvent`),
  ADD KEY `TypeId` (`TypeId`),
  ADD KEY `UserCreatorId` (`UserCreatorId`),
  ADD KEY `StateId` (`StateId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `event`
--
ALTER TABLE `event`
  MODIFY `IdEvent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`TypeId`) REFERENCES `event_type` (`IdEventType`),
  ADD CONSTRAINT `event_ibfk_2` FOREIGN KEY (`UserCreatorId`) REFERENCES `user` (`IdUser`),
  ADD CONSTRAINT `event_ibfk_3` FOREIGN KEY (`StateId`) REFERENCES `event_state` (`IdEventState`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
