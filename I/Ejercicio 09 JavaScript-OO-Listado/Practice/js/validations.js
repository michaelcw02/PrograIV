var arrayPersonas;
function pageLoad(event) {
    addEventListeners();
    loadSpaces();
    loadTable();
}

function loadSpaces() {
    let cedula = document.getElementById("cedula");
    let nombre = document.getElementById("nombre");
    let dir = document.getElementById("direccion");
    let canton = document.getElementById("canton");
    let distrito = document.getElementById("distrito");
    let provincia = document.getElementById("provincia");

    document.getElementById("sexMasc").checked = true;
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

function loadPersonas() {
    arrayPersonas = Storage.retrieve("Personas");
    if(arrayPersonas == null) {
        arrayPersonas = [];
        Storage.store("Personas", arrayPersonas);
    }
}

function doSubmit() {
    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let sexMasc = document.getElementById("sexMasc");
    let sexFem = document.getElementById("sexFem");
    let sexo = (sexMasc.checked) ? "M" : "F";
    let dir = document.getElementById("direccion").value;
    let canton = document.getElementById("canton").value;
    let distrito = document.getElementById("distrito").value;
    let provincia = document.getElementById("provincia").value;

    let direccion = new Direccion(dir, canton, distrito, provincia);
    let persona = new Persona(cedula, nombre, sexo, direccion);
    arrayPersonas.push(persona);
    Storage.store("Personas", arrayPersonas);
    listPersona(persona);
    document.getElementById("formulario").reset();
}

function loadTable() {
    loadPersonas();
    arrayPersonas.forEach(listPersona);
}
function listPersona(persona) {
    let table = document.getElementById("table-personas");
    let tr = document.createElement("tr");
    let td;
    let item;

    td = document.createElement("td");
    item = persona.cedula;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    td = document.createElement("td");
    item = persona.nombre;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    td = document.createElement("td");
    item = persona.sex();
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    let direccion = persona.direccion;

    td = document.createElement("td");
    item = direccion.dir;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    td = document.createElement("td");
    item = direccion.canton;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    td = document.createElement("td");
    item = direccion.distrito;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);

    td = document.createElement("td");
    item = direccion.provincia;
    td.appendChild(document.createTextNode(item));
    tr.appendChild(td);
    
    td = document.createElement("td");
    item = document.createElement("img");
    item.alt = "Edit";
    item.title = "Edit";
    item.src = "images/glyphicons-31-pencil.png";
    addClickFunction(item, doEdit, persona);
    td.appendChild(item);
    tr.appendChild(td);
    
    td = document.createElement("td");
    item = document.createElement("img");
    item.alt = "Delete";
    item.title = "Delete";
    item.src = "images/glyphicons-208-remove.png";
    addClickFunction(item, doDelete, persona);
    td.appendChild(item);
    tr.appendChild(td);

    table.appendChild(tr);
}

/**
 * Generic function 
 * @param {Any Element in HTML} element 
 * @param {Function to do} toDo 
 * @param {Any other object that needs the function} object 
 */
function addClickFunction(element, toDo, object = undefined) {
    element.addEventListener("click", (event) => {
        (object !== undefined) ? toDo(object) : toDo();
    })
}

function doEdit(persona) {
    
}
function doDelete(persona) {

}

//$(document).ready(pageLoad);
document.addEventListener("DOMContentLoaded",pageLoad)