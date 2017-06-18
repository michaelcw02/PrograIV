<%-- 
    Document   : Questions
    Created on : Jun 14, 2017, 4:15:22 PM
    Author     : javie
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <%@ include file="Imports.jspf" %>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Questions</title>
    </head>
    <body>
         <%@ include file="Header.jspf" %>
         <div id="divTopic">
             <br>
             <h1>Topic: </h1>
             <input type="text" name="topic" id="topic">
             <input class="boton" type="button" value="Buscar" onclick="controller.buscar();">
         </div>
         <br>
        <div id="listadoDiv" style="display: inline; vertical-align:top;">
			<table id="tableGrid" class="grid" cellpadding=5 cellspacing=4>
				<thead align="center">
					<tr>
						<th>Question</th>
						<th>Topic</th>
						
					</tr>
				</thead>
				<tbody id="listado" align="left"></tbody>
			</table>
                                                         <table id="tableRespuestas" class="grid hidden" cellpadding=5 cellspacing=4>
                                                             <form method="POST" name="formularioRespuestas" id="formularioRespuestas" action="javascript:controller.registrarRespuesta();">
                                                                               <thead align="center">
					<tr>
						<th id="respuestaPregunta"></th>
						
						
					</tr>
				</thead>
				<tbody id="listadoRespuestas" align="left"></tbody>
                                                                               <tfoot><tr>
					<td class="fila" colspan="2"><input class="boton" type="submit" value="Submit"></td>
				</tr></tfoot>
                                                             </form>
			</table>
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
                this.model.preguntas = [];
                this.model.preguntasBuscadas = [];
                this.model.respuestas = [];
                this.model.respuestasCorrectas=[];
                this.model.usuario = {};
                Proxy.getUser(function(result){
                    if(result != null){
                        model.usuario= result;
                     }
                    console.log(model.usuario);
                });
                Proxy.cargarPreguntas(function(result){
                    model.preguntas= result;
                    console.log(model.preguntas);
                });
                Proxy.cargarRespuestasCorrectas(function(result){
                    model.respuestasCorrectas= result;
                    console.log(model.respuestasCorrectas);
                });
            }

            Controller.prototype = {
                Controller: function (model, view) {
                    this.model = model;
                    this.view = view;
                },
                buscar: function (){
                   model = this.model;
                   view = this.view;
                    var busqueda = document.getElementById("topic").value;
                    var idUsuario = model.usuario.id;
                    view.document.getElementById("tableRespuestas").setAttribute("class", "grid hidden");
                    Proxy.preguntasFiltro(busqueda, idUsuario,function (result) {
                        this.model.preguntasBuscadas = result;
                        console.log(this.model.preguntasBuscadas);
                        this.view.listPreguntas();
                    }); 
                },
                desplegarRespuestas: function(id, questionname){
                    Proxy.cargarRespuestas(id, function (result) {
                        this.model.respuestas = result;
                        console.log(this.model.respuestas);
                        this.view.listRespuestas(id, questionname);
                    }); 
                },
                registrarRespuesta : function(){
                    model = this.model;
                    view = this.view;
                    var checked = document.querySelector('input[name="respuesta"]:checked').value; //agarra el valor del checked radio
                    var idAnswer = this.model.respuestas.find(function (x) { return checked == x.id; });
                    var idQuestion =idAnswer.idQuestion;
                    var idUser = model.usuario;
                    var userQuestion = new UserQuestion(idUser, idQuestion, idAnswer);
                    console.log(userQuestion);
                    Proxy.contestarPregunta(userQuestion,function(status){
                                 view.showMessage(status);  
                    });
                    this.buscar();
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
            function listPreguntas() {
                var preguntas = model.preguntasBuscadas;
                var listado = document.getElementById("listado");
               listado.innerHTML="";
               if(preguntas.length == 0 ){
                        var tr =document.createElement("tr");
                        var td;
                         td =document.createElement("td");
                         td.setAttribute("colspan", 2);
                         td.appendChild(document.createTextNode("No hay preguntas"));
                         tr.appendChild(td);
                         listado.appendChild(tr);  
               } else{
                   for (i = 0; i < preguntas.length; i++) {
                       listPregunta(listado, preguntas[i]);
                   }
                }
            }
            function listPregunta(listado, pregunta) {
                var tr =document.createElement("tr");
                tr.setAttribute("id", pregunta.id);
                var td;
                td =document.createElement("td");
                td.appendChild(document.createTextNode(pregunta.questionname));
                tr.appendChild(td);
                
                td =document.createElement("td");
                td.appendChild(document.createTextNode(pregunta.topic));
                tr.appendChild(td);
                tr.addEventListener("click", function (){
                    controller.desplegarRespuestas(pregunta.id, pregunta.questionname);
                });
                listado.appendChild(tr);  
            }
               function listRespuestas(id, questionname) {
                var respuestas = model.respuestas;
                var listadoRespuestas = document.getElementById("listadoRespuestas");
                
                document.getElementById("respuestaPregunta").innerHTML = questionname;
               document.getElementById("tableRespuestas").classList.remove("hidden");
               listadoRespuestas.innerHTML="";
                for (i = 0; i < respuestas.length; i++) {
                    listRespuesta(listadoRespuestas, respuestas[i]);
                }
            }
            function listRespuesta(listadoRespuestas, respuesta) {
                var tr =document.createElement("tr");
                tr.setAttribute("id", respuesta.id);
                var td;
                var radioRespuesta = document.createElement("INPUT");
	   radioRespuesta.setAttribute("type", "radio");
                       radioRespuesta.setAttribute("name", "respuesta");
	   radioRespuesta.setAttribute("value",  respuesta.id);
                td =document.createElement("td");
                td.appendChild(radioRespuesta);
                td.appendChild(document.createTextNode(respuesta.answername));
                tr.appendChild(td);
                listadoRespuestas.appendChild(tr);  
            }
     
             function showMessage(message){
                 window.alert(message);
             }
             document.addEventListener("DOMContentLoaded",pageLoad);
        </script>
        
    </body>
</html>
