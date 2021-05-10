/* Ejemplo sencillo del canvas */

let canvasEjemplo = document.getElementById("canvas-ejemplo").getContext("2d");

canvasEjemplo.fillRect(0, 0, 50, 50);

/* -- Ejemplo complejo del Canvas -- */

let canvasComplejo = document.getElementById("canvas-complejo").getContext("2d");

// Rectangulos Rojos pequeños
canvasComplejo.fillStyle = "rgba(255, 0, 0, 0.4)";
canvasComplejo.fillRect(0, 0, 30, 30);
canvasComplejo.fillRect(170, 0, 30, 30);
canvasComplejo.fillRect(0, 170, 30, 30);
//Rectangulo Rojo Grande
canvasComplejo.fillRect(30, 30, 100, 100)

//Rectangulos Azules Pequeños
canvasComplejo.fillStyle = "rgba(0, 0, 255, 0.4)";
canvasComplejo.fillRect(170, 170, 30, 30);
canvasComplejo.fillRect(170, 0, 30, 30);
canvasComplejo.fillRect(0, 170, 30, 30);
//Rectangulo Azul Grande
canvasComplejo.fillRect(70, 70, 100, 100);

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

/* Stoke / Lines Styles */

let lineStyle = document.getElementById("canvas-lineStyle").getContext("2d");

// Line Width
lineStyle.beginPath();
lineStyle.moveTo(20, 20);
lineStyle.lineTo(20, 80);
lineStyle.lineWidth = 10;
lineStyle.lineCap = "butt";
lineStyle.stroke();
lineStyle.closePath();

// Line Cap
lineStyle.beginPath();
lineStyle.moveTo(40, 20);
lineStyle.lineTo(40, 80);
lineStyle.lineWidth = 3;
lineStyle.lineCap = "round";
lineStyle.stroke();
lineStyle.closePath();

// Line Join
lineStyle.beginPath();
lineStyle.moveTo(80, 20);
lineStyle.lineTo(80, 80);
lineStyle.lineTo(100, 20);
lineStyle.lineTo(100, 80);
lineStyle.lineTo(120, 20);
lineStyle.lineTo(120, 80);
lineStyle.lineTo(140, 20);
lineStyle.lineTo(140, 80);
lineStyle.lineTo(160, 20);
lineStyle.lineTo(160, 80);
lineStyle.lineTo(180, 20);
lineStyle.lineTo(180, 80);
lineStyle.lineWidth = 3;
lineStyle.lineCap = "round";
lineStyle.lineJoin = "round";
lineStyle.stroke();
lineStyle.closePath();

// Miter Limit
lineStyle.beginPath();
lineStyle.moveTo(200, 20);
lineStyle.lineTo(200, 80);
lineStyle.lineTo(220, 20);
lineStyle.lineTo(220, 80);
lineStyle.lineTo(240, 20);
lineStyle.lineTo(240, 80);
lineStyle.lineTo(260, 20);
lineStyle.lineTo(260, 80);
lineStyle.lineTo(280, 20);
lineStyle.lineTo(280, 80);
lineStyle.lineTo(300, 20);
lineStyle.lineTo(300, 80);
lineStyle.lineWidth = 3;
lineStyle.lineCap = "butt";
lineStyle.lineJoin = "miter";
lineStyle.miterLimit = 25;
lineStyle.stroke();


/* -- Gradiantes en Canvas -- */

let gradiante = document.getElementById("canvas-gradiante");
let gradianteContext = gradiante.getContext("2d");

// Crear una gradiante
let colorGradiante = gradianteContext.createLinearGradient(0, 0, 0, gradiante.height);
colorGradiante.addColorStop(0, "#000");
colorGradiante.addColorStop(1, "#fff");

// Fondo con un rectangulo
gradianteContext.fillStyle = colorGradiante;
gradianteContext.fillRect(0, 0, gradiante.width, gradiante.height)