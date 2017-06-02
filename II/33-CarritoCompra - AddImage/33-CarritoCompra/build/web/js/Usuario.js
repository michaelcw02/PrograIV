  function Usuario(id,clave,tipo) {
    this.Usuario(id,clave,tipo);
  }
  
  Usuario.prototype={
	Usuario: function(id,clave,tipo){
		this.id=id;
		this.clave=clave;
		this.tipo=tipo;
	},
	toString:function(){
	  return this.id;
	}
  };
