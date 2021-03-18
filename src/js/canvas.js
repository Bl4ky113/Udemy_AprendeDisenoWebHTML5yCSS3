/* Ejemplo sencillo del canvas */

let canvasEjemplo = document.getElementById("canvas-ejemplo").getContext("2d");

canvasEjemplo.fillRect(0, 0, 50, 50);

/* -- Ejemplo complejo del Canvas -- */

let canvasComplejo = document.getElementById("canvas-complejo").getContext("2d");

// Rectangulos Rojos pequeños
canvasComplejo.fillStyle = "rgba(255, 0, 0, 0.4)";
canvasComplejo.fillRect(0, 0, 30, 30);
canvasComplejo.fillRect(270, 0, 30, 30);
canvasComplejo.fillRect(0, 270, 30, 30);
//Rectangulo Rojo Grande
canvasComplejo.fillRect(30, 30, 150, 150)

//Rectangulos Azules Pequeños
canvasComplejo.fillStyle = "rgba(0, 0, 255, 0.4)";
canvasComplejo.fillRect(270, 270, 30, 30);
canvasComplejo.fillRect(270, 0, 30, 30);
canvasComplejo.fillRect(0, 270, 30, 30);
//Rectangulo Azul Grande
canvasComplejo.fillRect(120, 120, 150, 150);

/* -- Ejemplo de Figuras en el Canvas -- */

/* Rectangulo Relleno */

let rectanguloRelleno = document.getElementById("canvas-rectangulorelleno").getContext("2d"); //100x100

// Dibujar el Rectangulo
rectanguloRelleno.fillRect(10, 10, 90, 90);

/* Rectangulo Vacio */

let rectanguloVacio = document.getElementById("canvas-rectangulovacio").getContext("2d"); //100x100

// Dibujar un rectangulo
rectanguloVacio.fillRect(10, 10, 80, 80);

// Borrar parte del rectangulo
rectanguloVacio.clearRect(20, 20, 60, 60);

/* Rectangulo con bordes */

let rectanguloBorde = document.getElementById("canvas-rectanguloborde").getContext("2d"); //100x100

// Dibujar el rectangulo bordeado
rectanguloBorde.strokeRect(20, 20, 60, 60);

/* -- Ejemplo Propias Figuras (Triangulo) -- */

let triangulo = document.getElementById("canvas-triangulo").getContext("2d");

// Iniciar el trazo
triangulo.beginPath();
// Hacer el triangulo relleno
triangulo.moveTo(10, 10);
triangulo.lineTo(80, 10);
triangulo.lineTo(10, 80);
triangulo.lineTo(10, 10);
triangulo.fill();
// Cerrar el trazo
triangulo.closePath();

// Iniciar el trazo
triangulo.beginPath();
// Hacer el triangulo con borde
triangulo.moveTo(90, 90);
triangulo.lineTo(20, 90);
triangulo.lineTo(90, 20);
triangulo.lineTo(90, 90);
triangulo.stroke();
// Cerrar el trazo
triangulo.closePath();

/* -- Styles en Canvas -- */

/* fillStyle Color */

let rellenarColor = document.getElementById("canvas-rellenarColor").getContext("2d");

// Rellenar con el Color en un Rect.
rellenarColor.fillStyle = "#d03";
rellenarColor.fillRect(10, 10, 40, 40);

// Rellenar con el Color en una figura
rellenarColor.beginPath();
rellenarColor.moveTo(90, 90);
rellenarColor.lineTo(40, 90);
rellenarColor.lineTo(65, 65);
rellenarColor.lineTo(90, 90);
rellenarColor.fillStyle = "#aa02df";
rellenarColor.fill();
rellenarColor.closePath();

/* strokeStyle Color */

let borderColor = document.getElementById("canvas-bordeColor").getContext("2d");

// Colorear el borde de un Rect
borderColor.strokeStyle = "#03ee01";
borderColor.strokeRect(10, 10, 40, 40);

// Colorear el borde de una figura
borderColor.beginPath();
borderColor.moveTo(90, 90);
borderColor.lineTo(30, 90);
borderColor.lineTo(60, 60);
borderColor.lineTo(90, 90)
borderColor.strokeStyle = "#eeee00";
borderColor.stroke();
borderColor.closePath();