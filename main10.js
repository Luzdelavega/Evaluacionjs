function calculateCost() {
    const vehicle = document.getElementById('vehicle').value.toLowerCase();
    const kms = parseFloat(document.getElementById('kms').value);
    const liters = parseFloat(document.getElementById('liters').value);

    let pricePerKm;
    switch (vehicle) {
        case 'coche':
            pricePerKm = 0.20;
            break;
        case 'moto':
            pricePerKm = 0.10;
            break;
        case 'autobús':
            pricePerKm = 0.50;
            break;
        default:
            alert("Tipo de vehículo no válido. Por favor, ingrese 'coche', 'moto' o 'autobús'.");
            return;
    }

    let extraCost = (liters <= 100) ? 5 : 10;
    let totalCost = (pricePerKm * kms) + extraCost;

    document.getElementById('result').innerText = `Total a pagar: $${totalCost.toFixed(2)} MXN`;
}