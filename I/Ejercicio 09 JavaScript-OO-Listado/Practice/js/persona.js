
function Persona(cedula, nombre, sexo, dir) {
    this.Persona(cedula, nombre, sexo, dir);
}
function sex() {
    if(this.sexo === "M")
        return "Male";
    if(this.sexo === "F")
        return "Female";
    return "None";
}

Persona.prototype = {
    Persona: function (cedula, nombre, sexo, dir) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.sexo = sexo;
        this.dir = dir;
    },
/*    toString: function() {
        return  this.cedula + ": " + this.nombre + " is " + sex() + " and lives in " + this.dir.toString();
    }*/
}

