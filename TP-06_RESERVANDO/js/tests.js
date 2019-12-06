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
    it('Busca el id que se pasa por parámetro en el listado', function(){
            listado.restaurantes;
                     
            expect(listado.buscarRestaurante(8)).to.be.equal(7);
    });
});





