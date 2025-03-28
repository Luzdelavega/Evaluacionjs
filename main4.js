// Definición del arreglo
const arreglo = [4, 5, 1, 8, 3];

// Inicializar la variable para el número mayor
let numeroMayor = arreglo[0];

// Usando un bucle for para encontrar el número mayor
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i];
    }
}

// Mostrar el resultado en el HTML
document.getElementById('resultado').innerText = `El número mayor es: ${numeroMayor}`;