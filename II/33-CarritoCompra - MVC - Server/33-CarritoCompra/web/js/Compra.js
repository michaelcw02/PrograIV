  function Compra(cliente,numero,fecha,direccion_envio,total,tarjeta,vencimiento) {
    this.Compra(cliente,numero,fecha,direccion_envio,total,tarjeta,vencimiento);
  }
  
  Compra.prototype={
  	cliente: "",
	numero: "",
	fecha: "",
	direccion_envio: "",
        total: "",
        tarjeta: "",
        vencimiento: "",
	Compra: function(cliente,numero,fecha,direccion_envio,total,tarjeta,vencimiento){
		this.cliente=cliente;
		this.numero=numero;
                this.fecha=fecha;
		this.direccion_envio=direccion_envio;
		this.total=total;
		this.tarjeta=tarjeta;
		this.vencimiento=vencimiento;                
	},
	toString:function(){
	  return this.numero;
	}
  }
  
  Compra.from= function(plain){
    compra = new Compra(plain.cliente,plain.numero,plain.fecha,
        plain.direccion_envio,plain.total,plain.tarjeta,plain.vencimiento);
	return compra;
  };
  
    Compra.to= function(compra){
    return {
        _class : 'Compra',
        cliente:compra.cliente,
        numero:compra.numero,
        fecha:compra.fecha,
        direccion_envio:compra.direccion_envio,
        total:compra.total,
        tarjeta:compra.tarjeta,
        vencimiento:compra.vencimiento
    };	
  };
  