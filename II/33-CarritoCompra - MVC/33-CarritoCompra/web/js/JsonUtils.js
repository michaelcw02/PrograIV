var JsonUtils = JsonUtils || {};

JsonUtils.store=function (id, carrito){
	sessionStorage.setItem(id, JSON.stringify(carrito,replacer));
};

JsonUtils.retrieveCarritoFromUrl= function (url,callBack){
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,revive );
            callBack(object);
        }
    };
    AJAX_req.send();
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
		return Usuario.from(v);
	}    
	if (v instanceof Object && v._class == 'Cliente') {
		return Cliente.from(v);
	}    
	if (v instanceof Object && v._class == 'Producto') {
		return Producto.from(v);
	}	
	if (v instanceof Object && v._class == 'Compra') {
		return Compra.from(v);
	}	
    return v;
};

JsonUtils.replacer = function (k,v) {
	if (v instanceof Usuario) {
		return Usuario.to(v);
	}
	if (v instanceof Cliente) {
		return Cliente.to(v);
	}        
	if (v instanceof Producto) {
		return Producto.to(v);
	}
	if (v instanceof Compra) {
		return Compra.to(v);
	}	        
	return v;
};

