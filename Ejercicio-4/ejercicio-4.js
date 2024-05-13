/**
 Crear una función que en base a 2 números enteros 
 que ingrese el usuario,
 calcular cual número es el mayor y devolverlo. 
 */


 const calcularNumeroMayor = function (num1, num2 ){

    if(num1 > num2){
        return (`Numero ${num1} es el numero mayor`);
    }
    else{
        return (`Numero ${num2} es el numero mayor`)
    }
 }

console.log(calcularNumeroMayor(120, 220))