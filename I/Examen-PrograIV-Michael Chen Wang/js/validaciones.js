var arrayPreguntas;
var puntaje = 0;
function pageLoad(event) {
    loadSpaces();
    addEventListeners();
    loadList();
}

function loadSpaces() {
    let pregunta = document.getElementById("pregunta");

    let respuestaA = document.getElementById("respuestaA");
    let respuestaB = document.getElementById("respuestaB");
    let respuestaC = document.getElementById("respuestaC");
    let respuestaD = document.getElementById("respuestaD");

    let radioA = document.getElementById("radioA");

    pregunta.value = "Cual es su nombre?";

    respuestaA.value = "Michael Chen W."
    respuestaB.value = "Juanito"
    respuestaC.value = "Juanita"
    respuestaD.value = "Pedro"

    radioA.checked = true;
}

function loadList() {
    arrayPreguntas = Storage.retrieve("Preguntas");
    if (arrayPreguntas == null) {
        arrayPreguntas = [];
        Storage.store("Preguntas", arrayPreguntas);
    }
    listPreguntas(arrayPreguntas);
}

function addEventListeners() {
    let pregunta = document.getElementById("pregunta");
    let respuestaA = document.getElementById("respuestaA");
    let respuestaB = document.getElementById("respuestaB");
    let respuestaC = document.getElementById("respuestaC");
    let respuestaD = document.getElementById("respuestaD");

    let radioA = document.getElementById("radioA");
    let radioB = document.getElementById("radioB");
    let radioC = document.getElementById("radioC");
    let radioD = document.getElementById("radioD");

    addFocusBlur(pregunta);
    addFocusBlur(respuestaA);
    addFocusBlur(respuestaB);
    addFocusBlur(respuestaC);
    addFocusBlur(respuestaD);

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

    let pregunta = elements.namedItem("pregunta");
    let respuestaA = elements.namedItem("respuestaA");
    let respuestaB = elements.namedItem("respuestaB");
    let respuestaC = elements.namedItem("respuestaC");
    let respuestaD = elements.namedItem("respuestaD");

    let error = false;

    error = isBlank(pregunta);
    error = isBlank(respuestaA);
    error = isBlank(respuestaB);
    error = isBlank(respuestaC);
    error = isBlank(respuestaD);

    error = areRadioBtnsChecked(elements);
    

    if (error) {
        event.preventDefault();
        return;
    }
}

function isBlank(element) {
    element.classList.remove("invalid");
    if (element.value.length == 0) {
        element.classList.add("invalid");
        return true;
    }
}
function areRadioBtnsChecked(elements) {
    let radioA = elements.namedItem("radioA");
    let radioB = elements.namedItem("radioB");
    let radioC = elements.namedItem("radioC");
    let radioD = elements.namedItem("radioD");

    radioA.classList.remove("invalid");
    radioB.classList.remove("invalid");
    radioC.classList.remove("invalid");
    radioD.classList.remove("invalid");
    if ((!radioA.checked) && (!radioB.checked) && (!radioC.checked) && (!radioD.checked)) {
        radioA.classList.add("invalid");
        radioB.classList.add("invalid");
        radioC.classList.add("invalid");
        radioD.classList.add("invalid");
        return true;
    }
}

function doSubmit() {
    let pregunta = document.getElementById("pregunta").value;
    let respuestaA = document.getElementById("respuestaA").value;
    let respuestaB = document.getElementById("respuestaB").value;
    let respuestaC = document.getElementById("respuestaC").value;
    let respuestaD = document.getElementById("respuestaD").value;

    let respuestaCorrecta;
    let radios = document.getElementsByName("options");
    radios.forEach( (radio) => {
        if(radio.checked)
            respuestaCorrecta = radio.value;
    } );

    let respuestas = new Respuestas(respuestaA, respuestaB, respuestaC, respuestaD, respuestaCorrecta);
    let question = new Pregunta(arrayPreguntas.length + 1, pregunta, respuestas);
    arrayPreguntas.push(question);

    Storage.store("Preguntas", arrayPreguntas);

    let listado = document.getElementById("listado");
    listPregunta(listado, question);

    document.getElementById("formulario").reset();
}

function listPreguntas(arrayPreguntas) {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (let i in arrayPreguntas) {
        listPregunta(listado, arrayPreguntas[i]);
    }
}

function listPregunta(listado, question) {
    let tr = document.createElement("tr");
    let td;
    let numero = question.numero;
    let pregunta = question.pregunta;

    td = document.createElement("td");
    td.appendChild(document.createTextNode(numero + ". " + pregunta));
    tr.appendChild(td);

    let input;
    let respuestas = question.respuestas;

    let name = "respuestas" + numero;
    td = document.createElement("td");
    input = "<input type='radio' class='radioAns' name='" + name + "' value='A'> " + respuestas.respuestaA;
    td.innerHTML = input;
    tr.appendChild(td);

    td = document.createElement("td");
    input = "<input type='radio' class='radioAns' name='" + name + "' value='B'> " + respuestas.respuestaB;
    td.innerHTML = input;
    tr.appendChild(td);

    td = document.createElement("td");
    input = "<input type='radio' class='radioAns' name='" + name + "' value='C'> " + respuestas.respuestaC;
    td.innerHTML = input;
    tr.appendChild(td);

    td = document.createElement("td");
    input = "<input type='radio' class='radioAns' name='" + name + "' value='D'> " + respuestas.respuestaD;
    td.innerHTML = input;
    tr.appendChild(td);

    listado.appendChild(tr);
    inputAnswerListener(name, respuestas);
}

function inputAnswerListener(name, respuestas) {
    let element;

    let radios = document.getElementsByName(name);
    radios.forEach( (radio) => {
        addListener(radio, respuestas);
    } );
}

function addListener(element, respuestas) {
    let isAnswer = (respuestas.respuestaCorrecta == element.value);
    element.addEventListener("click", (event) => {
        if(respuestas.respuestaEscogida === "Ninguna"){
            if(isAnswer)
                addPoints();
            else
                takePoints();
            respuestas.respuestaEscogida = element.value;
        }
        else {
            if(respuestas.respuestaEscogida != element.value) {
                if(isAnswer)
                    addPoints();
                else
                    takePoints();
                respuestas.respuestaEscogida = element.value;
            }
        }
        Storage.store("Preguntas", arrayPreguntas);
    })
}

function checkRespuestas() {

}

function addPoints() {
    let puntosObt = document.getElementById("puntosObt");
    let puntos = parseInt(puntosObt.textContent) + 1;
    puntosObt.textContent = puntos;
}
function takePoints() {
    let puntosObt = document.getElementById("puntosObt");
    let puntos = parseInt(puntosObt.textContent) - 1;
    puntosObt.textContent = puntos;
}



document.addEventListener("DOMContentLoaded", pageLoad)