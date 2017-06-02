<%-- 
    Document   : PurchaseConfirm
    Created on : May 4, 2016, 8:05:46 AM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Compra</title>
        <%@ include file="Imports.jspf" %>
        <link rel="stylesheet" type="text/css" href="css/Calendar.css"/>
        <script type="text/javascript" src="js/Calendar.js"></script>        
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        <div id="subheader" style="height:50px;background:#6496c8">
                <div id="purchaseConfirm" style="display:inline-block; float:right; "> 
                        <a href="" title="Realizar Compra" onclick="PurchaseConfirm();return false;" style=" text-decoration: none;  color:#6496c8;">
                                <div style="width: 50px; height:50px; display:inline-block; background-image: url(images/purchaseConfirm.png); background-repeat: no-repeat; background-size:contain;"></div>
                        </a>
                </div>
        </div>
        <div id="row">
            <div id="carrito" style="display: inline-block; vertical-align: top; margin-top:30px; margin-left:50px; width:400px; height:200px;">
                <span id="carTitle" style="font-family:Papyrus,fantasy; font-size:25px; font-weight:700; color:#6496c8">
                        Detalle de Compra
                </span>
                <div style="margin-top: 5px;  overflow:auto;font-family:Papyrus,fantasy; font-size:20px; font-weight:700; color:#6496c8">
                    <table class="GRID"> 
                        <thead><tr><th>Descripcion</th><th>Precio</th></tr></thead>
                        <tbody id="productsTable"></tbody>
                    </table>            
                </div>
            </div>
            <div id="compra" style="display: inline-block; vertical-align: top; margin-top: 50px; width: 200px;  background-color: #6496c8">
                <form >
                    <fieldset><legend> Compra </legend>	  
                     <label>Direccion <input type="text" id="direccion_envio" required></label> 
                     <p><label>Tarjeta <input type="text" id="tarjeta"> </label></p>
                     <p><label>Vencimiento <input type="text" id="vencimiento" onclick="event.cancelBubble=true; cal.showCalendar(this);"> </label></p>
                     <p><button type="button" onclick="controller.PurchaseConfirm();">Confirmar</button></p>
                    </fieldset>
                </form>

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
                this.initPurchase();
	},
        initCart: function(){
            this.model.products=JSON.parse(sessionStorage.getItem("Cart")!=null?sessionStorage.getItem("Cart"):"[]",JsonUtils.revive);
            this.view.showProducts();
        },
        initPurchase: function (){
            var model = this.model;
            var view = this.view;            
            Proxy.clientGet(function(result){
                model.purchase= new Compra(result,0,"01/01/2000",result.direccion_envio,0,"","");
                view.showPurchase(); }
              );            
        },
        PurchaseConfirm: function (){
            var model = this.model;
            var view = this.view;
            this.model.purchase.direccion_envio=this.view.document.getElementById("direccion_envio").value;
            this.model.purchase.tarjeta=this.view.document.getElementById("tarjeta").value;
            this.model.purchase.vencimiento=this.view.document.getElementById("vencimiento").value;
            Proxy.PurchaseConfirm(this.model.purchase,this.model.products,
                function(compraNumero){
                    model.purchase.numero=compraNumero;
                    view.showPurchaseMessage();
                     document.location = "/33-CarritoCompra/ListProducts.jsp";
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
                         "<td>"+product.precio+"</td>";
 		tr.innerHTML=c;
		table.appendChild(tr);
	}
        
        function showPurchase(){
            document.getElementById("direccion_envio").value= this.model.purchase.direccion_envio;
         }
        
        
        function showPurchaseMessage(product){
            window.alert("Su numero de Compra es: "+this.model.purchase.numero);
         }
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>
                
    </body>
</html>
