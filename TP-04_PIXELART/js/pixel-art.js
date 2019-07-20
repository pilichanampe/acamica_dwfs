var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

function mostrarPaletaColores() {
  for(var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement("div");
    color.className = "color-paleta";
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);

  }
}

mostrarPaletaColores();

function mostrarGrilla() {
  for(var i = 0; i < 1750; i++) {
    var pixel = document.createElement("div");
    grillaPixeles.appendChild(pixel);
  }
}

mostrarGrilla();

var selecColor = document.getElementById("indicador-de-color");
paleta.addEventListener("click", mostrarColor);

function mostrarColor(e) {
  selecColor.style.backgroundColor = e.target.style.backgroundColor;
}



//pintar en Grilla
//grillaPixeles.addEventListener("click", pintar);

function pintar(e) {
  e.target.style.backgroundColor = selecColor.style.backgroundColor;

}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    selecColor.style.backgroundColor = colorActual;
  })
);


grillaPixeles.addEventListener("mousedown", pintaClick);
grillaPixeles.addEventListener("mouseup", noPinta);

function pintaClick(e) {
  e.target.style.backgroundColor = pintar(e);
  grillaPixeles.addEventListener("mouseover", pintaMoviendo);
}
function pintaMoviendo(e) {
  e.target.style.backgroundColor = pintar(e);
}

function noPinta(e) {
  grillaPixeles.removeEventListener("mouseover", pintaMoviendo);
} 


var botonBorrar = document.getElementById("borrar");
var $divPixeles = $("#grilla-pixeles div");



botonBorrar.addEventListener("click", function(){
  $divPixeles.animate({"background-color": "white"}, 700);
});

var batmanD = document.getElementById("batman");
var wonderD = document.getElementById("wonder");
var flashD = document.getElementById("flash");
var invisibleD = document.getElementById("invisible");

batmanD.addEventListener("click", function(){
  cargarSuperheroe(batmanDeadpool);
});

wonderD.addEventListener("click", function(){
  cargarSuperheroe(wonder);
});

flashD.addEventListener("click", function(){
  cargarSuperheroe(flash);
});

invisibleD.addEventListener("click", function(){
  cargarSuperheroe(invisible);
});

var botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", function(){
  guardarPixelArt();
});
