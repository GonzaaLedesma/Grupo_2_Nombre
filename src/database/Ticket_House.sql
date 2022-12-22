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

-- Volcando estructura para tabla ticket_house.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.categorias: ~4 rows (aproximadamente)
INSERT INTO `categorias` (`id`, `nombre`) VALUES
	(1, 'Actuales'),
	(2, 'Nuevos'),
	(3, 'Proximos'),
	(4, 'Pasados');

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
  `descripcion` varchar(255) NOT NULL,
  `biografia` varchar(255) NOT NULL,
  `foto_evento` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.eventos: ~23 rows (aproximadamente)
INSERT INTO `eventos` (`id`, `nombre_evento`, `fecha`, `id_categoria`, `ubicacion`, `sede`, `capacidad_sede`, `precio`, `participacion`, `horario`, `descripcion`, `biografia`, `foto_evento`) VALUES
	(1, 'The Weezer', '2022-10-22', 1, 'Los Angeles', '(Disney Concert Hall)', 100000, 7000, 'OneRepublic, Halsey y mas', '19:00:00', 'Los legendarios rockeros Weezer reimaginan su último álbum más los clásicos con la Orquesta Filarmónica de Los Ángeles. Grabado y capturado en el imponente Disney Hall. Disponible para VOD ahora.', 'Weezer es una banda estadounidense de rock alternativo y power pop formada en Los Ángeles, California en 1992. La banda ha lanzado nueve álbumes y vendido más de 10 millones de álbumes en los EE. UU.', 'Weezer.jpg'),
	(2, 'Foo Fighters', '2022-10-12', 1, 'Praga', '(Gran Estadio Strahov)', 60000, 32000, 'Guns N Roses, U2 y Bon Jovi', '14:00:00', 'La banda de rock estadounidense Foo Fighters ofreció el primero de dos conciertos en homenaje a su difunto baterista Taylor Hawkins.', 'La banda Foo Fighters se formó en 1994 en Seattle, EEUU. Es una banda de rock alternativo fundada por el ex-batería de Nirvana: Dave Grohl. El grupo actualmente está formado por Pat Smear, Nate Mendel, Taylor Hawkins, Chris Shiflett y Rami Jaffee.', 'FooFighters.jpg'),
	(3, 'Sam Fender', '2022-10-30', 1, 'Columbus, Ohio', '(Estadio de Ohio)', 80000, 10000, 'George Strait y Beyonce', '09:00:00', 'Después de un mes de descanso en donde pudo recuperar su voz presenta sus mejores hits! That Sound, Hypersonic Missiles, Play God, Dead Boys', 'Samuel Thomas Fender, conocido artísticamente como Sam Fender, es un cantante, compositor, músico y actor inglés. Luego de haber tenido una corta carrera como actor, probó suerte como cantante, lanzando varios sencillos de manera independiente, hasta que ', 'SamFender.jpg'),
	(4, 'The Story So Far', '2022-10-24', 1, 'Beijing', '(Estadio Nacional de Beijing)', 40000, 17000, 'Ed Sheeran', '22:00:00', 'The Story So Far se presenta con nuevas canciones y algunos de sus éxitos más grandes.', 'The Story So Far es una banda de rock procedente de Walnut Creek, California. Se formó en 2007 y ha lanzado cinco álbumes de estudio hasta la fecha.', 'TheStorySoFar.jpg'),
	(5, 'One Republic', '2022-10-25', 1, 'Belo Horizonte, Brasil', '(Mineirão)', 50000, 20000, 'Kiss, Beyonce y John Mayer', '21:00:00', 'Después del rotundo éxito de sus dos primeros sencillos, Apologize y Stop and Stare, la banda presentara su nuevo album Human los temas publicados hasta el momento han tenido una gran acogida.', 'El grupo de Colorado Springs, fundado por Ryan Tedder y Zach Filkins, vio la luz en 2002 convirtiéndose entonces en una de las revelaciones del pop rock indie americano.', 'One-Republic.jpg'),
	(6, 'Maroon 5', '2022-10-30', 1, 'Sydney, Australia', '(Qudos Bank Arena)', 50000, 25000, 'Katy Perry y Jay Chou', '15:00:00', 'Despues de 200 shows en más de 30 países llega Jordi lanzado este anio siendo uno de sus ultimos hist exitoso y presentando Girls Like You.', ' Maroon 5 surgió entre 1994 y 1995 en Los Ángeles, California cuando sus integrantes aún estaban en el colegio. Su primer álbum no tuvo mucho éxito, así que se separaron de la discográfica y continuaron con sus estudios universitarios hasta el 2001.', 'Marron-5.jpg'),
	(8, 'Avril Lavigne', '2022-11-21', 2, 'Bukit Jalil', '(Estadio Nacional Bukit Jalil)', 32000, 6000, 'Head Above Water Tour', '20:00:00', 'Sexta gira de conciertos del artista franco-canadiense Avril Lavigne. La gira es para la promoción de su sexto álbum de estudio, Head Above Water lanzado en febrero de este año.', 'Avril Lavigne (1984) es una cantante, compositora y actriz canadiense. Su nombre completo es Avril Ramona Lavigne. Nació el 27 de septiembre de 1984 en Canadá. Avril Lavigne comenzó su carrera musical en 1999.', 'AvrilLavigne.jpg'),
	(9, 'Machine Gun Kelly', '2022-11-11', 2, 'Londres, Inglaterra', '(Estadio de Wembley)', 90000, 6000, 'Parte de su gira mundial', '19:00:00', 'MGK abrirá el concierto cantando “born with horns”, junto con una sorpresa al inicio del concierto. Es la primera vez que la cantará en vivo. Esa noche, Kelly cantará un total de 33 temas.', 'Colson Baker, más conocido por su nombre artístico Machine Gun Kelly o simplemente Kells, es un músico, rapero, cantante y actor estadounidense. Su nombre artístico fue dado por su flujo lírico de tiro rápido y es una referencia al famoso criminal Machine', 'MGK.jpg'),
	(10, 'Green Day', '2022-12-21', 3, 'Austin, Tx, Us', '(Estadio Hollywood)', 70000, 7000, 'Circuit of the Americas Tour', '19:00:00', 'Se embarcan en una gira de conciertos en Estados Unidos, Japón y parte de Europa para promocionar estos nuevos álbumes.', 'Green Day es una banda estadounidense de rock integrada por Billie Joe Armstrong, Mike Dirnt y Tré Cool. El grupo originario de Berkeley, California, se gestó prematuramente en 1986 bajo el nombre de Sweet Children, con el baterista John Kiffmeyer', 'GreenDay.jpg'),
	(11, 'Paramore', '2022-12-19', 3, 'Río de Janeiro, Brasil', '(Estadio Maracaná)', 80000, 7000, 'Frank Sinatra y Foo Fighters', '19:00:00', 'El 11 de enero de 2022 Paramore dio a conocer que llevan dos meses grabando su sexto álbum y este lo presentarán en Diciembre.', 'Paramore es una banda estadounidense de pop rock y rock alternativo, integrada por Hayley Williams (voz), Taylor York (guitarra) y Zac Farro (batería). Fue formada en Franklin, Tennessee, en 2004.', 'Paramore.jpg'),
	(12, 'Against The Current', '2022-12-12', 3, 'Tilburg, Netherlands', '(Veemarktstraat)', 8000, 18000, 'Britney Spears y Foo Fighters', '19:00:00', 'el grupo programa la salida de su primer álbum, titulado In Our Bones, para el 12 de diciembre junto con sus sencillos mas conocidos Legends Never Die y Wildfire', 'Against the Current, también abreviado con las siglas ATC, es un grupo de pop rock y rock alternativo neoyorquino, formado en 2011. La banda esta conformada por: Chrissy Costanza en la voz principal, Dan Gow como voz secundaria y guitarrista, y Will Ferri', 'AgainstTheCurrent.jpg'),
	(13, 'Catfish and The Bottlemen', '2022-12-28', 3, 'Inglaterra. Manchester', '(Manchester Arena)', 55000, 5000, 'Take That y Britney Spears', '19:00:00', 'El grupo anunció el título de su segundo trabajo (The Ride) a través de Instagram y Twitter el 23 de marzo de este anio y lo presentara en diciembre junto con sencillos como Soundcheck y Longshot. ', 'Catfish and the Bottlemen es una banda de rock galesa formada en 2007 por el actual vocalista y guitarrista de la misma en Llandudno en Gales del Norte. El nombre de la banda tiene su origen en la infancia de McCann (ya que pasó los dos primeros años de s', 'CatfishandTheBottlemen.jpg'),
	(14, 'Bring Me The Horizon', '2022-09-26', 4, 'Seúl, Corea del Sur', '(Olímpico de Seúl)', 0, 0, '---', '00:00:00', '---', '---', 'BMTH.jpg'),
	(15, 'Arctic Monkeys', '2022-09-21', 4, 'George, Washington', '(Anfiteatro Gorge)', 0, 0, '---', '00:00:00', '---', '---', 'ArcticMonkeys.jpg'),
	(16, 'Ed Sheeran', '2022-09-19', 4, 'Bucarest, Rumania', '(Romexpo)', 0, 0, '---', '00:00:00', '---', '---', 'Ed-Sheeran.jpg'),
	(17, 'Twenty One Pilots', '2022-09-13', 4, 'Paris, Francia', '(Paris La Défense Arena)', 0, 0, '---', '00:00:00', '---', '---', 'TOP.jpg'),
	(18, 'Avenged Sevenfold', '2022-12-29', 2, 'George, Washington', '(Anfiteatro Gorge)', 80000, 7000, 'Slipknot y Foo Fighters', '00:00:19', 'La banda nos deleitará con sus canciones mas representativas de todos sus álbumes, como por ejemplo The Stage, City of Evil y Nightmare', 'Avenged Sevenfold comenzó como una banda de género metalcore con su álbum debut Sounding the Seventh Trumpet de 2001 y más tarde con su segundo álbum Waking The Fallen de 2003, en el que The Rev y M. Shadows utilizaron el estilo vocal screaming en muchas ', 'Avenged_Sevenfold_2.jpg'),
	(19, 'Slipknot', '2022-11-10', 2, 'Ohio en Columbus', '(Estadio de Ohio)', 80000, 7000, 'Metallica', '00:00:19', 'Relanzamiento de Bassement Sessions, sólo con cuatro canciones, para ser distribuido gratuitamente por Internet', 'Slipknot es un grupo de metal que nació en Des Moines, Iowa, en 1995. Su sonido, enormemente influyente e imitado, ha sido definido a veces como metal alternativo, heavy metal o rap metal y destaca por mezclar elementos duros propios del death metal y otr', 'Slipknot.jpg'),
	(20, 'Aerosmith', '2022-11-19', 2, 'Beijing', '(Estadio Nacional de Beijing)', 100000, 7000, 'Eminem', '00:00:19', 'Aerosmith continuará la gira por Europa y EE. UU. Se tocara Draw the Line', 'Steven Tyler forma su propia banda llamada The Strangeurs (Más tarde Chain Reaction) con Don Solomon en Nuevo Hampshire. Mientras tanto, Perry y Hamilton forman la banda Jam Band (comúnmente conocida como Joe Perrys Jam Band) basada en el sonido del blues', 'AEROSMITH.jpg'),
	(21, 'Yellowcard', '2022-09-26', 4, 'Beijing', '(Estadio Nacional de Beijing)', 0, 0, '---', '00:00:00', '---', '---', 'Yellowcard.jpg'),
	(22, 'Tokio Hotel', '2022-11-16', 2, 'Sydney, Australia', '(Qudos Bank Arena)', 10000, 10000, 'Avril Lavigne', '10:00:00', 'El 26 de mayo de 2022, la banda lanzó una nueva canción llamada “When we were younger” con fotos desde sus inicios hasta la actualidad, y así recordar que los cuatro integrantes están juntos desde el 2001.', 'Los gemelos Tom y Bill fueron alentados musicalmente por su padrastro Gordon Trümper, guitarrista aficionado. En una aparición en el año 1995 en su ciudad natal, Magdeburgo, Gustav Schäfer y Georg Listing los vieron tocar con teclados en vez de con bajo y', 'tokio.jpg'),
	(23, 'Fall Out Boy', '2022-10-26', 3, 'Los Angeles', '(Disney concerts Hall)', 40000, 7000, 'The Story So Far, Nirvana', '00:00:20', 'Fall Out Boy, tocara su ultimo disco Mania, junto con sus mas famosos hits como por ejemplo the phoenix, Immortals, Dance, Dance y muchos más', 'Fall Out Boy fue formado a principios de 2001 por Joe Trohman y Pete Wentz. Los dos habían tocado en varias bandas del área de Chicago y decidieron que querían iniciar una banda más parecida a las que escuchaban en su infancia y adolescencia, tales como G', 'fall-out-boy.jpg'),
	(24, 'Simple Plan', '2022-11-26', 3, 'Bukit Jalil', '(Estadio Nacional Bukit Jalil)', 10000, 25000, 'Chady Awad', '22:00:00', 'El 15 de marzo de 2022, la banda anunció el lanzamiento de su próximo sexto álbum de estudio, Harder Than It Looks, con el lanzamiento de su nuevo sencillo Congratulations. Su nuevo álbum se lanzó el 15 de Noviembre de 2022.', 'Simple Plan es una banda de rock, canadiense. La banda fue formada en 1999 por Pierre Bouvier Jeff Stinco y Chuck Comeau. Han lanzado seis álbumes de estudio, los mas destacados fueron: No Pads, No Helmets... Just Balls (2002), Still Not Getting Any... (2', 'Simple-Plan.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.evento_genero: ~47 rows (aproximadamente)
INSERT INTO `evento_genero` (`id`, `evento_id`, `genero_id`) VALUES
	(1, 1, 1),
	(2, 1, 3),
	(3, 2, 1),
	(4, 2, 2),
	(5, 2, 4),
	(6, 3, 1),
	(7, 3, 4),
	(8, 3, 5),
	(9, 4, 2),
	(10, 4, 4),
	(11, 4, 5),
	(12, 5, 3),
	(13, 5, 5),
	(14, 6, 3),
	(15, 6, 5),
	(16, 6, 6),
	(17, 8, 5),
	(18, 8, 6),
	(19, 9, 4),
	(20, 9, 5),
	(21, 9, 6),
	(22, 10, 4),
	(23, 11, 4),
	(24, 11, 5),
	(25, 12, 3),
	(26, 12, 5),
	(27, 13, 1),
	(28, 13, 6),
	(29, 14, 2),
	(30, 15, 4),
	(31, 15, 5),
	(32, 16, 3),
	(33, 17, 5),
	(34, 17, 6),
	(35, 18, 2),
	(36, 19, 2),
	(37, 20, 1),
	(38, 20, 2),
	(39, 21, 1),
	(40, 21, 6),
	(41, 22, 5),
	(42, 22, 6),
	(43, 23, 1),
	(44, 23, 2),
	(45, 23, 4),
	(46, 24, 2),
	(47, 24, 4);

-- Volcando estructura para tabla ticket_house.generos
CREATE TABLE IF NOT EXISTS `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.generos: ~6 rows (aproximadamente)
INSERT INTO `generos` (`id`, `nombre`) VALUES
	(1, 'rock'),
	(2, 'hard rock'),
	(3, 'pop'),
	(4, 'rock alternativo'),
	(5, 'pop rock'),
	(6, 'pop punk');

-- Volcando estructura para tabla ticket_house.tipo_usuario
CREATE TABLE IF NOT EXISTS `tipo_usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tipo_usuario_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.tipo_usuario: ~3 rows (aproximadamente)
INSERT INTO `tipo_usuario` (`id`, `usuario_id`, `admin`) VALUES
	(1, 1, 1),
	(3, 2, 1),
	(12, 17, 0);

-- Volcando estructura para tabla ticket_house.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(55) NOT NULL,
  `apellido` varchar(55) NOT NULL,
  `nombre_usuario` varchar(55) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `email` varchar(55) NOT NULL,
  `genero_id_favorito` int(11) NOT NULL,
  `genero` varchar(55) NOT NULL,
  `pais` varchar(55) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `foto_perfil` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id_favorito` (`genero_id_favorito`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`genero_id_favorito`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.usuarios: ~3 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `nombre_usuario`, `contrasenia`, `email`, `genero_id_favorito`, `genero`, `pais`, `descripcion`, `foto_perfil`) VALUES
	(1, 'Gonzalo', 'Ledesma', 'Gonza', '$2a$10$KqimxNV3Mtr8ZFFaXajKSu.kPfSMQQoyR/LYsUEYWjCJqXqdcgdae', 'gonza@admin.com', 1, 'masculino', 'Argentina', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin', 'User-1669397644203.jpg'),
	(2, 'Matias', 'Lanese', 'Mati', '$2a$10$KqimxNV3Mtr8ZFFaXajKSu.kPfSMQQoyR/LYsUEYWjCJqXqdcgdae', 'mati@admin.com', 1, 'masculino', 'Argentina', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin', 'User-1669397644203.jpg'),
	(17, 'Juan Visitantess', 'Juanss', 'Juan', '$2a$10$NJE73tycIm6acJyHTfnHleHt/lYNUp4eqdIO/X1cCVzerKf5HkZUG', 'juan@gmail.com', 1, 'otros', 'Argentina', 'sadasd asdsad asdsa das', 'User-1669397644203.jpg');

-- Volcando estructura para tabla ticket_house.usuario_evento
CREATE TABLE IF NOT EXISTS `usuario_evento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `evento_id` int(11) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `evento_id` (`evento_id`),
  CONSTRAINT `usuario_evento_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `usuario_evento_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.usuario_evento: ~0 rows (aproximadamente)

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla ticket_house.usuario_genero: ~7 rows (aproximadamente)
INSERT INTO `usuario_genero` (`id`, `usuario_id`, `genero_id`) VALUES
	(1, 1, 1),
	(2, 1, 3),
	(3, 2, 1),
	(4, 2, 3),
	(20, 17, 3),
	(21, 17, 5),
	(22, 17, 4);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
