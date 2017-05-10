<%-- 
    Document   : ManageProducts
    Created on : May 4, 2016, 8:20:56 AM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Administracion</title>
        <%@ include file="Imports.jspf" %>        
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        
        <div id="subheader" style="height:50px;background:#6496c8">
            <div id="logo" style="display:inline-block; vertical-align: top; font-family:Papyrus,fantasy; font-size:35px; font-weight:700; color:white;margin-left:5px;">
                    Administracion de:
            </div>
            
            <div id="mantenimientos" style="display:inline-block">
                    <ul class="menu">
                            <li><a href="ManagerCompras.jsp" title="Compras">Compras</a></li>
                            <li><a href="" title="Productos">Productos</a></li>
                            <li><a href="" title="Categorias">Categorias</a></li>
                            <li><a href="" title="Clientes" >Clientes</a></li>
                    </ul> 
            </div>
        </div>

        <div style="padding: 100px;">Mantenimientos (listado, inclusion, modificacion y borrado)</div>
        

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
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>          
        
    </body>
</html>
