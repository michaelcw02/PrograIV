
function Persona(cedula, nombre, sexo, direccion) {
    this.Persona(cedula, nombre, sexo, direccion);
}

Persona.prototype = {
    Persona: (cedula, nombre, sexo, direccion) => {
                this.cedula = cedula;
                this.nombre = nombre;
                this.sexo = sexo;
                this.direccion = direccion;
            },
    toString: () => {
                return cedula + ": " + nombre + " is " + sexo + " and lives in " + direccion.toString();    
            }
}