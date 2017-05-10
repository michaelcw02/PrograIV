<%-- 
    Document   : ShowCarrito
    Created on : May 3, 2016, 5:35:18 PM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Carrito</title>
        <%@ include file="Imports.jspf" %>        
    </head>
    <body>
        <%@ include file="Header.jspf" %>

        <div id="subheader" style="height:50px;background:#6496c8">
                <div id="purchaseConfirm" style="display:inline-block; float:right; "> 
                        <a href="PurchaseConfirm.jsp" title="Realizar Compra" style=" text-decoration: none;  color:#6496c8;">
                                <div style="width: 50px; height:50px; display:inline-block; background-image: url(images/purchaseConfirm.png); background-repeat: no-repeat; background-size:contain;"></div>
                        </a>
                </div>
        </div>
        <div id="carrito" style="margin-top:30px; margin-left:50px; width:800px; height:200px;">
                <span id="carTitle" style="font-family:Papyrus,fantasy; font-size:25px; font-weight:700; color:#6496c8">
                        Carrito
                </span>
                <div  style="margin-top: 5px;  overflow:auto;font-family:Papyrus,fantasy; font-size:20px; font-weight:700; color:#6496c8">
                    <table  class="GRID"> 
                        <thead><tr><th>Descripcion</th><th>...</th><th>Precio</th><th>...</th></tr></thead>
                        <tbody id="productsTable"></tbody>
                    </table>            
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
                this.initCart();
	},
        initCart: function(){
            this.model.products=JSON.parse(sessionStorage.getItem("Cart")!=null?sessionStorage.getItem("Cart"):"[]",JsonUtils.revive);
            this.view.showProducts();
        },
        productDelete: function (codigo){
                var idx=this.model.products.findIndex( function(p){return p.codigo===codigo;});
                var product = this.model.products[idx];
                this.model.products.splice(idx,1);
                sessionStorage.setItem("Cart", JSON.stringify(this.model.products,JsonUtils.replacer));
                this.view.showProducts();
                this.view.showRemovedMessage(product);
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
	function showProducts(){
		var table = document.getElementById("productsTable");
		table.innerHTML="";
		for (i=0;i<model.products.length;i++){
		  showProduct(table,model.products[i]);
		}
	}
	function showProduct(table,product){
		var tr=document.createElement("tr");
		var c="<td>"+product.descripcion+"</td>"+
                        "<td> <img style='width:200px;' src='images/"+product.codigo+".png'></td>"+
                        "<td>"+product.precio+"</td>"+
                        "<td><button onClick='controller.productDelete(\""+product.codigo+"\");'>Remover</button></td>";
		tr.innerHTML=c;
		table.appendChild(tr);
	}
        function showRemovedMessage(product){
            window.alert("Producto removido...");
         }
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>
                
    </body>
</html>
