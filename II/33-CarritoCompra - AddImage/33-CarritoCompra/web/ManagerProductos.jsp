<%-- 
    Document   : ManagerProductos
    Created on : 24/05/2017, 09:12:40 AM
    Author     : Escinf
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Productos</title>
        <%@ include file="Imports.jspf" %>        
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        <%@ include file="ManagerSubHeader.jspf" %> 
            <div style="width: 400px; margin :auto; margin-top: 100px; margin-left: 200px; background-color: #6496c8"> 
                <form >
                    <fieldset><legend> Producto </legend>	  
                     <label>Codigo <input type="text" id="codigo" required></label> 
                     <p><label>Descripcion <input type="text" id="descripcion"> </label></p>
                     <p><label>Precio <input type="text" id="precio"> </label></p>
                     <p><label>Imagen <input type="file" id="imagen"> </label></p>                      
                     <p><button type="button" onclick="controller.productAdd();">Agregar</button></p>
                    </fieldset>
                </form>
            </div>        

 <script> // Model
  function Model() {
    this.Model();
  }
  
  Model.prototype={
	Model: function(){
        }
  };
</script>
<script> // Controller
  function Controller(model,view) {
    this.Controller(model,view);
  }
  
  Controller.prototype={
	Controller: function(model,view){
		this.model=model;
		this.view=view;
                model.producto=new Producto("","",0,[]);
                view.showProducto();
	},
        productAdd: function(){
            var view = this.view;
            var model = this.model;
            var codigo = document.getElementById("codigo").value;
            var descripcion = document.getElementById("descripcion").value;
            var precio = parseInt(document.getElementById("precio").value);
            var producto = new Producto(codigo,descripcion,precio,[]);
            var imagen = document.getElementById("imagen").files[0];
                Proxy.productAdd(producto,imagen,
                    function(status){
                        switch(status){
                            case 0:
                                view.showMessage("Datos agregados");
                                model.producto=new Producto("","",0,[]);
                                view.showProducto();
                                break;
                                 
                            case 1:
                                view.showMessage("Registro duplicado");
                        }
                    });
        }
  };
</script>
<script> // View
  var model;
  var controller;
	function pageLoad(event){
		model=new Model();  
		controller = new Controller(model,window);
	}
        function showMessage(message){
            window.alert(message);
        }
        
        function showProducto(){
            document.getElementById("codigo").value=model.producto.codigo;
            document.getElementById("descripcion").value=model.producto.descripcion;
            document.getElementById("precio").value=model.producto.precio;
        }        
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>   
    </body>
</html>
