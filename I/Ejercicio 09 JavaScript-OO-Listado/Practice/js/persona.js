
function Persona(cedula, nombre, sexo, direccion) {
    this.Persona(cedula, nombre, sexo, direccion);
}

Persona.prototype = {
    Persona: function (cedula, nombre, sexo, direccion) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.sexo = sexo;
        this.direccion = direccion;
    },
    sex: function () {
        if (this.sexo === "M")
            return "Male";
        if (this.sexo === "F")
            return "Female";
        return "None";
    }
    /*    toString: function() {
            return  this.cedula + ": " + this.nombre + " is " + sex() + " and lives in " + this.dir.toString();
        }*/
}

