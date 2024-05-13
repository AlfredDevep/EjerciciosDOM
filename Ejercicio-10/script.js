// Función para calcular el promedio de un array de edades
function calcularPromedio(edades) {
    let total = 0;
    for (let edad of edades) {
        total += edad;
    }
    return total / edades.length;
}

// Función para mostrar los promedios y determinar el turno con el promedio mayor
function mostrarPromedios() {
    // Edades ingresadas por el usuario
    let edadesMañana = [];
    let edadesTarde = [];
    let edadesNoche = [];
    
    // Solicitar al usuario que ingrese las edades para cada turno
    for (let i = 0; i < 5; i++) {
        edadesMañana.push(parseInt(prompt("Ingrese la edad del estudiante " + (i + 1) + " del turno mañana:")));
    }
    for (let i = 0; i < 6; i++) {
        edadesTarde.push(parseInt(prompt("Ingrese la edad del estudiante " + (i + 1) + " del turno tarde:")));
    }
    for (let i = 0; i < 11; i++) {
        edadesNoche.push(parseInt(prompt("Ingrese la edad del estudiante " + (i + 1) + " del turno noche:")));
    }
    
    // Calcular promedios de cada turno
    let promedioMañana = calcularPromedio(edadesMañana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);
    
    // Mostrar promedios por pantalla
    document.getElementById("turnoMañana").innerHTML = "Promedio de edades del turno mañana: " + promedioMañana.toFixed(2);
    document.getElementById("turnoTarde").innerHTML = "Promedio de edades del turno tarde: " + promedioTarde.toFixed(2);
    document.getElementById("turnoNoche").innerHTML = "Promedio de edades del turno noche: " + promedioNoche.toFixed(2);
    
    // Determinar el turno con el promedio mayor
    let turnoMayorPromedio = "";
    let promedioMayor = Math.max(promedioMañana, promedioTarde, promedioNoche);
    if (promedioMayor === promedioMañana) {
        turnoMayorPromedio = "Turno mañana";
    } else if (promedioMayor === promedioTarde) {
        turnoMayorPromedio = "Turno tarde";
    } else {
        turnoMayorPromedio = "Turno noche";
    }
    
    // Mostrar el turno con el promedio mayor por pantalla
    alert("El turno con el promedio de edades mayor es: " + turnoMayorPromedio);
}

// Llamar a la función al cargar la página
mostrarPromedios();