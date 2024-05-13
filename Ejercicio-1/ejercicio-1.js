/**
 * Crear una función que en base a la edad que ingreso el 
 * usuario devolver un mensaje si la persona es mayor de 
 * edad o no. Utilizar para la condición el operador ternario.
 */

function calcularEdad(edad){
    return edad>18? `La persona es Mayor de edad, la edad es ${edad}`: 
                    `La persona es menor de Edad, la edad es ${edad}`;
}

console.log(calcularEdad(12));