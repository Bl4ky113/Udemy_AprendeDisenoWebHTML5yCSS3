/* Obtener Coordenadas con la API de Geolocalización */

// Obtener el elemento con un ID, para que las cooderanas salgan
let output = document.getElementById("location-output");

function getLocation () {
 if (navigator.geolocation) { 
  navigator.geolocation.getCurrentPosition( (position) => {
   output.innerHTML = "Sus Latitud es:  " + position.coords.latitude + ".<br>" +
                      "Y su Longitud es:  " + position.coords.longitude + ".";
  })
 } else {
  output.innerHTML = "Su navegador no es compatible con la <i>API</i> de Geolocalización."
 }
}