// Definición del arreglo
const arreglo = [3, 4, 5, 12, 6, 1, 13];
const arregloPar = [];

// Usando un bucle for para encontrar los números pares
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        arregloPar.push(arreglo[i]);
    }
}

// Mostrar el resultado en el HTML
document.getElementById('resultado').innerText = `Arreglo de números pares: [${arregloPar.join(', ')}]`;