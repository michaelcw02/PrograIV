// funcion Usuario
function Usuario(id, clave, tipo) {
  this.Usuario(id, clave, tipo);
}

// prototype asociado a la funcion Usuario
// solo metodos
Usuario.prototype = {
  Usuario: function (id, clave, tipo) {
    this.id = id;
    this.clave = clave;
    this.tipo = tipo;
  },
  completo: function () { return this.id + ' ' + this.clave + ' ' + this.tipo; },
}

