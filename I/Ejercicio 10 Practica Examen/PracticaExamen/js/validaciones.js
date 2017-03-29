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
    if (arrayEstudiantes == null) {
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

    if (error)
        event.preventDefault();
}

function isBlank(element) {
    element.classList.remove("invalid");
    if (element.value.length == 0) {
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
    
    let listado = document.getElementById("listado");
    listEstudiante(listado, estudiante);

    document.getElementById("formulario").reset();
}

function listEstudiantes(arrayEstudiantes) {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (let i in arrayEstudiantes) {
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

    td = document.createElement("td");
    input = "<input type='text' name='examen1' id='examen1' value='" + examenes[0] + "'>";
    td.innerHTML = input;
    tr.appendChild(td);

    td = document.createElement("td");
    input = "<input type='text' name='examen2' id='examen2' value='" + examenes[1] + "'>";
    td.innerHTML = input;
    tr.appendChild(td);

    td = document.createElement("td");
    input = "<input type='text' name='examen3' id='examen3' value='" + examenes[2] + "'>";
    td.innerHTML = input;
    tr.appendChild(td);

    var id = estudiante.carnet;
    td = document.createElement("td");
    label = "<label class='promedio' id='" + id + "' for='promedio'></label>";
    td.innerHTML = label;
    tr.appendChild(td);

    listado.appendChild(tr);
    inputExamListener(estudiante);
    setPromedio(estudiante);
}

function inputExamListener(estudiante) {
    let element;
    element = document.getElementById("examen1");
    addListener(element, estudiante, 0);
    element = document.getElementById("examen2");
    addListener(element, estudiante, 1);
    element = document.getElementById("examen3");
    addListener(element, estudiante, 2);
}
function addListener(element, estudiante, i) {
    element.addEventListener("blur", (event) => {
         estudiante.examenes.arrayExamenes[i] = parseFloat(event.target.value);
         setPromedio(estudiante);
    })
}
function setPromedio(estudiante) {
    let id = estudiante.carnet;
    label = document.getElementById(id);
    label.innerHTML = estudiante.examenes.getPromedio();
}

document.addEventListener("DOMContentLoaded", pageLoad)