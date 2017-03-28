var arrayPersonas = [];
function pageLoad(event) {
    addEventListeners();
    loadSpaces();
    
}


function loadSpaces() {
    let cedula = document.getElementById("cedula");
    let nombre = document.getElementById("nombre");
    let dir = document.getElementById("direccion");
    let canton = document.getElementById("canton");
    let distrito = document.getElementById("distrito");
    let provincia = document.getElementById("provincia");

    cedula.value = "116290538";
    nombre.value = "Michael Chen W.";
    dir.value = "25 mts Este de la Plaza";
    canton.value = "Barrio San Jose";
    distrito.value = "Alajuela";
    provincia.value = "Alajuela";
}

function addEventListeners() {
    let cedula = document.getElementById("cedula");
    let nombre = document.getElementById("nombre");
    let direccion = document.getElementById("direccion");
    let canton = document.getElementById("canton");
    let distrito = document.getElementById("distrito");
    let provincia = document.getElementById("provincia");

    addFocusBlur(cedula);
    addFocusBlur(nombre);
    addFocusBlur(direccion);
    addFocusBlur(canton);
    addFocusBlur(distrito);
    addFocusBlur(provincia);

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", doValidate);
}

function addFocusBlur(element) {
    element.addEventListener("focus", (event) => event.target.classList.add("focus"));
    element.addEventListener("blur", (event) => event.target.classList.remove("focus"));
}
function doValidate(event) {
    let formulario = event.target;
    let elements = formulario.elements;

    let cedula = elements.namedItem("cedula");
    let nombre = elements.namedItem("nombre");
    let direccion = elements.namedItem("direccion");
    let canton = elements.namedItem("canton");
    let distrito = elements.namedItem("distrito");
    let provincia = elements.namedItem("provincia");
    let sexMasc = elements.namedItem("sexMasc");
    let sexFem = elements.namedItem("sexFem");
    
    let error = false;
    error = isBlank(cedula);
    error = isBlank(nombre);
    error = isBlank(direccion);
    error = isBlank(canton);
    error = isBlank(distrito);
    error = isBlank(provincia);

    sexMasc.classList.remove("invalid");
	sexFem.classList.remove("invalid");
	if ( (!sexMasc.checked) && (!sexFem.checked) ){
		sexMasc.classList.add("invalid");
		sexFem.classList.add("invalid");
		error=true;
	}

    if(error)
        event.preventDefault();
}

function isBlank(element) {    
    element.classList.remove("invalid");
	if (element.value.length == 0){
		element.classList.add("invalid");
		return true;
	}
}

function doSubmit() {
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let sexMasc = document.getElementById("sexMasc").value;
    let sexo = (sexMasc.checked) ? "M" : "F";
    let dir = document.getElementById("direccion").value;
    let canton = document.getElementById("canton").value;
    let distrito = document.getElementById("distrito").value;
    let provincia = document.getElementById("provincia").value;

    var direccion = new Direccion(dir, canton, distrito, provincia);
    var persona = new Persona(cedula, nombre, sexo, direccion);
    arrayPersonas.push(persona);
    Storage.store("Persona", arrayPersonas);
    
    document.getElementById("formulario").reset();
}

document.addEventListener("DOMContentLoaded",pageLoad)