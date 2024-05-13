function mostrarTabla() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById("numero").value);
    
    // Validar si el número ingresado es válido
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido");
        return;
    }
    
    // Construir la tabla de multiplicar
    let tablaHTML = "<h2>Tabla de multiplicar del " + numero + "</h2>";
    tablaHTML += "<table>";
    for (let i = 1; i <= 10; i++) {
        tablaHTML += "<tr><td>" + numero + " x " + i + 
        "</td><td>= </td><td>" + ( numero * i) + "</td></tr>";
    }
    tablaHTML += "</table>";
    
    // Mostrar la tabla en el elemento con id "tabla"
    document.getElementById("tabla").innerHTML = tablaHTML;
}