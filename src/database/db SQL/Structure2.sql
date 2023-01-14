-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.25-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.2.0.6576
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para ticket_house
CREATE DATABASE IF NOT EXISTS `ticket_house` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ticket_house`;

-- Volcando estructura para tabla ticket_house.carrito
CREATE TABLE IF NOT EXISTS `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `evento_id` int(11) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 0,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `evento_id` (`evento_id`),
  CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.eventos
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_evento` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `sede` varchar(100) NOT NULL,
  `capacidad_sede` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `participacion` varchar(100) NOT NULL,
  `horario` time NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `biografia` varchar(500) NOT NULL,
  `foto_evento` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.evento_genero
CREATE TABLE IF NOT EXISTS `evento_genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `evento_id` int(11) DEFAULT NULL,
  `genero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `evento_id` (`evento_id`),
  KEY `genero_id` (`genero_id`),
  CONSTRAINT `evento_genero_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`id`),
  CONSTRAINT `evento_genero_ibfk_2` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.generos
CREATE TABLE IF NOT EXISTS `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.tipo_usuario
CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tipo_usuario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(55) NOT NULL,
  `apellido` varchar(55) NOT NULL,
  `nombre_usuario` varchar(55) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `email` varchar(55) NOT NULL,
  `genero_id_favorito` int(11) NOT NULL,
  `identidad_de_genero` varchar(55) NOT NULL,
  `pais` varchar(55) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `foto_perfil` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id_favorito` (`genero_id_favorito`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`genero_id_favorito`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ticket_house.usuario_genero
CREATE TABLE IF NOT EXISTS `usuario_genero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `genero_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `genero_id` (`genero_id`),
  CONSTRAINT `usuario_genero_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `usuario_genero_ibfk_2` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
