var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    dibujar(JSON.parse(xhttp.responseText));
  }
};

xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);
xhttp.send();

function dibujar(respuesta) {
  var lista = document.createElement('UL');
  lista.style.listStyle = 'none';
  var li1 = document.createElement('LI');
  li1.innerHTML = respuesta.name;
  lista.appendChild(li1);

  var img = document.createElement('IMG');
  img.setAttribute('src', respuesta.sprites.front_default);
  var li2 = document.createElement('LI');
  li2.appendChild(img);
  lista.appendChild(li2);

  var li3 = document.createElement('LI');
  li3.innerHTML = 'Experiencia: ' + respuesta.base_experience;
  lista.appendChild(li3);

  var li4 = document.createElement('LI');
  li4.innerHTML = 'Peso: ' + respuesta.weight;
  lista.appendChild(li4);

  var li5 = document.createElement('LI');
  var habilidades = respuesta.abilities.map(function(elemento) {
    return elemento.ability.name;
  });
  li5.innerHTML = 'Habilidades: ' + habilidades;
  lista.appendChild(li5);


  document.body.appendChild(lista);
}