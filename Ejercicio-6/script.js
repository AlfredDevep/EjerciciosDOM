function calcularDescuento() {
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var precio = parseFloat(document.getElementById("precio").value);
    var descuento = 0;

    if(precio <0){


        document.getElementById("resultado").innerHTML = 'Enter numero valido o positivo'
    }else{
        if (origen.toLowerCase() === "palma" && destino.toLowerCase() === "la costa del sol") {
            descuento = 0.05;
        } else if (destino.toLowerCase() === "panchimalco") {
            descuento = 0.1;
        } else if (destino.toLowerCase() === "puerto el triunfo") {
            descuento = 0.15;
        }

        var montoDescuento = precio * descuento;
    var precioFinal = precio - montoDescuento;
    
    document.getElementById("resultado").innerHTML = "El precio final del viaje con descuento es: $" + precioFinal.toFixed(2);

    }
    

    
}