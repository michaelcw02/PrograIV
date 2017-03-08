function sum() {
    var num1 = parseInt(document.getElementById("valor1").value);
    var num2 = parseInt(document.getElementById("valor2").value);
    var total = num1 + num2;
    document.getElementById("resultado").value = total;
    if(total > 100) {
        alert("El total es mayor a 100");
    }
    else {
        alert("El total es menor a 100");
    }
    var diaDeLaSemana="";
    switch (new Date().getDay()) {
        case 0:
            diaDeLaSemana = "Domingo";
        break;
        case 1:
            diaDeLaSemana = "Lunes";
        break;
        case 2:
            diaDeLaSemana = "Martes";
        break;
        case 3:
            diaDeLaSemana = "Miercoles";
        break;
        case 4:
            diaDeLaSemana = "Jueves";
        break;
        case 5:
            diaDeLaSemana = "Viernes";
        break;
        case 6:
            diaDeLaSemana = "Sabado";
        break;
        default:
            diaDeLaSemana = "No existe";
        break;        
    }
    alert("El dia de la semana es " + diaDeLaSemana);
    //sentencias iterativas 
    var opciones = "";
    for (var i = 0; i < 10; i++) {
        opciones = opciones + "<option value=''" + i + ">" + i + "</option>"
    }
    document.getElementById("numeros").innerHTML = opciones;
}

