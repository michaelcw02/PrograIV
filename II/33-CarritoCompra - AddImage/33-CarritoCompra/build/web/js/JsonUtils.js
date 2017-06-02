var JsonUtils = JsonUtils || {};

JsonUtils.store=function (id, carrito){
	sessionStorage.setItem(id, JSON.stringify(carrito,replacer));
};

JsonUtils.retrieve= function (id){
  var jsonCarrito = sessionStorage.getItem(id);
  if(jsonCarrito === null){
	return new Carrito();
  }
  else{
	return JSON.parse(jsonCarrito,revive);
  }
};

JsonUtils.revive = function (k,v) {
	if (v instanceof Object && v._class == 'Usuario') {
		return new Usuario(v.id,v.clave,v.tipo);
	}    
	if (v instanceof Object && v._class == 'Cliente') {
		return new Cliente(v.id,v.nombre,v.correo,v.direccion_envio,v.telefono);
	}    
	if (v instanceof Object && v._class == 'Producto') {
		new Producto(v.codigo,v.descripcion,v.precio,v.categorias);
	}	
	if (v instanceof Object && v._class == 'Compra') {
		return new Compra(v.cliente,v.numero,v.fecha,v.direccion_envio,v.total,v.tarjeta,v.vencimiento);
	}	
    return v;
};

JsonUtils.replacer = function (k,v) {
	if (v instanceof Usuario) {
		v._class = 'Usuario';
	}
	if (v instanceof Cliente) {
		v._class = 'Cliente';
	}        
	if (v instanceof Producto) {
		v._class = 'Producto';
	}
	if (v instanceof Compra) {
		v._class = 'Compra';
	}	        
	return v;
};

