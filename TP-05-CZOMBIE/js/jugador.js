/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

  /*mover(x,y){
    if(x > 0){
      this.sprite = "imagenes/auto_rojo_derecha.png";
      this.ancho = 30;
      this.alto = 15;
    } else if(x < 0) {
      this.sprite = "imagenes/auto_rojo_izquierda.png";
      this.ancho = 30;
      this.alto = 15;
    } else if(y > 0){
      this.sprite = "imagenes/auto_rojo_abajo.png";
      this.ancho = 15;
      this.alto = 30;
    } else if(y < 0){
      this.sprite = "imagenes/auto_rojo_arriba.png";
      this.ancho = 15;
      this.alto = 30;
    }
  this.x += x;
  this.y += y;
  }*/
    // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
}

Jugador.prototype.moverse = function() {
  switch (true) {
    case 'der':
      Jugador.prototype.setSprite = function(){
        this.sprite = 'imagenes/auto_rojo_derecha.png';
        this.ancho = 30;
        this.alto = 15;
        break;
      }
      this.x += 5;
      break;

    case 'izq':
      this.x -= 5;
      break;
    case 'arr':
      this.y += 5;
      break;
    case 'abajo':
      this.y -= 5;
      break;
    default:
  }
}