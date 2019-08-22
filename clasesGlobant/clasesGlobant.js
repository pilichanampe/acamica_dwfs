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

var heladera = new Electrodomestico();





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
        default:
    }
    
    return this.precoiBase + precio;
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
