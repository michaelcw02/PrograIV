 // funcion Persona
function Persona (cedula,nombre,sexo, direccion){ 
  this.Persona(cedula,nombre,sexo, direccion);
}

// prototype asociado a la funcion Persona
// solo metodos
Persona.prototype={ 
  Persona: function(cedula,nombre,sexo, direccion){
    this.cedula=cedula;
    this.nombre=nombre;
    this.sexo=sexo;
    this.direccion = direccion;
  },
  completo: function (sep) { return this.cedula +  sep + this.nombre; }
}