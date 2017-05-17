<%-- 
    Document   : Managercompras
    Created on : May 5, 2016, 2:52:15 PM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Compras</title>
        <%@ include file="Imports.jspf" %>
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        <%@ include file="Subheader.jspf" %>
        <div id="compras" style="display:inline-block; margin-top:30px; margin-left:30px; width:700px; height:500px; overflow:auto;">
                <span id="carTitle" style="font-family:Papyrus,fantasy; font-size:25px; font-weight:700; color:#6496c8">
                        Compras
                </span>
            <div>
                <div style="display:inline-block; margin-top: 5px;  overflow:auto;font-family:Papyrus,fantasy; font-size:20px; font-weight:700; color:#6496c8; width:500px">
                    <table  class="GRID"> 
                        <thead><tr><th>Numero</th><th>Cliente</th><th>Fecha</th></tr></thead>
                        <tbody id="purchasesTable"></tbody>
                    </table>
                </div>
            </div>
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
                this.initPurchases();
	},
        initPurchases: function(){
            var model = this.model;
            var view = this.view;            
            Proxy.PurchaseListAll(function(result){
                model.purchases=result;
                view.showPurchases(); }
              );            
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
	function showPurchases(){
		var table = document.getElementById("purchasesTable");
		table.innerHTML="";
		for (i=0;i<model.purchases.length;i++){
		  showPurchase(table,model.purchases[i]);
		}
	}
	function showPurchase(table,purchase){
		var tr=document.createElement("tr");
		var c="<td>"+purchase.numero+"</td>"+
                        "<td>"+purchase.cliente.nombre+"</td>"+
                        "<td>"+purchase.fecha+"</td>";
 		tr.innerHTML=c;
		table.appendChild(tr);
	}

    document.addEventListener("DOMContentLoaded",pageLoad);
</script>
        
    </body>
</html>
