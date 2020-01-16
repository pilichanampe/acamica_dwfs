geocodificadorModulo = (function () {
  var geocodificador // Geocodificador que dada una dirección devuelve una coordenada
  
    // Permite obtener las coordenadas y las usa con la función llamada por parámtero
  function usaDireccion (direccion, funcionALlamar) {
        /* Completar la función usaDireccion(dirección,funcionALlamar)
     para que se obtengan las coordenadas a partir de la dirección pasada por parámetro
     y que llame a la función pasada por parámetro con los siguientes parámetros 
     dirección: la dirección pasada por parámetro
     coordenada: la ubicación de tipo google.maps.LatLng */
     geocodificador.geocode({address: direccion}, (results, status) => {      
      if (status === google.maps.GeocoderStatus.OK) {
        var coords = results[0].geometry.location
        funcionALlamar(direccion, coords)      
      }
     })
  }

    // Inicializo el geocoder que obtiene las corrdenadas a partir de una dirección 
    // La variable dirección es igual al texto ingresado por el usuario
    // Llama a la función usaDireccion para agregarla a los listados y mostrarlo en el mapa
  function inicializar () {
    var that = this
    geocodificador = new google.maps.Geocoder()

        // cuando se presiona la tecla enter en el campo direccion, se agrega la dirección y se muestra en el mapa
    document.querySelector('#direccion').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode
      if (key === 13) { // 13 is enter
                // code for enter
        var direccion = document.getElementById('direccion').value
        that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      }    
    })

    document.querySelector('#direccion').addEventListener('change', function (e) {//este change me toma cualquier tipo de cambio, no tiene en cuenta si yo elijo algo de la lista o no
    //document.querySelector('#direccion').addEventListener('change', function (e) {
      
      var direccion = document.getElementById('direccion').value
      console.log(e.target.value)
      console.log(direccion)
      that.usaDireccion(direccion, direccionesModulo.agregarDireccionYMostrarEnMapa)
      
      
   //}
     
      
        
        
       
        
        
                
    })
  }

  return {
    usaDireccion,
    inicializar
  }
})()
