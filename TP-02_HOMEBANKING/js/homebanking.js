//Declaración de variables
var nombreUsuario = "Wade Winston Wilson";
var saldoCuenta = 700;
var limiteExtraccion = 2000;
var password = 1234;
var autorizado = false;
var confirmacion = true;



var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumarDinero(cantDinero)
{
    saldoCuenta = cantDinero + saldoCuenta;

    
}

function restarDinero(cantDinero)
{
    saldoCuenta = saldoCuenta - cantDinero;
}

/*function cambiarLimiteDeExtraccion() {
    if (autorizado)
    {
        nuevoLimiteExtraccion = prompt("Por favor, ingrese su nuevo límite de extracción:");
        if(nuevoLimiteExtraccion === null) {return}

        while (nuevoLimiteExtraccion % 100 != 0)
        {
             nuevoLimiteExtraccion = prompt("Solo podrán extraerse billetes de $100, por lo que su límite debe ser múltiplo de 100. Por favor, ingrese su nuevo límite de extracción (múltiplo de 100):");
             if(nuevoLimiteExtraccion === null) {return}
        }
        
        actualizarLimiteEnPantalla();

        alert("Su nuevo límite de extracción es: $" + limiteExtraccion);
    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }


}*/

//validaciones:
        //*****/si nuevoLimiteExtraccion es un numero 
            //else: Ha ingresado un elemento inválido. Por favor, utilice números para ingresar su nuevo límite de extracción: 

        //******* */si nuevoLimiteExtraccion es menor o igual que maximoLimiteExtraccion
            //else: Por seguridad, su límite de extracción no puede exceder a los $12000. Por favor, ingrese un monto igual o menor al máximo permitido:

        //***** */si nuevoLimiteExtraccion es multiplo de 100
            //else: Solo podrán extraerse billetes de $100, por lo que su límite debe ser múltiplo de 100. Por favor, ingrese su nuevo límite de extracción (múltiplo de 100):

        //si nuevoLimiteExtraccion es mayor que 0
            //else: No pueden ingresarse montos negativos.
        
        //limiteExtraccion = parseInt(nuevoLimiteExtraccion);



function cambiarLimiteDeExtraccion()
{
    var datosValidos = false;
    var maxLimiteExtraccion = 12000;

    if (autorizado)
    {
        
        var nuevoLimiteExtraccion = prompt("Por favor, ingrese su nuevo límite de extracción: ");
        if(nuevoLimiteExtraccion === null) {return}
        while(!datosValidos)
        {
            if (!isNaN(nuevoLimiteExtraccion))
            {
                if (nuevoLimiteExtraccion <= maxLimiteExtraccion)
                {
                    if (nuevoLimiteExtraccion % 100 == 0)
                   {
                       if (nuevoLimiteExtraccion > 0)
                       {
                           datosValidos = true;
                       }
                       else
                       {
                           alert("No pueden ingresarse montos negativos o iguales a cero.")
                           nuevoLimiteExtraccion = prompt("Por favor, ingrese una cantidad de extracción mayor a cero:");
                           if(nuevoLimiteExtraccion === null) {return}
                       }
                   }
                   else
                   {
                       alert("Solo pueden extraerse billetes de $100.")
                       nuevoLimiteExtraccion = prompt("Por favor, ingrese su nuevo límite de extracción (múltiplo de 100):");
                       if(nuevoLimiteExtraccion === null) {return}
                   }
            
                }
                else
                {
                    alert("Por seguridad, su límite de extracción no puede exceder los $12000.")
                    nuevoLimiteExtraccion = prompt("Por favor, ingrese un monto igual o menor al máximo permitido:");
                    if(nuevoLimiteExtraccion === null) {return}
                }
            }
            else
            {
                nuevoLimiteExtraccion = prompt("Ha ingresado un elemento inválido. Por favor, utilice únicamente números para actualizar su nuevo límite de extracción: ")
                if(nuevoLimiteExtraccion === null) {return}
            }
        }


        nuevoLimiteExtraccion = parseInt(nuevoLimiteExtraccion);
        limiteExtraccion = nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("Su nuevo límite de extracción es: $" + limiteExtraccion + ".");  
    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
      

}












function extraerDinero()
{
    var datosValidos = false;

    if (autorizado)
    {
        var dineroExtraido = prompt("Por favor, ingrese la cantidad de dinero que desea extraer: ");
        if(dineroExtraido === null) {return}
        while(!datosValidos)
        {
            if (!isNaN(dineroExtraido))
            {
                if (dineroExtraido < limiteExtraccion)
                {
                    if (dineroExtraido < saldoCuenta)
                    {
                        if (dineroExtraido % 100 == 0)
                        {
                            if (dineroExtraido > 0)
                            {
                                datosValidos = true;
                            }
                            else
                            {
                                alert("No pueden ingresarse montos negativos.")
                                dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción mayor a cero:");
                                if(dineroExtraido === null) {return}
                            }
                        }
                        else
                        {
                            alert("Solo pueden extraerse billetes de $100.")
                            dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea múltiplo de 100:");
                            if(dineroExtraido === null) {return}
                        }
                    }
                    else
                    {
                        alert("La cantidad de dinero que desea extraer excede el saldo de su cuenta.")
                        dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea menor o igual a su saldo actual:");
                        if(dineroExtraido === null) {return}
                    }
                }
                else
                {
                    alert("La cantidad de dinero que desea extraer excede su límite de extracción.")
                    dineroExtraido = prompt("Por favor, ingrese una cantidad de extracción que sea menor o igual a su límite:");
                    if(dineroExtraido === null) {return}
                }
            }
            else
            {
                dineroExtraido = prompt("Ha ingresado un elemento inválido. Por favor, ingrese la cantidad numerica que desea extraer: ")
                if(dineroExtraido === null) {return}
            }
        }


        dineroExtraido = parseInt(dineroExtraido);
        saldoAnterior = saldoCuenta;
        restarDinero(dineroExtraido);
        actualizarSaldoEnPantalla();
        alert("Ha extraido: $" + dineroExtraido + "." + "\nSu saldo anterior: $" + saldoAnterior + "." + "\nSu saldo actual: $" + saldoCuenta + ".");  
    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
      

}

function depositarDinero() {
    if (autorizado)
    {
        var dineroDepositado = prompt("Por favor, ingrese la cantidad de dinero que desea depositar: ");
        dineroDepositado = parseInt(dineroDepositado);

        saldoAnterior = saldoCuenta;
        sumarDinero(dineroDepositado);
        actualizarSaldoEnPantalla();
        alert("Ha depositado: $" + dineroDepositado + "\nSu saldo anterior: $" + saldoAnterior + "\nSu saldo actual: $" + saldoCuenta);
    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }
}

function pagarServicio() 
{
    if (autorizado)
    {
        var servicioAPagar = prompt("Por favor, ingrese el número que corresponda al servicio que desea pagar: \n1-Teléfono \n2-Luz \n3-Internet \n4- Agua");
        if(servicioAPagar === null)
        {
            return false;
        }
                
        function noSaldoDisponible()
        {
            alert("No tiene saldo suficiente para pagar este servicio.")
        }
        
        while (true)
        {
            switch(servicioAPagar)
            {
                case "1":
                    if(telefono > saldoCuenta)
                    {
                        noSaldoDisponible();
                        return;
                    }

                    var confirmacion = confirm("Ud debe $" + telefono + " de teléfono. ¿Desea concretar el pago?"); 
                    if(confirmacion === true)
                    {                                                              
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(telefono);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSu saldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + telefono + "\nSu saldo actual: $" + saldoCuenta);
                        return;
                    }
                    else
                    {
                        falseConfirmacion();
                        return;
                    }
                   
                case "2":
                    if(luz > saldoCuenta)
                    {
                        noSaldoDisponible();
                        return;
                    }

                    var confirmacion = confirm("Ud debe $" + luz + " de teléfono. ¿Desea concretar el pago?");
                    
                    if(confirmacion === true)
                    {                     
                        saldoAnterior = saldoCuenta;
                        restarDinero(luz);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSu saldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + luz + "\nSu saldo actual: $" + saldoCuenta);
                        return;
                        
                    }
                    else
                    {
                        falseConfirmacion();
                        return;
                    }
                case "3":
                     
                    if(internet > saldoCuenta)
                    {
                        noSaldoDisponible();
                        return;
                    }

                    var confirmacion = confirm("Ud debe $" + internet + " de teléfono. ¿Desea concretar el pago?");                    
                    if(confirmacion === true)
                    {                                                             
                        saldoAnterior = saldoCuenta;                    
                        restarDinero(internet);
                        actualizarSaldoEnPantalla();
                        alert("El pago se ha realizado correctamente.\nSu saldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + internet + "\nSu saldo actual: $" + saldoCuenta);
                        return;                        
                    }
                    else
                    {
                        falseConfirmacion();
                        return;
                    }

                case "4":

                        if(agua > saldoCuenta)
                        {
                            noSaldoDisponible();
                            return;
                        }
    
                        var confirmacion = confirm("Ud debe $" + internet + " de teléfono. ¿Desea concretar el pago?");                    
                        if(confirmacion === true)
                        {                                                             
                            saldoAnterior = saldoCuenta;                    
                            restarDinero(agua);
                            actualizarSaldoEnPantalla();
                            alert("El pago se ha realizado correctamente.\nSu saldo anterior: $" + saldoAnterior + "\nDinero descontado: $" + agua + "\nSu saldo actual: $" + saldoCuenta);
                            return;                        
                        }
                        else
                        {
                            falseConfirmacion();
                            return;
                        }
                default:
                    alert("No existe el servicio seleccionado.");
                    servicioAPagar = prompt("Por favor, ingrese el número que corresponda al servicio que desea pagar: \n1-Teléfono \n2-Luz \n3-Internet \n4- Agua");
            }
        }
    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }

}

function transferirDinero() {
    if (autorizado)
    {

    }
    else
    {
        alert("Su cuenta está bloqueada. No puede realizar operaciones.");
    }

}

function iniciarSesion() 
{
   var ingreseSuPassword = prompt("Por favor, ingrese su contraseña: ")
   ingreseSuPassword = parseInt(ingreseSuPassword)


    if (ingreseSuPassword === password)
    {
        autorizado = true;
        alert("Bienvenido/a, " + nombreUsuario);
       
    }
    else
    {
        for (i=1; i < 3; i++)
        {
            if (ingreseSuPassword !== password)
            {
                ingreseSuPassword = prompt("Su contraseña es incorrecta. Por favor, ingresela nuevamente: ");
                ingreseSuPassword = parseInt(ingreseSuPassword);
            }
            else 
            {
                autorizado = true;
                alert("Bienvenido/a, " + nombreUsuario);
                break;
            }
        }

        if (i === 3)
        {
            alert("Por su seguridad, su dinero ha sido retenido. Por favor, diríjase a la sucursal más cercana.");
            saldoCuenta = 0;
        }
    
        
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() 
{
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() 
{
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Su límite de extracción es: $" + limiteExtraccion;
} 