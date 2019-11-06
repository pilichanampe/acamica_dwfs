-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tarea` (
  `idTarea` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(150) NOT NULL DEFAULT 'descripcion',
  `estado` VARCHAR(45) NOT NULL DEFAULT 'nnull',
  `prioridad` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idTarea`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`agenda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`agenda` (
  `idAgenda` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `tarea_idTarea` INT NULL,
  PRIMARY KEY (`idAgenda`),
  INDEX `fk_agenda_table1_idx` (`tarea_idTarea` ASC) VISIBLE,
  CONSTRAINT `fk_agenda_table1`
    FOREIGN KEY (`tarea_idTarea`)
    REFERENCES `mydb`.`tarea` (`idTarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
