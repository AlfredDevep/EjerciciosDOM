/**
EJERCICIO 2: Crear una función que determine la nota 
final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, 
nombre, carnet y nota final.

 */

const notaFinal = function(nombre, carnet, exa, tareas, asis, inves){
    let notaFina = parseInt(((exa * 0.2) + (tareas * 0.4) +  (asis * 0.1) + (inves * 0.3)));
    console.log(`La nota final para ${nombre} con numero de carnet: ${carnet} es => ${notaFina}`)
}

notaFinal("Criss", "23334", 10, 10, 5, 5);