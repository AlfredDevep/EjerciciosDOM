function convertirTemperatura() {
    // Obtener la temperatura en Celsius ingresada por el usuario
    let celsius = parseFloat(document.getElementById("celsius").value);
    
    // Convertir la temperatura a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Mostrar la temperatura en Fahrenheit
    let mensaje = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>";
    
    // Determinar el mensaje correspondiente según el rango de temperatura en Fahrenheit
    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje += "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje += "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje += "Temperatura alta";
    } else {
        mensaje += "Temperatura desconocida";
    }
    
    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = mensaje;
}