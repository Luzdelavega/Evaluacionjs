// Precios de los cursos
const preciosCursos = {
    "Course": 4999,
    "Carrera": 3999,
    "Master": 2999
};

// Duraciones de los cursos en meses
const duracionesCursos = {
    "Course": 2,
    "Carrera": 6,
    "Master": 12
};

// Descuentos por beca
const descuentosBecas = {
    "Facebook": 0.20,
    "Google": 0.15,
    "Jesua": 0.50
};

// Solicitar al usuario el curso que desea
let cursoElegido = prompt("¿Qué curso deseas? (Course, Carrera, Master)").trim();
let becaElegida = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua) o presiona Enter si no tienes").trim();

// Verificar si el curso elegido es válido
if (cursoElegido in preciosCursos) {
    let precioMensual = preciosCursos[cursoElegido];
    let duracion = duracionesCursos[cursoElegido];
    
    // Aplicar descuento si hay beca
    if (becaElegida in descuentosBecas) {
        let descuento = descuentosBecas[becaElegida];
        precioMensual *= (1 - descuento);
        console.log(`Tienes un descuento del ${descuento * 100}%.`);
    } else if (becaElegida) {
        console.log("No tenemos esta beca, lo sentimos.");
    }

    // Calcular el costo total
    let costoTotal = precioMensual * duracion;
    
    console.log(`El costo mensual del curso ${cursoElegido} es: ${precioMensual.toFixed(2)} MXN.`);
    console.log(`El costo total por ${duracion} meses es: ${costoTotal.toFixed(2)} MXN.`);
} else {
    console.log("Curso no válido. Por favor, elige entre Course, Carrera o Master.");
}