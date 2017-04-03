function Pregunta (numero, pregunta, respuestas) {
    this.Pregunta(numero, pregunta, respuestas);
}

Pregunta.prototype = {
    Pregunta: function (numero, pregunta, respuestas) {
        this.numero = numero;
        this.pregunta = pregunta;
        this.respuestas = respuestas;
    }
}