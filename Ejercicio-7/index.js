// Inicializamos las variables para contar los diferentes tipos de valores
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

// Solicitamos al usuario que ingrese 10 valores enteros
for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt("Ingrese un valor entero: "));
    
    // Contamos los negativos y positivos
    if (valor < 0) {
        negativos++;
    } else if (valor > 0) {
        positivos++;
    }
    
    // Contamos los múltiplos de 15
    if (valor % 15 === 0) {
        multiplosDe15++;
    }
    
    // Sumamos los valores pares
    if (valor % 2 === 0) {
        sumaPares += valor;
    }
}

// Construimos el mensaje a mostrar
let mensaje = "Cantidad de valores negativos: " + negativos + "<br>" +
              "Cantidad de valores positivos: " + positivos + "<br>" +
              "Cantidad de múltiplos de 15: " + multiplosDe15 + "<br>" +
              "Valor acumulado de los números ingresados que son pares: " + sumaPares;

// Actualizamos el contenido del elemento con id "resultados"
document.getElementById("resultados").innerHTML = mensaje;