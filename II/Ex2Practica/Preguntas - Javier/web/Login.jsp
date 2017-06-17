<%-- 
    Document   : Login
    Created on : Jun 14, 2017, 6:19:46 PM
    Author     : javie
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <%@ include file="Imports.jspf" %>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
    </head>
    <body>
         <%@ include file="Header.jspf" %>
           <hr>
      <div id="campos" style="display: block;vertical-align:top;">
          <form method="POST" name="formulario" id="formulario" action="javascript:controller.login();">
	<table border=0 cellpadding=3 cellspacing=4>
                         <tr align="center">
	          <td class="fila" colspan="2"><b>Login</b></td>
	    </tr>
                       <tr align="left">
	          <td class="etiqueta">Id: </td>
                              <td><input type="text" name="id" id="id"></td>
	   </tr>
	   <tr align="left">
	          <td class="etiqueta">Contraseña: </td>
	          <td><input type="password" name="contrasena:" id="contrasena"></td>
	</tr>
        	<tr align="center">
	         <td class="fila" colspan="2">
		<input class="boton" type="submit" value="Login">
	         </td>
	</tr>
                   </table>                         
          </form>
      </div>
           <script>
            // --------------------------------------------------
            // --------------------Model-----------------------
            // ---------------------------------------------------
            function Model() {
                this.Model();
            }

            Model.prototype = {
                Model: function () {
                }
            };
        </script>
        <script>
            // -------------------------------------------------
            // ---------------Controller-----------------------
            // -------------------------------------------------
            function Controller(model, view) {
                this.Controller(model, view);
            }

            Controller.prototype = {
                Controller: function (model, view) {
                    this.model = model;
                    this.view = view;
                },
                login: function (){
                    model = this.model;
                    view = this.view;
                    var id = document.getElementById("id").value; 
                    var contrasena = document.getElementById("contrasena").value; 
                    var usuario = new Usuario(id, contrasena, 0);
                     Proxy.userLogin(usuario, function(usuario){
                    switch(usuario.tipo){
                        case 0: // usuario no existe
                            view.showErrorMessage();
                            break;
                        case 1: // cliente
                              document.location = "/Preguntas/Questions.jsp";
                            break;
                        case 2: // manager
                            document.location = "/Preguntas/Questions.jsp";
                            break;
                    }
                });
                }
            };
        </script>
        <script>
            // -------------------------------------------------
            // ---------------------View-----------------------
            // -------------------------------------------------
             var model;
             var controller;
             function pageLoad(event){
		model=new Model();  
		controller = new Controller(model,window);
            }
             function showMessage(message){
                 window.alert(message);
             }
             document.addEventListener("DOMContentLoaded",pageLoad);
        </script>
    </body>
</html>
