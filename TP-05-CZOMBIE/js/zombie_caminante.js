/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */

var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMovX, rangoMovY) {
  /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMovX, rangoMovY);
}
/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */
ZombieCaminante.prototype = Object.create(Enemigo.prototype);
ZombieCaminante.prototype.constructor = ZombieCaminante;

ZombieCaminante.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad;
    
  } else {
    //Sino, hace otro movimiento
    this.y += this.velocidad;
    this.x -= this.velocidad;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMovX || this.y < this.rangoMovX)) {
    this.velocidad *= -1;
   
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.x > Juego.anchoCanvas || this.y > Juego.altoCanvas)) {
    this.velocidad *= -1;
    //this.velocidad = this.rangoMovY;
    //this.y = this.rangoMovY + (this.rangoMovY - this.rangoMovY)/2;
  }
}

/* El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar
haciendole perder 1 vida al jugador. Si se quiere modificar el valor de ataque
del zombie caminante habra que reimplementar este metodo desde el objeto ZombieCaminante

ZombieConductor.prototype.atacar = function(jugador) {
  ...
}*/
