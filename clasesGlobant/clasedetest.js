  function testSumatoriaNumerosPositivos() {
    var entrada = [1, 2, 3];
    var resultadoEsperado = 6;
    var salida = sumatoria(entrada);
  
    return salida === resultadoEsperado;
  }
  
  function testSumatoriaNumerosNegativos() {
    var entrada = [-1, -2, -3];
    var resultadoEsperado = -6;
    var salida = sumatoria(entrada);
  
    return salida === resultadoEsperado;
  }
  
  function testSumatoriaNumerosMixtos() {
    var entrada = [1, -2, 3];
    var resultadoEsperado = 2;
    var salida = sumatoria(entrada);
  
    return salida === resultadoEsperado;
  }
  
  function testSumatoriaNoNumeros() {
    var entrada = [1, 2, 'a'];
    var resultadoEsperado = 3;
    var salida = sumatoria(entrada);
  
    return salida === resultadoEsperado;
  }

  function testSumatoriaUndefined() {
    var entrada = [1, 2, undefined];
    var resultadoEsperado = 3;
    var salida = sumatoria(entrada);

    return salida === resultadoEsperado;
  }

  /*function testSumatoriaNull() {
      var entrada = [1, 2, null];
      var resultadoEsperado = 3;

      return salida === resultadoEsperado;
    }*/

  /*function testSumatoriaParseInt() {
      var entrada = [1, 2, "3"];
      var resultadoEsperado =

  }*/
  
  function run() {
    console.log(
      'testSumatoriaNumerosPositivos: ',
      testSumatoriaNumerosPositivos() ? 'OK' : 'FAILED'
    );
  
    console.log(
      'testSumatoriaNumerosNegativos: ',
      testSumatoriaNumerosNegativos() ? 'OK' : 'FAILED'
    );
  
    console.log(
      'testSumatoriaNumerosMixtos: ',
      testSumatoriaNumerosMixtos() ? 'OK' : 'FAILED'
    );
  
    console.log(
      'testSumatoriaNoNumeros: ',
      testSumatoriaNoNumeros() ? 'OK' : 'FAILED'
    );

    console.log(
        'testSumatoriaNoNumeros: ',
        testSumatoriaUndefined() ? 'OK' : 'FAILED'
      );

      console.log(
        'testSumatoriaNoNumeros: ',
        testSumatoriaNull() ? 'OK' : 'FAILED'
      );

      console.log(
        'testSumatoriaNoNumeros: ',
        testSumatoriaNull() ? 'OK' : 'FAILED'
      ); 
  }

  //NO ME SALE NAAADA, NO ME FUNCIONÓ NINGUNA FUNCIÓN... FUCK.kfkdfkfdk

  //clase jueves 29/08

  class Cuenta {
    constructor(titular, cantidad) {
      this.titular = titular;
      this.cantidad = cantidad;
    }

  /*  getCantidad() {
      return this.cantidad;
    }

    setCantidad(cantidad) {
      this.cantidad = cantidad;
    }

    ingresar(cantidad) {
      if(cantidad < 0) {
        return true;
      }

    retirar(cantidad, monto) {
        if(cantidad > monto) {
          cantidad = 0;
        }
      }

    }*/

    retirar(cantidad) {
      this.cantidad -= cantidad;
    }
  } // estará esto bien?? funcionará?? Fuck.


  //14 septiembre del 2019. Un sábado estudiando test... lendo lendo leeendo. -.-
  //2.6 actividad casos de test dela página de Acámica
  function suma(a,b){
    return a+b;
  }
//qué casos de test utilizaría para la función suma?? Esta fue mi respuesta... Pero viendo el video,
//me faltó también testear los números negativos y el cero... Así que ya lo estoy agregando.
  function testSuma() {
    var suma = suma(1,1);
    return suma === 2;
    }

    //Agregando funciones para testear negativo y cero;

   function testSumaNegativa() {
     var suma = suma(-1, -1);
     return suma === -2;
   } 

   function testSuma0(){
     var suma = suma(0, 0);
     return suma === 0;
   }
    
   //2.10 ACTIVIDAD `TEST DE PRACTICA
   // define la clase Gato
var Gato = function() {
  this.nombre = 'Garfield';
  this.genero = 'macho';
};
 
 
//configura el nombre
Gato.prototype.configurarNombre = function(nombre) {
  this.nombre = nombre;
};
 
 
//configura el genero
Gato.prototype.configurarGenero = function(genero) {
if(genero === ‘hembra’ || genero === ‘macho’){
this.genero = genero;
}
};
 
//configura genero con hembra
Gato.prototype.configurarGeneroConHembra = function() {
  this.configurarGenero('hembra');
};