// Precio base del helado y precios de los toppings
const precioHelado = 50;
const preciosToppings = {
    "oreo": 10,
    "kitkat": 15,
    "brownie": 20
};

// Solicitar al usuario el topping que desea
let toppingElegido = prompt("¿Qué topping deseas? (oreo, kitkat, brownie)").toLowerCase();

// Calcular el costo total
let costoTotal = precioHelado;

if (toppingElegido in preciosToppings) {
    costoTotal += preciosToppings[toppingElegido];
    console.log(`El costo total de tu helado con topping de ${toppingElegido} es: ${costoTotal} MXN.`);
} else {
    console.log("No tenemos este topping, lo sentimos.");
    console.log(`El precio del helado sin topping es: ${precioHelado} MXN.`);
}