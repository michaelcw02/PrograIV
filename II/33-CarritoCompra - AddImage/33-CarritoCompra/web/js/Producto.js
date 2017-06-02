  function Producto(codigo,descripcion,precio,categorias) {
    this.Producto(codigo,descripcion,precio,categorias);
  }
  
  Producto.prototype={
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
  
    Producto.PRO =  0;
    Producto.COM =  1; 
    Producto.IMP =  2;
    Producto.BIC =  3;
    Producto.SEA =  4;    

    Producto.CATEGORIAS = ["Articulos en Promocion","Computadoras","Impresoras","Biciletas","Buscados"];