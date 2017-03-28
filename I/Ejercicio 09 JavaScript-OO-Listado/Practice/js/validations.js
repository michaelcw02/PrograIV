
function pageLoad(event) {
    addEventListeners();
    
}

/*  auto add
    let a = [];
    a.push(cedula);
    a.push(nombre);
    a.push(direccion);
    a.push(canton);
    a.push(distrito);
    a.push(provincia);
    for( i in a) a[i].value = "jiji";
*/
function addEventListeners() {
    let cedula = document.getElementById("cedula");
    let nombre = document.getElementById("nombre");
    let direccion = document.getElementById("direccion");
    let canton = document.getElementById("canton");
    let distrito = document.getElementById("distrito");
    let provincia = document.getElementById("provincia");
    
}



document.addEventListener("DOMContentLoaded",pageLoad)