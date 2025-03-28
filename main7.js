// Solicitar al usuario el diámetro y el grosor de la rueda
let diametro = parseFloat(prompt("Ingrese el diámetro de la rueda (en metros):"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda (en metros):"));

// Inicializar un mensaje para la clasificación de la rueda
let mensajeClasificacion = "";
let mensajeGrosor = "";

// Clasificación según el diámetro
if (diametro > 1.4) {
    mensajeClasificacion = "La rueda es para un vehículo grande.";
    if (grosor < 0.4) {
        mensajeGrosor = "El grosor para esta rueda es inferior al recomendado.";
    }
} else if (diametro > 0.8) {
    mensajeClasificacion = "La rueda es para un vehículo mediano.";
    if (grosor < 0.25) {
        mensajeGrosor = "El grosor para esta rueda es inferior al recomendado.";
    }
} else {
    mensajeClasificacion = "La rueda es para un vehículo pequeño.";
}

// Mostrar los mensajes en la consola
console.log(mensajeClasificacion);
if (mensajeGrosor) {
    console.log(mensajeGrosor);
}