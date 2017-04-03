Storage = {
    store: function (id, object) {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },
    replacer: function (key, value) {
        if (value instanceof Pregunta)
            value._class = "Pregunta";
        if (value instanceof Respuestas) {
            value._class = "Respuestas";
        }
        return value;
    },

    retrieve: function (id) {
        let jsonObject = localStorage.getItem(id);
        return (jsonObject == undefined) ? undefined : JSON.parse(jsonObject, this.reviver);
    },
    reviver: function (key, value) {
        if (value instanceof Object && value._class == "Pregunta") {
            return new Pregunta(value.numero, value.pregunta, value.respuestas);
        }
        if (value instanceof Object && value._class == "Respuestas") {
            return new Respuestas(value.respuestaA, value.respuestaB, value.respuestaC, value.respuestaD, value.respuestaCorrecta);
        }
        return value;
    }
}
