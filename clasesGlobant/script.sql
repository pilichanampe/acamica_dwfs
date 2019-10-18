CREATE DATABASE agendita;
USE agendita;
CREATE TABLE tarea (
  idTarea INT PRIMARY KEY AUTO_INCREMENT,
  descripcion VARCHAR(100) NOT NULL,
  prioridad INT(1) NOT NULL,
  estado TINYINT
);
INSERT INTO tarea (
  descripcion,
  prioridad,
  estado
) VALUES (
    ('Hacer las compras', 1, 1),
    ('Ir al gimnasio', 5, null),
    ('Ir a Acamica', 1, 0)
);
  

CREATE TABLE
  agenda (
    idAgenda INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    idTarea INT NOT NULL,
    FOREIGN KEY(idTarea) REFERENCES tarea(idTarea)

  );