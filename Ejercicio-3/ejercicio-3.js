/**
 EJERCICIO 3:

CATEGORIA AUMENTO
    A   =>   15%
    B   =>  30%
    C   =>  10%
    D   =>  20%

Calcular el aumento de trabajador tomando en cuenta la 
tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes 
variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el 
aumento salarial.

 */

const calcularAumento = (nombre, salario, categoria) => {
    let aumento = 0;
    let totalPagar = 0;

    switch(categoria){
        case 'A':
        case 'a':
            aumento = parseInt((salario * 0.15));
            totalPagar = salario + aumento;
            break;
            
        case 'B':
        case 'b':
                    
            aumento = parseInt((salario * 0.3));
            totalPagar = salario + aumento;
            break;

        case 'C':
        case 'c':
                        
            aumento = parseInt((salario * 0.1));
            totalPagar = salario + aumento;
            break;

        case 'C':
        case 'c':
                            
            aumento = parseInt((salario * 0.2));
            totalPagar = salario + aumento;
            break;
        }

    console.log(`${nombre} tiene un salario de $${salario} y un aumento de 
                $${aumento} el sueldo total a pagar es $${totalPagar}`)
};



calcularAumento('jose', 120, 'b');