  function Cliente(id,nombre,correo,direccion_envio,telefono) {
    this.Cliente(id,nombre,correo,direccion_envio,telefono);
  }
  
  Cliente.prototype={
	Cliente: function(id,nombre,correo,direccion_envio,telefono){
		this.id=id;
		this.nombre=nombre;
                this.correo=correo;
		this.direccion_envio=direccion_envio;
		this.telefono=telefono;
	},
	toString:function(){
	  return this.id;
	}
  }
  