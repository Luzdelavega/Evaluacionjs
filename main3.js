// Definición del arreglo original
const arreglo = [5, 1, 8, 6, 3];
const arregloNuevo = new Array(arreglo.length);

// Usando un bucle for para invertir el arreglo
for (let i = 0; i < arreglo.length; i++) {
    arregloNuevo[i] = arreglo[arreglo.length - 1 - i];
}

// Mostrar el resultado en el HTML
document.getElementById('resultado').innerText = `Arreglo invertido: [${arregloNuevo.join(', ')}]`;