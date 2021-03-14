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