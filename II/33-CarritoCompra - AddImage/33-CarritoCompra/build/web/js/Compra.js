  function Compra(cliente,numero,fecha,direccion_envio,total,tarjeta,vencimiento) {
    this.Compra(cliente,numero,fecha,direccion_envio,total,tarjeta,vencimiento);
  }
  
  Compra.prototype={
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
  