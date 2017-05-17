  function Cliente(id,nombre,correo,direccion_envio,telefono) {
    this.Cliente(id,nombre,correo,direccion_envio,telefono);
  }
  
  Cliente.prototype={
  	id: "",
	nombre: "",
	correo: "",
	direccion_envio: "",
        telefono: "",
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
  
  Cliente.from= function(plain){
    cliente = new Cliente(plain.id,plain.nombre,plain.correo,
        plain.direccion_envio,plain.telefono);
	return cliente;
  };
  
    Cliente.to= function(cliente){
    return {
        _class : 'Cliente',
        id:cliente.id,
        nombre:cliente.nombre,
        correo:cliente.correo,
        direccion_envio:cliente.direccion_envio,
        telefono:cliente.telefono
    };	
  };
  