
function Respuestas(respuestaA = "Sin respuesta A", 
                    respuestaB = "Sin respuesta B", 
                    respuestaC = "Sin respuesta C", 
                    respuestaD = "Sin respuesta D", 
                    respuestaCorrecta = "Sin respuesta Correcta", 
                    respuestaEscogida = "Ninguna") 
{
    this.Respuestas(respuestaA, respuestaB, respuestaC, respuestaD, respuestaCorrecta, respuestaEscogida);
}

Respuestas.prototype = {
    Respuestas: function(respuestaA, respuestaB, respuestaC, respuestaD, respuestaCorrecta, respuestaEscogida) {
        this.respuestaA = respuestaA;
        this.respuestaB = respuestaB;
        this.respuestaC = respuestaC;
        this.respuestaD = respuestaD;
        this.respuestaCorrecta = respuestaCorrecta;
        this.respuestaEscogida = respuestaEscogida;
    }
}