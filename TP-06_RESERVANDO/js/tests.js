let expect = chai.expect;

//test function reservarHorario(horario)
describe('Test de function reservarHorario(horario)', function(){
    it('Elimina del arreglo el horario reservado.', function(){
            const testHorarios = listado.restaurantes[0];
            testHorarios.reservarHorario('18:00');

            expect(testHorarios.horarios[0]).to.be.equal('13:00');
            expect(testHorarios.horarios[1]).to.be.equal('15:30');
            expect(testHorarios.horarios.length).to.be.equal(2);
    })
    it('El arreglo se mantiene igual si se reserva horario no existente.', function(){
            const testHorarios = listado.restaurantes[1];
            testHorarios.reservarHorario('13:15');

            expect(testHorarios.horarios[0]).to.be.equal('12:30');
            expect(testHorarios.horarios[1]).to.be.equal('14:30');
            expect(testHorarios.horarios[2]).to.be.equal('15:00');
            expect(testHorarios.horarios.length).to.be.equal(3);

    })
    it('El arreglo se mantiene igual aunque no se le pase parámetro.', function(){
            const testHorarios = listado.restaurantes[2];
            testHorarios.reservarHorario();

            expect(testHorarios.horarios[0]).to.be.equal('11:30');
            expect(testHorarios.horarios[1]).to.be.equal('12:00');
            expect(testHorarios.horarios[2]).to.be.equal('22:30');
            expect(testHorarios.horarios.length).to.be.equal(3);
    })
})

//test de function obtenerPuntuacion()
describe('Test de function obtenerPuntuacion() ', function(){
    it('La puntuación de un restaurant se calcula correctamente.', function(){
            
            expect(listado.restaurantes[0].obtenerPuntuacion()).to.be.equal(7.4);
            expect(listado.restaurantes[4].obtenerPuntuacion()).to.be.equal(6.3);
            expect(listado.restaurantes[20].obtenerPuntuacion()).to.be.equal(5.3);
           
    })
    it('La puntuación es igual a 0 si el restaurant no tiene puntuación.', function(){
            listado.restaurantes[23].calificaciones = [];;
           
            expect(listado.restaurantes[23].obtenerPuntuacion()).to.be.equal(0);
            
            
    })
})

//test de function calificar()
describe('Test de function calificar()', function(){
    it('Pushea nuevaCalificacion al array de calificaciones', function(){
            const testCalificar = listado.restaurantes[2];
            testCalificar.calificar(7)
            

            expect(testCalificar.calificaciones.length).to.be.equal(6);
    });
    it('Si la nuevaCalificacion es menor a 0, no pushea nada.', function(){
        const testCalificar = listado.restaurantes[2];
        testCalificar.calificar(-1);

        expect(testCalificar.calificaciones.length).to.be.equal(6);

    });
    it('Si la nuevaCalificación es mayor a 0, no pushea nada.', function(){
        const testCalificar = listado.restaurantes[2];
        testCalificar.calificar(15);

        expect(testCalificar.calificaciones.length).to.be.equal(6);
    });
})

//test de function buscarRestaurante(id)
describe('Test de function buscarRestaurante(id)', function(){
    it('Busca el id que se pasa por parámetro en el listado.', function(){
                               
            expect(listado.buscarRestaurante(8).id).to.be.equal(8);
    });

    it('Al pasar un id inexistente, sigue funcionando correctamente.', function(){
        listado.restaurantes;
                 
        expect(listado.buscarRestaurante(60)).to.be.equal('No se ha encontrado ningún restaurant');
    });
});

//test function obtenerRestaurantes()
describe('Test de function obtenerRestaurantes()', function(){
    it('Funciona correctamente al utilizar los tres filtros.', function(){
                               
            expect(listado.obtenerRestaurantes('Asiática', 'Nueva York', '15:30').length).to.be.equal(1);
    });

    it('Funciona correctamente sin pasar ningún filtro.', function(){
                         
        expect(listado.obtenerRestaurantes(null, null, null).length).to.be.equal(24);

    });

    it('Funciona correctamente pasando un solo filtro', function(){
                         
        expect(listado.obtenerRestaurantes(null, 'Berlín', null).length).to.be.equal(5);
        expect(listado.obtenerRestaurantes('Desayuno', null, null).length).to.be.equal(4);
        expect(listado.obtenerRestaurantes(null, null, '13:30').length).to.be.equal(1);
    });
});

//test del objeto precioBase().
describe('Test de function precioBase()', function(){
    it('Un restaurante calcula correctamente su precio base.', function(){
        expect(listadoDeReservas[0].calcularPrecioBase()).to.be.equal(2800);
        expect(listadoDeReservas[1].calcularPrecioBase()).to.be.equal(300);
    });
});

//test de function calcularAdicionales().
describe('Test de function calcularAdicionales()', function(){
    it('Un restaurante calcula correctamente su adicional por fin de semana.', function(){
            expect(listadoDeReservas[0].calcularAdicionales()).to.be.equal(280);
            
    });
    it('Un restaurante calcula correctamente su adicional por franja horaria.', function(){
        expect(listadoDeReservas[0].calcularAdicionales()).to.be.equal(280);
        expect(listadoDeReservas[1].calcularAdicionales()).to.be.equal(15);
        
});

})
//test de function precioFinal().
describe('Test de function precioFinal()', function(){
    it('Un restaurante calcula correctamente su precio total.', function(){
            expect(listadoDeReservas[0].calcularPrecioFinal()).to.be.equal(2450);
            expect(listadoDeReservas[1].calcularPrecioFinal).to.be.equal(115);  
    });
})


  



