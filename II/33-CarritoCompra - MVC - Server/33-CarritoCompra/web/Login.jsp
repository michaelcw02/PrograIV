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
            <% 
                Usuario user1 = (Usuario) request.getAttribute("user"); 
                String id = (user1 == null) ? "" : user1.getId();
                String clave = "";
            %>
            
            
            
            <div style="width: 200px; margin :auto; margin-top: 100px; background-color: #6496c8"> 
                <form method="post" action="/33-CarritoCompra/ProductosService?action=userLogin">
                    <fieldset><legend> Login </legend>	  
                        <label>Id <input type="text"  name="id"  id="id" value="<%=id%>"required></label> 
                     <p><label>Clave <input type="password" name="clave" id="clave" value="<%=clave%>"> </label></p>
                     <p><input type="submit" value="Ingresar"></p>
                    </fieldset>
                </form>
            </div>
            <%if(request.getAttribute("error")!=null){%>
            <h1 style="color: red;text-align: center;"><%=request.getAttribute("error")%></h1>
            <%}%>

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
        function showErrorMessage(){
            window.alert("Usuario incorrecto...");
        }
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>    
    </body>
</html>
