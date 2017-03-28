var arrayEstudiantes;
function pageLoad(event) {
    addEventListeners();
    loadList();
    loadSpaces();
}

function loadSpaces() {
    let carnet = document.getElementById("carnet");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let canton = document.getElementById("canton");
    let distrito = document.getElementById("distrito");
    let provincia = document.getElementById("provincia");

    carnet.value = "116290538";
    apellidos.value = "Chen W.";
    nombre.value = "Michael";
}

function loadList() {
    if(arrayEstudiantes == null) {
        arrayEstudiantes = [];
        Storage.store("Estudiantes", arrayEstudiantes);
    }
    listEstudiantes(arrayEstudiantes);
}

function addEventListeners() {
    let carnet = document.getElementById("carnet");
    let apellidos = document.getElementById("apellidos");
    let nombre = document.getElementById("nombre");

    addFocusBlur(carnet);
    addFocusBlur(nombre);
    addFocusBlur(apellidos);

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

    let carnet = elements.namedItem("carnet");
    let apellidos = elements.namedItem("apellidos");
    let nombre = elements.namedItem("nombre");
    
    let error = false;
    
    error = isBlank(carnet);
    error = isBlank(nombre);
    error = isBlank(apellidos);

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
    var array = Storage.retrieve("Personas");
    console.log(array);
}

function doSubmit() {
    let carnet = document.getElementById("carnet").value;
    let apellidos = document.getElementById("apellidos").value;
    let nombre = document.getElementById("nombre").value;

    let examenes = new Examenes();
    let estudiante = new Estudiante(carnet, apellidos, nombre, examenes);
    arrayEstudiantes.push(estudiante);

    Storage.store("Estudiantes", arrayEstudiantes);
    listEstudiantes(arrayEstudiantes);

    document.getElementById("formulario").reset();
}

function listEstudiantes(arrayEstudiantes) {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for(let i in arrayEstudiantes) {
        listEstudiante(listado, arrayEstudiantes[i]);
    }
}

function listEstudiante(listado, estudiante) {
    let tr = document.createElement("tr");
    let td;
    
    td = document.createElement("td");
    td.appendChild(document.createTextNode(estudiante.carnet));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(estudiante.apellidos));
    tr.appendChild(td);

    td = document.createElement("td");
    td.appendChild(document.createTextNode(estudiante.nombre));
    tr.appendChild(td);

    let input;
    let examenes = estudiante.examenes.arrayExamenes;

    for(let i in examenes)
        console.log(examenes[i]);

    td = document.createElement("td");
    input = "<input type='text' name='examen1' id='examen1'>"
    td.appendChild(document.createTextNode(estudiante.nombre));
    tr.appendChild(td);


    listado.appendChild(tr);

}

document.addEventListener("DOMContentLoaded",pageLoad)