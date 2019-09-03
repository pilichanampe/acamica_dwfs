/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
}

Obstaculo.prototype.setPotencia = function (potencia) {
  return this.potencia = potencia;//CHEQUEAR, NO ESTA BIEN
}


Obstaculo.chocarJugador = function() {
  Jugador.perderVidas(1);
 // this.perderPotencia(1);
  

}

/*
Obstaculo.perderPotencia = function(cantPotencia) {
    alert("estoy en perder potencia");
    alert(this.potencia);    
    this.potencia = this.potencia - cantPotencia;   
}*/

Obstaculo.perderPotencia = function(obstaculo) {
 obstaculo.potencia = obstaculo.potencia - 1;   
}

//Obstaculo.dejarDeChocar = function() {
  //if(this.chocarJugador(Jugador)) {
    //this.potencia = 0;

  //};
  
//}
/*Obstaculo.perderPotencia = function(potenica) {
  this.potencia = ;
}
*/