/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = { 
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    
      let idMayor = this.ultimoId;
      this.preguntas.forEach((pregunta) => {if (pregunta.id > idMayor){idMayor = pregunta.id}});
      this.ultimoId = idMayor;
      return this.ultimoId
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
    localStorage.setItem('array', JSON.stringify(this.preguntas));
  },

  /*agregarRespuesta: function(respuesta, cantVotos) {
    var idPregunta = this.agregarPregunta.id;
    var nuevaRespuesta = {'textoRespuesta': respuesta, 'cantidad': cantVotos};
    this.respuestaAgregada.notificar();
  },*/

  eliminarPregunta: function() {

    for(var i in this.preguntas){
      if (this.preguntas[i].id == identificador){
          this.preguntas.splice(i,1);
        
      }
    }
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  sumarVoto: function() {
    var preguntaElegida = this.preguntas.find( pregunta => pregunta.textoPregunta.toUpperCase() == nombrePregunta);
    respuestaElegida = preguntaElegida.cantidadPorRespuesta.find(respuesta => respuesta.textoRespuesta == respuestaSeleccionada);
    respuestaElegida.cantidad += 1;
    this.guardar();
    this.preguntaVotada.notificar();

  },

  editarPregunta: function(identificador, texto) {
    question = this.preguntas.find(pregunta => pregunta.id==identificador )
    question.textoPregunta = texto;
    this.guardar();
    this.preguntaEditada.notificar();

  },
  borrarTodasLasPreguntas: function() {
    this.preguntas=[];
    this.guardar();
    this.preguntaEliminada.notificar();
  }
};
