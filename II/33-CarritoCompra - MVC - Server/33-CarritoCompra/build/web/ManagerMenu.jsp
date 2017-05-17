<%-- 
    Document   : ManagerMenu
    Created on : 16-may-2017, 13:45:46
    Author     : Estudiante
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
        <%@ include file="Subheader.jspf" %>
        
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
