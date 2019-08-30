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