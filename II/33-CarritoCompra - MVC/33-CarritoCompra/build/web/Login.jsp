<%-- 
    Document   : Login
    Created on : May 4, 2016, 8:14:06 AM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <%@ include file="Imports.jspf" %>        
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        
            <div style="width: 200px; margin :auto; margin-top: 200px; background-color: #6496c8"> 
                <form >
                    <fieldset><legend> Login </legend>	  
                     <label>Id <input type="text" id="id" required></label> 
                     <p><label>Clave <input type="password" id="clave"> </label></p>
                     <p><button type="button" onclick="controller.login();">Ingresar</button></p>
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
	},
        login: function(){
            var view = this.view;
            usuario = new Usuario(document.getElementById("id").value,document.getElementById("clave").value,0);
            Proxy.userLogin(usuario,
                function(usuario){
                    switch(usuario.tipo){
                        case 0: // usuario no existe
                            view.showErrorMessage();
                            break;
                        case 1: // cliente
                            document.location = "/33-CarritoCompra/ListProducts.jsp";
                            break;
                        case 2: // manager
                            document.location = "/33-CarritoCompra/ManagerMenu.jsp";
                            break;
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
        function showErrorMessage(){
            window.alert("Usuario incorrecto...");
        }
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>    
    </body>
</html>
