// Seleccionar el elemento donde se mostrará el resultado
const resultado = document.getElementById('resultado');

// Iterar del 1 al 100
for (let i = 1; i <= 100; i++) {
    let output = '';

    // Verificar si es múltiplo de 3
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    
    // Verificar si es múltiplo de 5
    if (i % 5 === 0) {
        output += 'Buzz';
    }
    
    // Si no es múltiplo de 3 ni de 5, usar el número
    if (output === '') {
        output = i;
    }

    // Mostrar el resultado en el elemento HTML
    resultado.innerText += output + '\n';
}