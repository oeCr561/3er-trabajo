document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const monto = parseFloat(document.getElementById("entrada").value);


    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un monto válido mayor a 0.";
        return;
    }

    const porcentaje = monto * 0.30;

    document.getElementById("resultado").textContent = "El monto ingresado es: ${monto.toFixed(2)}€\nEl 30% de este monto es: ${porcentaje.toFixed(2)}€";
});