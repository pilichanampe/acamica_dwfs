var Reserva = function(fechaHora, cantPersonas, precioPersona, descuento) {
    this.fechaHora = fechaHora;
    this.cantPersonas = cantPersonas;
    this.precioPersona = precioPersona;
    this.descuento = descuento;
}

Reserva.prototype.calcularPrecioBase = function() {
    let precioBase = this.cantPersonas * this.precioPersona;
    return precioBase;
}

/*Reserva.prototype.calcularPrecioFinal = function() {
    precioTotal = this.precioBase + this.adicionales - this.descuentos;
    return precioTotal;
}*/

/*Reserva.prototype.calcularAdicionales = function() {
    let adicionales = 0;
    let adicDia = this.fechaHorario.getHours() === 13;
    let adicNoche = this.fechaHorario.getHours() === 20;
    if(adicDia || adicNoche) {
        adicionales = this.calcularPrecioBase * .05;
        
        
         
    }
   
    
}*/
Reserva.prototype.calcularAdicionales = function(){
    var adicionales = 0;
    if(this.fechaHora.getHours() >= 12 && this.fechaHora.getHours() <= 13 || this.fechaHora.getHours() >= 19 && this.fechaHora.getHours() <= 20) {
        adicionales = Math.round(this.calcularPrecioBase() * 5 ) / 100;
    } else if (this.fechaHora.getDay() >= 4){
        adicionales = Math.round(this.calcularPrecioBase() * 10) / 100;
    }  

    return adicionales;
}

Reserva.prototype.calcularPrecioFinal = function() {
    return precioFinal = this.calcularPrecioBase() - this.calcularDescuentos() + this.calcularAdicionales();
}

var listadoDeReservas = [
    new Reserva (new Date(2019, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
];

var reserva = new Reserva (listadoDeReservas);