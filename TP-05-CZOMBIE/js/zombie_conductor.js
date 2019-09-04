/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMovX, direccion) {
  /* Completar constructor a partir de Enemigo */

    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMovX);
    this.direccion = direccion;
  }
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */


/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
   
  if (this.direccion == "h") {
    this.x -= this.velocidad;
 /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  
    if (this.x < this.rangoMovX) {
      this.velocidad *= -1;
    
    }

    if (this.x > Juego.anchoCanvas) {
      this.velocidad *= -1;
 
    }
  }

  if (this.direccion == "v") {
    this.y += this.velocidad; 
    
     
    if (this.y < this.rangoMovX) {
      this.velocidad *= -1;  
    }

    if (this.y > Juego.altoCanvas) {
      this.velocidad *= -1;
    }
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  //if ((this.y < this.rangoMovY)) {
    //this.y = this.rangoMovY + (this.rangoMovY - this.rangoMovY)/2;
}

