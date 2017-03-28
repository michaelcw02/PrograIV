function Estudiante (carnet, apellidos, nombre, examenes) {
    this.Estudiante(carnet, apellidos, nombre, examenes);
}

Estudiante.prototype = {
    Estudiante: function (carnet, apellidos, nombre, examenes) {
        this.carnet = carnet;
        this.apellidos = apellidos;
        this.nombre = nombre;
        this.examenes = examenes;
    }
}