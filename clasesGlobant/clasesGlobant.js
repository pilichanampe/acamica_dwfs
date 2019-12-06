//POO dos formas de hacerlo 
//js simula orientacion programada a objetos
//class en js
//

/*

---------------------------------------------------------------------------------------------------------------

Crearemos una superclase llamada Electrodomestico con las siguientes características:

- Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. Indica que se podrán heredar.
- Por defecto, el color sera blanco, el consumo energético sera F, el precioBase es de 100 € y el peso de 5 kg.
- Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre esta en mayúsculas o en minúsculas.

Los métodos que implementara serán:
- Métodos get de todos los atributos.
	- comprobarConsumoEnergetico(letra): comprueba que la letra es correcta, sino es correcta usara la letra por defecto.
	- comprobarColor(color): comprueba que el color es correcto, sino lo es usa el color por defecto.
	- precioFinal(): según el consumo energético, aumentara su precio, y según su tamaño, también. Esta es la lista de precios:
		
		LETRA |		PRECIO
		A	  |		100 €
		B	  |		80 €
		C	  |		60 €
		D	  |		50 €
		E	  |		30 €
		F	  |		10 €

		TAMAÑO			 |	PRECIO
		Entre 0 y 19 kg	 |	10 €
		Entre 20 y 49 kg |	50 €
		Entre 50 y 79 kg |	80 €
		Mayor que 80 kg	 |	100 €
		
Crearemos una subclase llamada Lavadora con las siguientes características:

- Su atributo es carga, ademas de los atributos heredados.
- Por defecto, la carga es de 5 kg.

- Los métodos que se implementara serán:
- Método get de carga.
- precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así no se incrementara el precio. Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al precio.

Crearemos una subclase llamada Television con las siguientes características:

- Sus atributos son resolución (en pulgadas) y sintonizador TDT (booleano), ademas de los atributos heredados.
- Por defecto, la resolución sera de 20 pulgadas y el sintonizador sera false.

- Los métodos que se implementara serán:
- Método get de resolución y sintonizador TDT.
- precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementara el precio un 30% y si tiene un sintonizador TDT incorporado, aumentara 50 €. Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al precio.

Ahora crea una clase ejecutable que realice lo siguiente:

- Crea un array de Electrodomesticos de 10 posiciones.
- Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
- Ahora, recorre este array y ejecuta el método precioFinal().
- Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado, el de las lavadoras por otro y la suma de los Electrodomesticos (puedes crear objetos Electrodomestico, pero recuerda que Television y Lavadora también son electrodomésticos). Recuerda el uso operador instanceof.
  Por ejemplo, si tenemos un Electrodomestico con un precio final de 300, una lavadora de 200 y una televisión de 500, el resultado final sera de 1000 (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.
*/

function Electrodomestico(precioBase, color, consumoEnergetico, peso) {
    this.precioBase = precioBase || 100;
    this.color = color || 'blanco';
    this.consumoEnergetico = consumoEnergetico || 'F';
    this.peso = peso || '5';

};

Electrodomestico.prototype.setColor = function(colorElectrodomestico) {
    switch (colorElectrodomestico) {
        case 'rojo':
            this.color = colorElectrodomestico;
            break;
        case 'negro':
            this.color = colorElectrodomestico;
            break;
        case 'azul':
            this.color = colorElectrodomestico;
            break;
        case 'gris':
            this.color = colorElectrodomestico;
            break;
    }
};

var lavadora = new Electrodomestico();





function Electrodomestico(
    precioBase = 100,
    color = 'blanco',
    consumoEnergetico = 'F',
    peso = 5
) {
    this.precioBase = precioBase;
    this.color = color;
    this.consumoEnergetico = consumoEnergetico;
    this.peso = peso;
}

Electrodomestico.prototype.getColor = function () {
    return this.color;
}

Electrodomestico.prototype.precioFinal = function () {
    var precio = 0;
    switch(this.consumoEnergetico) {
        case 'A':
            this.precio = 100;
            break;
        case 'B':
            this.precio = 80;
            break;
        case 'C':
            this.precio = 60;
            break;
        case 'D':
            this.precio = 50;
            break;
        case 'E':
            this.precio = 30;
            break;
        case 'F':
            this.precio = 10;
            break;
        default:
            precio = 10;
    }

    switch(true) {
        case this.peso < 20:
            precio += 10;
            break;
        case this.peso > 20 && this.peso < 49:
            precio += 50;
            break;
        case this.peso >= 50 && this.peso <= 79:
            precio += 80;
        case this.peso >= 80:
            precio += 100;
        default:
    }
    
    return this.precioBase + precio;
}


var electrodomestico = new Electrodomestico(200, 'rojo', 'A', 15);

function Televisor(precioBase, color, consumoEnergetico, peso, pulgadas) {
    Electrodomestico.call(this, precioBase, color, consumoEnergetico, peso);
    this.pulgadas = pulgadas;
}

Televisor.prototype = Object.create(Electrodomestico.prototype);
Televisor.prototype.constructor = Televisor;

Televisor.prototype.precioFinal = function () {
    var precioPorSerElectrodomestico = 
    Electrodomestico.prototype.precioFinal.call(this);
    return precioPorSerElectrodomestico + 40;
}

var tele = new Televisor(200, 'rojo', 'A', 15, 40);
var tele2 = new Televisor(300, 'azul', 'A', 15, 42);

/*function Persona(nombre, apellido) {
	this.nombre = nombre;
    this.apellido = apellido;
}

Persona.prototype.setNombre = function(nombre) {
    if (typeof nombre === 'string') {
        this.nombre = nombre;   
    }
}

Persona.prototype.getNombre = function() {
    return this.nombre.toUpperCase();
}

*/





//clase jueves 22/08
//sin get y set podemos cambiar los valores de los atributos sin validación alguna, y no es buena práctica. Entonces, puedo romper todo el objeto porque me salto las validaciones que hace la clase
//siempre hay que ir por los metodos de la clase
//metodos accesores, se usan para poder validar los datos. Es mala práctica no usar setters y getters
//.call --> 


//codigo pasado por el profe en Slack
function Electrodomestico(precioBase = 100, color = 'Blanco', consumoEnergetico = 'F', peso = 5,) {
    this.precioBase = precioBase;
    this.color = color;
    this.consumoEnergetico = consumoEnergetico;
    this.peso = peso;
}
​
Electrodomestico.prototype.getColor = function () {
    return this.color;
}
​
Electrodomestico.prototype.precioFinal = function () {
    var precio = 0;
    switch(this.consumoEnergetico) {
        case 'A':
            precio = 100;
            break;
        case 'B':
            precio = 80;
            break;
        default:
            precio = 10;
    }
​
    switch(true) {
        case this.peso < 20:
            precio += 10;
            break;
        case this.peso > 20 && this.peso < 49:
            precio += 50;
            break;
        default:
    }
​
    return this.precioBase + precio;
}
​
function Televisor(precioBase, color, consumoEnergetico, peso, pulgadas) {
    Electrodomestico.call(this, precioBase, color, consumoEnergetico, peso);
    this.pulgadas = pulgadas;
}
​
Televisor.prototype = Object.create(Electrodomestico.prototype);
Televisor.prototype.constructor = Televisor;
​
Televisor.prototype.precioFinal = function (){
    var precio = 0;
    /**
     * Para que me devuelva el precio en base
     * a sus características de electrodoméstico
     * hago uso del método de su superclase para
     * reutilizar código.
     */
    var precioPorSerElectrodomestico = Electrodomestico.prototype.precioFinal.call(this);
​
    switch (true) {
        case this.pulgadas < 40:
            precio = 20;
            break;
        case this.pulgadas > 40:
            precio = 50;
            break;
        default:
    }
    return precioPorSerElectrodomestico + precio;
}
​
var tele = new Televisor(200, 'Negro', 'A', 15, 42);

//TEMA NUEVO: PRUEBAS DE SOFTWARE O TESTING
//pruebas automáticas, de caja negra, unitarias
//caso border, caso líimte ej: [1,2, 'a']
 //es un caso raro. Tiene una letra mezclada con numeros
 //? --> es un if rapido!! syntaxis sugar
 //
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
​
  function promedio(elementos) {
    var suma = sumatoria(elementos);
    var promedio = division(suma, elementos.length);
  
    return promedio;
  }

  function testSumatoriaNumerosPositivos() {
    var entrada = [1, 2, 3];
    var resultadoEsperado = 6;
    var salida = sumatoria(entrada);
  ​
    return salida === resultadoEsperado;
  }
  ​
  function testSumatoriaNumerosNegativos() {
    var entrada = [-1, -2, -3];
    var resultadoEsperado = -6;
    var salida = sumatoria(entrada);
  ​
    return salida === resultadoEsperado;
  }
  ​
  function testSumatoriaNumerosMixtos() {
    var entrada = [1, -2, 3];
    var resultadoEsperado = 2;
    var salida = sumatoria(entrada);
  ​
    return salida === resultadoEsperado;
  }
  ​
  function testSumatoriaNoNumeros() {
    var entrada = [1, 2, 'a'];
    var resultadoEsperado = 3;
    var salida = sumatoria(entrada);
  ​
    return salida === resultadoEsperado;
  }
  ​
  function run() {
    console.log(
      'testSumatoriaNumerosPositivos: ',
      testSumatoriaNumerosPositivos() ? 'OK' : 'FAILED'
    );
  ​
    console.log(
      'testSumatoriaNumerosNegativos: ',
      testSumatoriaNumerosNegativos() ? 'OK' : 'FAILED'
    );
  ​
    console.log(
      'testSumatoriaNumerosMixtos: ',
      testSumatoriaNumerosMixtos() ? 'OK' : 'FAILED'
    );
  ​
    console.log(
      'testSumatoriaNoNumeros: ',
      testSumatoriaNoNumeros() ? 'OK' : 'FAILED'
    );
  }


  //  CLASE MARTES 3/09
  //  Git y GitHub
  //sistema de control de versiones:
  // sistemaas que permiten llevar un control de cada cambio, ya sea un proyecto o un archivo
  // comparar los cambios de las versiones, ver qué se agregó o qué se quitó
  // VCS Local:
    //Crear una base de datos donde se guardan estos cambios. Solo registra los cambios de ese archivo y lo guarda localmente en la computadora.
        //Desventaja: 
  //CVCs Sistemas de control centralizados
    //se guardan en servers. Cada colaborador puede acceder a los mismos cambios y todos trabajar en el mismo proyecto yq ue podamos ver los cambios de todos los colaboradores.
    //Desventaja: sí o sí necesitamos tener internet || Si le pasa algo, como está centralizado, se pierde todo.
  //DVCS Sistemas de Control Distribuidos
    //cada colaborador tiene una copia de esos cambios.
        //Ventaja: si un colaborador pierde la info, puede sacarla de otro colaborador || Permite trabajar sín conexión a internet, trabajar localmente y después lo subís al repositorio servidor común a todos.
    
    //Git -- Sistema de Control de Versiones Distribuido:
        //Sistema de control más general, común a todos
        //Está basado en snapshots
        //casi todas las operaciones son locales
        //Tiene 3 estados:
            //Modified--> Cuando estamos modificando o creando un archivo
            //Staged--> preparado para entregar. Nos permite elegir qué cambios queremos que se entreguen y cuáles no
            //Committed--> archivo entregado
        //FLUJO MÁS BÁSICO DE GIT
            //modificar los arcihvos
            //Seleccionas los cambios a marcar como entrega
            //realoizar la entrega para guardarlos permanentemente enel repositorio.

        //CREAR UN REPOSITORIO
            //a. Creamos un repositorio de cero
            //b. Descargamos un repositorio externo.

            //git init --> inicializa un proyecto dentro de la carpeta donde estemos
            //mkdir--> crea un directorio
            //dentro de .git está toda la configuración de todos los cambios que se van guardando... es una carpeta oculta
            //git clone--> 

            //git status--> permite ver en qué estado estamos en nuestro proyecto. Qué archivos fueron modificados, qué archivos están marcados para crear 
            //touch--> crea un archivo?
            //git add--> agregamos el archivo o cambio al segundo estado que mencionamos, y lo deja preparado para entregar
            //git commit -m "descripción de nuestro commit"

            //git push origin --> subir al repositorio
            //git pull --> bajar localmente los últimos cambios

            //BRANCHES --> ramificaciones que se hacen de un proyecto
            //master es la copia original.
                //Si queremos trabajar una versión, pero no queremos perder el original, creamos branches, ramas que toma de la original para poder trabajar por ella, sin estar preocupados de que mandemos macana
                //get branch nombreDeMiBranch --> creamos un nuevo branch
                //get checkout nombreDeMiBranch --> me mueve a ese nuevo branch creado para poder trabajar en él.
                
                //git merge nombreDeMiBranch --> une mi rama con el master, los "mergea" y ya quedan unificados la branch con el master. Ya no hay path separado.

                //CONFLICTOS
                    //si hay conflictos, te hace elegir entre las cosas que difieren antes de mergear.

                //git reset--> podemos volver a la versión de cualquier commit que hayamos hecho... BUSCAR MÁS INFO, NO ME QUEDÓ CLARO.
                //git log--> da un historial de todos los commit que hicimos
                //



 //JUEVES CLASE 5/09/2019
   //JAVASCRIPT PATRONES DE DISEÑO
   //que resuelven los patrones de diseño: soluciones a problemas que pasan muy a menudo. SOlucion prediseñada.
   //Patron de diseño: solucion a un problema de diseño. Debe haber comprobado su efectividad, debe ser reutilizable. Aplicado a distintas circunstancias.
   //Requerimientos arquitectónicos que encontramos a la hora de desarrollar una solucion de software.
   //patron: metodología estandarizada...
   //objetivos
    //proporcionar catalogos de elementos reutilizables
    //evitar la reiteracion
    //formalizar un vocabulario comun entre diseñadores
    //estandarizar el modo en que se realiza el diseño
    //facilitar el aprendizaje a las nuevas generaciones
    //3 patrones fundamentales:
            //Patrón Módulo:
                //Permite definir métodos privados y públicos dentro de un objeto.
                //permite emular el comportamiento de una clase como en otros lenguajes de software orientados a objetos.
                //habilita que métodos y propiedades estén protegidos del scope global
                
                //FUNCION AUTOINVOCADA
                    //funcion anónima que se ejecuta sola al momento de crearse. ife --> inmediate invoqued funtion --> BUSCAR BIEN COMO SE ESCRIBE
                    (function() {
                        console.log("hola");
                    }()); //debo pasarlo a una sentencia para que el compilador me lo pueda leer.

                    //el patron modulo usa esta forma para poder hacer metodos privados y publicos dentro de un objeto.
                    var saludo = (function() {
                        return 'hola';
                    }());

                    //BUSCAR Array.prototype.reduce() --> qué es esto?? estudiarlo. Es un ACUMULADOR
                    
                    // .reduce --> un conjunto de valores, te lo reduce a un solo valor.
                   /* var promedio = (function( ) {
                        function sumatoria (numeros) {
                            return numeros.reduce (acc, valor) => acc + valor, promedio, 0);
                        }

                        console.log(sumatoria[1, 2, 3])
                    })*/


                    var promedio = (function() {
                        function sumatoria (numeros) {
                          return numeros
                                .reduce((acc, valor) => acc + valor, 0);
                        }
                      
                        function dividir(a, b) {
                          return a/b;
                        }
                      
                        function promedio (valores) {
                          return dividir(
                            sumatoria(valores), valores.length
                          );
                        }
                      
                        return promedio;
                      }());


   //PATRON OBSERVER
    //Esun patron donde el objeto (conocido como el subject/sujeto) mantiene una lista de objetos dependientes de el (observer/obseevadores), los cuales automaticamente notifican sobre cualquier cambio de estado.
    
    //cuando un sueto necesita notificar a los observadores sobre algo interesante que está pasando transmite una... blabla leer presentacion.
    //
    function Subject() {
        this.observers = [];
      }
      
      Subject.prototype.addObserver = function(observer) {
        this.observers.push(observer);
      }
      
      Subject.prototype.notify = function (news) {
        for (var i = 0; i < this.observers.length; i++) {
          if (news === this.observers[i].news) {
            this.observers[i].listener();
          }
        }
      }
      
      function Observer(news, listener) {
        this.news = news;
        this.listener = listener;
      }
      
      var sujeto = new Subject();
      var onClick = new Observer('click', function () {
        console.log('Hicieron click por ahí.');
      });
      
      var onKeydown = new Observer('keydown', function () {
        console.log('Presionaron una tecla por ahí.');
      });
      
      sujeto.addObserver(onClick);
      sujeto.addObserver(onKeydown);
      
      sujeto.notify('click');
      sujeto.notify('keydown');


//MARTES 10/09
//PATRON MVC
//Se crea para poder resolver un problema grave del software: codigo mezclado, enredado. Modulo-Vista-Controlador.
//Regla de oro de software de caliadad: LA SEPARACION DE RESPONSABILIDADES. Por eso existen las clases, el paradigma orientado a objetos y el MVC.
//Tenemos modulos con una funcionalidad bien definida. Las funciones deben hacer una sola cosa... Si la funcion hace todo, no conviene. POr ej: funcion suma, funcion division, y otra función que las combina para obtener un promedio.
//Funciones bien definidas, cortitas, que hagan una sola cosa.
//Este patrón resuelve estos problemas.
//Tener todo junto trae muchos problemas.
//MODELO: CONTIENE UNA REPRESENTACION DE LOS DATOS QUE MANEJA EL SISTEMA, SU LOGICA DE NEGOCIO Y SU MECANIOSMO DE PERSISTENCIA.
      //gralmente son motores de base de datos, APIs.
      //el modelo no deberia tener "logica de negocios"[NO SE QUE QUIERE DECIR ESTO. BUSCAR]--> 
      //se encarga de persistir nuestra data, como la entrega y como la guarda en la base de datos.
//VISTA: es la interfaz de usuario. La representa visualmente. COmpone la informacion que se envia al cliente y los mecanismos interaccion con este.
//CONTROLADOR: actua como el intermediario entre el modelo y la vista, gestiona el flujo de informacion entre ellos y las transformaciones para adoptar los datos a las necesidades de cada uno.

//lo mas desacoplado que se pueda hacer un software, mejor.. que no tengan dependencia fuerte sus partes entre si.
//angular, enver, usan patron MVC, 
//



//29/09/19 clase jueves 
//Trabajando con APIs... más perdida que una Esfera del Dragón en Universo Marvel.

//Buscar que es Node en Apis...
//Buscar qué es un mapa... es como un forEach. La diferencia es que devuelve un arreglo

//ASINCRONIA EN JS
//tiempo de respuesta del servidor... tardan en responder por cuestiones físicas. NO es instantaneo.
//concepto de asincronia...
      //como hay procesos que tardan, se van haciendo otras cosas mientras llega la respuesta del servidor.
      //js se construyó en base a un asincronismo nativo. Fue diseñado para la web.
      
      //responde porque trabaja en paralelo: asincronia. Trabaja diferentes cosas en paralelo
      //send --=> envia informacion al servidor
      //concurrencia, empiezan en distintos tiempos, tambien es asincrónico pero no en paralelo al mismo tiempo.
      //codigo bloqueante y no bloqueante
        //bloqueante: una operacion tiene que terminar para que empiece la que sigue. Va bloqueando. No se puede hacer ninguna otra
        //accion hasta que termine la anterior.
        //no bloqueante: la asincronia permite tener codigo no bloqueante.
        //callbacks --> se va a ejecutar cuando pase un evento. Pieza clave para que js funcione de forma asincronica.
      var test = function (bla){
        var bla = "ble";
      }

//clase martes 1/10/19
//Promesas
//modelo de asincronismo.       
//asignar la funcion a un evento 
//apis Fetch y Axios
//Promesas, las apis Fetch y Axios se basan en promesas
//el 90% de los proyectos estan basados en promesas
//se le dice promesa porque representa un valor que puede estar disponible ahora, en el futuro o nunca, representa la terminacion
//o el fracaso eeventual de una operacion asincrona.
//BUSCAR DIFERENCIA ENTRE EVENTO Y PROMESA...
//
//Una promesa se implementa

var resuelvo = true;

var promesa = new Promise(function(resolve, reject) {
  if (resuelvo) {
    resolve('Resolví :)');
  } else {
  reject('Rechacé :(');
}});
//buscar then y catch...

promesa.then(function(respuesta) {})//solo las cosas que se resuelvan van a pasar por el then
//Buscar async - Await, bloque finally

//es mas facil de usar Axios que Fetch
 //Es un cliente http y está basado en promesas. Usan promesas para implementarlo.
 //se puede usar desde el navegador o desde node.js
 //hay que incluir la libreria axios en un script en el html... es un codigo js

 //CLASE JUEVES 3/03
 //NODE.JS
  //DESARROLLO BACKEND
  //no se ve, no se puede visualizar
  //acceso a los perifericos
  //en el backend hay miles de lenguajes de programacion. 
  //Usar javascript en el desarrollo de backend, sabemos las mismas reglas para programar en un sistema operativo
  //Ryan Dahl creó node.js. Es una plataforma que ejecuta codigo js y se interpreta como js al lenguaje maquina.
    //tiene acceso a las api del sistema operativo. Sistema de archivo, de permisos... etc
    //puedo programar con js pero trabajando en el sistema operativo.

    //es un entorno en tiempo de ejecucion multiplataforma de codigo abierto. basado en el lenguaje de programacion ECMASCRIPT
    //asincrono, con entradas y salida de datos em una arquitectura orientada a eventos y basado en el motor v8 de google.
    //es creado para Chrome, su evolucion esta apatrinada por la empresa Joyent.
    //NO ES un lenguaje de programacion, una libreria o framework, un programa en javascript.

    //
    
    //CLASE MARTES 8/10
    //se trabaja base de datos con npm
    //el mundaneum de Paul Olett
    //base de datos, un conjunto de informacion en un mismo contexto sea facilmente accesible en cualquier momento
    //TIPOS DE BASE DE DATOS 
      //relacional: sql se basan en la organizacion de la infomacion en trozo pequeños que se relacionan entre ellos mediante la relacion de identificadores.
          //sql --> lenguaje de consulta Structure Query Language
          //INTEGRIDAD DE LOS DATOS --> las bases de datos ponen restricciones
          //transacciones --> cada una ocurre de principio a fin. O bien sucede todo con exito, o si algo falla, esto se cancela.
            //tienen dos estados: exitoso o fallido.
          //conformidad con ACID --> Atomicidad, Coherencia, Aislamiento, Durabilidad. 
            //atomicidad --Si una transacción no puede
               //suceder parcialmente
            //coherencia

            //aislamiento --> 

            //durabilidad --> si nuestra transaccion fue exitosa, esos datos van a ser pernmanentes.

      //no relacional: nosql, no tienen un idenificador que sirva de relacion entre un conjunto de datos y otros.

      //COMO SE DISEÑAN LAS BASES DE DATOS
        //DIAGRAMA ENTIDAD-RELACION --> grafica como va a ser la relacion de entidades en nuestra base de datos.
        //qué es una entidad? ==> son objetos. Es algo que se puede definirL objeto, persona o evento.
        //relaciones --> uno a uno, muchos a uno, uno a muchos, muchos a muchos.
        //

        //clave primaria y clave foranea
            //CLAVE PRIMARIA -- PRIMARY KEY
                // pERMITE DARLE UN identificador unico a esa identidad.
                    //Nos asegura que ni haya datos duplicados
                    //Puede haber una sola clave primaria por cada tabla
                    //No puede ser nula.

                //CLAVE FORANEA
                    //ES una columna que se corresponde con una clave primaria en otra tabla. esto permite unir tablas paa componer datos.



            //TIPOS DE DATOS
                //numericos(INT)
                //caracteres(CHAR)
                //fechas(DATETIME)
                //Strings(VARCHAR)

        //SISTEMAS DE GESTION DE BASE DE DATOS (DBMS)

            //Permiten interactuar con la base de datos
            //Los más populares
                  //MySQL --> open source
                  //Microsoft SQL Server
                  //Oracle DB
                  //PostgreSQL
                  //MongoDB

            //MYSQL
                //Facilita herramientas para trabajar sobre la base de datos

    //



    //clase jueves 10-10-19
    

    //clase martes 15/10/19

    //auto_increment va incrementando un numero cada vez que pasan los datos.

    //show --> muestra la base de datos
    //describe --> describe nuestros datos
    //scripts sql, permiten escribir una vez los datos.
      //archivo con extension .sql

     //



     //CLASE JUEVES 17/10/19

     //
//JOIN nos permite combinar datos de dos o m{as tablas diferentes.
    // 


    //CLASE 31/10/19

    //Node modules
    //en Node podemos crear nuestros propios modulos.
      //common js no se esta usando tanto. Hay una arquitectura mejor, ECMAScript 6. Está bien usar las dos, pero la primera
      //está cayendo en desuso

      
      //palabras clave:
        //module.exports: 
        //require: hay que poner una ruta relativa --> ./ es la única forma de usar modulos propios nuestros. Si no, directamente
        //va a buscar directamente en NOde Modules y no en nuestro proyecto. Es para que busque localmente

        //Express router
           //Un router, me permite tener varios caminos para elegir.
           //routers o direccionadores
           //


           //Parametros de rutas
              //nos permiten definir en nuestras rutas parametros que sn variables, de esta forma podemos definir rutas dinamicas que recuperan
              //otra logica de acuerdo al parametro pasado.

              //los params sirven para hacer las rutas dinamicas

              //parametros de consulta
                  //no se tienen que definir en las rutas.


              //Middlewares
                  //son funciones
                  //a nivel de aplicacion, se ejecuta siempre antes de llegar a cualquier ruta.
                  //es un programa intermedio que se va a ejecutar siempre


                  //GET http://api.joaquin.com/tareas
                  //GET http://api.joaquin.com/tareas/1
                  //PUT http://api.joaquin.com/tareas/1
                  //GET http://api.joaquin.com/tareas?prioridad=alta

                  var blu = '';
