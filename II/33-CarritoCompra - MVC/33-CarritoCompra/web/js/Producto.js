  function Producto(codigo,descripcion,precio,categorias) {
    this.Producto(codigo,descripcion,precio,categorias);
  }
  
  Producto.prototype={
  	codigo: "",
	descripcion: "",
	precio: 0,
	categorias: [],
	Producto: function(codigo,descripcion,precio,categorias){
		this.codigo=codigo;
		this.descripcion=descripcion;
		this.precio=precio;
		this.categorias=categorias;
	},
	toString:function(){
	  return this.codigo+" - "+this.descripcion;
	}
  }
  
  Producto.from= function(plain){
    prod = new Producto(plain.codigo,plain.descripcion,plain.precio,plain.categorias);
	return prod;
  };
  
    Producto.to= function(prod){
    return {
        _class : 'Producto',
        codigo : prod.codigo,
		descripcion : prod.descripcion,
		precio : prod.precio,
		categorias: prod.categorias
    };	
  };
  
    Producto.PRO =  0;
    Producto.COM =  1; 
    Producto.IMP =  2;
    Producto.BIC =  3;
    Producto.SEA =  4;    

    Producto.CATEGORIAS = ["Articulos en Promocion","Computadoras","Impresoras","Biciletas","Buscados"];