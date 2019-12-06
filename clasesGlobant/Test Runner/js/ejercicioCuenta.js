

class Cuenta{
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }
    
    getTitular() {
        return this.titular;
    }

    setTitular() {
        return this.titular = titular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad() {
        return this.cantidad = cantidad;
    }
    
    ingresar(cantidadIngresada){
        if (cantidadIngresada > 0){
            Cuenta.getCantidad + cantidadIngresada;
        }
    }
}

//buscar chai assertion library



