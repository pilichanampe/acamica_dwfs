var con = require('../lib/conexionbd');

function buscarPeliculas(req, res){
  var anio = req.query.anio;
  var titulo = req.query.titulo;
  var genero = req.query.genero;
  var orden = req.query.columna_orden;
  var tipo_orden = req.query.tipo_orden;
  var pagina = req.query.pagina;
  var cantidad = req.query.cantidad;

  if (!cantidad) {
    var cantidad = 52;
  }
  
  var sql = createQuery(titulo, anio, genero, orden, tipo_orden, pagina, cantidad);
  var sqlCount = createQueryCount(titulo, anio, genero);

  con.query(sql, function(error, resultado, fields){
    con.query(sqlCount, function(error, resultado1, fields){
      if (error) {
        console.log('Hubo un error en la consulta', error.message);
        return res.status(404).send('Hubo un error en la consulta');
      }
      var response = {
        'peliculas': resultado,
        'total' : resultado1[0].total
      };
      res.send(JSON.stringify(response));
    });
  });
}
  
function createQuery(titulo, anio, genero, orden, tipo_orden, pagina, cantidad){
  var query = "SELECT * FROM pelicula ORDER BY " + orden + " " + tipo_orden + " LIMIT " + (pagina - 1) * cantidad + "," + cantidad + "";
  if (titulo != undefined || anio != undefined || genero != undefined) {
    query = "SELECT p.titulo, p.duracion, p.trama, p.director, p.anio, p.fecha_lanzamiento, p.puntuacion, p.poster, g.nombre FROM pelicula p JOIN genero AS g ON p.genero_id = g.id WHERE titulo LIKE '" 
    + titulo + "%' OR p.anio = '" + anio + "' OR g.id = '" + genero + "' ORDER BY " + orden + " " + tipo_orden + " LIMIT " + (pagina - 1) * cantidad + "," + cantidad + "";
  }
  return query;
}

function createQueryCount(titulo, anio, genero){
  var query = "SELECT COUNT(*) as total FROM pelicula";
  if (titulo != undefined || anio != undefined || genero != undefined) {
    query = "select COUNT(*) as total FROM pelicula p JOIN genero AS g ON p.genero_id = g.id WHERE titulo LIKE '" 
    + titulo + "%' OR p.anio = '" + anio + "' OR g.id = '" + genero + "'";
  }
  return query;
}



module.exports = {
  buscarPeliculas : buscarPeliculas,
}