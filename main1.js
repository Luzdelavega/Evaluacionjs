// Solicitar al usuario dos números entre 1 y 50
let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

// Validar que los números estén en el rango correcto
if ((numero1 < 1 || numero1 > 50) || (numero2 < 1 || numero2 > 50)) {
    console.error("Los números deben estar entre 1 y 50.");
} else {
    // Mostrar los números del 1 al 50
    for (let i = 1; i <= 50; i++) {
        if (i === numero1 || i === numero2) {
            console.log("¡Lotería!");
        } else {
            console.log(i);
        }
    }
}