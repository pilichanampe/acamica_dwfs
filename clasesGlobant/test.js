function sumatoria(elementos) {
    var suma = 0;
    for(var i = 0; i < elementos.length; i++) {
      if (typeof elementos[i] === 'number') {
        suma += elementos[i];
      }	
    }
  
    return suma;
  }
  
  function division(a, b) {
    return a/b;
  }

  function promedio(elementos) {
    var suma = sumatoria(elementos);
    var promedio = division(suma, elementos.length);
  
    return promedio;
  }