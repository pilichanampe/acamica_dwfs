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

Reserva.prototype.calcularAdicionales = function(){
    let hora = this.fechaHora.getHours();
    let dia = this.fechaHora.getDay();
    let adicionales = 0;

    if(hora == 13 || hora == 20) {
        adicionales = Math.round(this.calcularPrecioBase() * .05);
    } else if (dia == 0 || dia == 5 || dia == 6 ){
        adicionales = Math.round(this.calcularPrecioBase() * .10);
    }  

    return adicionales;
}

Reserva.prototype.descXGrupo = function(){
    let descuento = 0;
    let personas = this.cantPersonas;
    //switch que calcula el descuento según la cantidad de personas.
    
    if(personas >= 4 && personas <= 6) {
        descuento = this.calcularPrecioBase() * .05;
    } else if (personas >= 7 && personas <= 8) {
        descuento = this.calcularPrecioBase() * .10;
    } else if (personas > 8) {
        descuento = this.calcularPrecioBase() * .15;
    }
    return descuento;
}

Reserva.prototype.descXCodigo = function(){
    let descuento = 0;

    if(this.descuento === 'DES15') {
        descuento = this.calcularPrecioBase() * .15;
    } else if (this.descuento === 'DES200') {
        descuento = 200;
    } else if (this.descuento === 'DES1') {
        descuento = this.precioPersona;
    }
    return descuento;
}

Reserva.prototype.calcularPrecioFinal = function() {
    return precioFinal = this.calcularPrecioBase() + this.calcularAdicionales() - this.descXGrupo() - this.descXCodigo();
}

var listadoDeReservas = [
    new Reserva (new Date(2019, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2019, 7, 27, 13, 30), 2, 150, "DES200"),
    new Reserva (new Date(2019, 7, 24, 11, 00), 8, 350, "DES1"),
    new Reserva (new Date(2019, 5, 25, 13, 30), 2, 150, "DES200"),
    new Reserva (new Date(2019, 7, 24, 11, 00), 8, 350, "DES200"),
    new Reserva (new Date(2020, 7, 27, 14, 100), 9, 150, "DES1")
];

var reserva = new Reserva (listadoDeReservas);