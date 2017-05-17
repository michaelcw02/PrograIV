<%-- 
    Document   : ListProducts
    Created on : May 3, 2016, 5:00:21 PM
    Author     : jsanchez
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Productos</title> 
        <%@ include file="Imports.jspf" %>
    </head>
    <body>
        <%@ include file="Header.jspf" %>
        <div id="subheader" style="height:50px;background:#6496c8">
                <div id="categorias" style="display:inline-block">
                        <ul class="menu">
                                <li><a href="" title="Electronica">Electronica</a>
                                        <ul>
                                                <li><a href=""  title="Computadoras" onclick="controller.productListCategory(Producto.COM); return false;">Computadoras</a></li>
                                                <li><a href="" title="Impresoras" onclick="controller.productListCategory(Producto.IMP); return false;">Impresoras</a></li>							
                                        </ul>
                                </li>
                                <li><a href="" title="Deportes">Deportes</a>
                                        <ul>
                                                <li><a href=""  title="Bicicletas" onclick="controller.productListCategory(Producto.BIC); return false;" >Bicicletas</a></li>
                                                <li><a href="" title="Futbol">Futbol</a></li>
                                                <li><a href="" title="Natacion">Natacion</a></li>
                                        </ul>
                                </li>
                                <li><a href="" title="Otros" >Otros</a></li>
                        </ul> 
                </div>
                <div id="busqueda" style="display:inline-block; margin-left:50px"> 
                    <input type="text" id="busquedaCriterio" style="width:200px; height:25px; border:1px solid #6496c8;">
                    <image src="images/search.png" onclick="controller.ProductListSearch();">
                </div>
        </div>	

        <div id="filtro" style="display:inline-block;  margin-top:30px; margin-left:10px; width:200px; height:500px; overflow:auto;">
                Marca
                <hr>
                <p><input type="checkbox">Hewlett Packard</input></p>
                <p><input type="checkbox">IBM</input></p>
                <p><input type="checkbox">Apple</input></p><br>

                Precio
                <hr>
                <p><input type="checkbox"> 0-100 </input></p>
                <p><input type="checkbox">101-200</input></p>
                </div>
        </div>

        <div id="productos" style="display:inline-block; margin-top:30px; margin-left:30px; width:700px; height:500px; overflow:auto;">
                <span id="productsTableTitle" style="font-family:Papyrus,fantasy; font-size:25px; font-weight:700; color:#6496c8">
                        Categoria
                </span>
            <div>
                <div style="display:inline-block; margin-top: 5px;  overflow:auto;font-family:Papyrus,fantasy; font-size:20px; font-weight:700; color:#6496c8; width:700px">
                    <table  class="GRID"> 
                        <thead ><tr><th>Descripcion</th><th>...</th><th>Precio</th><th>...</th></tr></thead>
                        <tbody id ="productsTable"></tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id="overlay" class="overlay"></div>

        <div id="popup" class="popup">
                <div style="font-family:Papyrus,fantasy; font-size:25px; font-weight:700; color:#6496c8">Producto agregado</div>
                <div id="agregado_descripcion"></div>
                <img id="agregado_imagen" style="height:150px; width:auto;"></img>
                <button onclick = "document.getElementById('overlay').style.display='none';document.getElementById('popup').style.display='none';">Seguir comprando...</button> 
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
                this.productListCategory(Producto.PRO);
                this.initCart();
	},
        initCart: function(){
            this.model.cart=JSON.parse(sessionStorage.getItem("Cart")!=null?sessionStorage.getItem("Cart"):"[]",JsonUtils.revive);
        },
        productListCategory: function (category){
            var model = this.model;
            var view = this.view;
            Proxy.productListCategory(category,function(result){
                model.category=category;
                model.products=result;
                view.showProducts(); }
              );            
         },

        ProductListSearch: function (){
            criteria=this.view.document.getElementById('busquedaCriterio').value;
            var model = this.model;
            var view = this.view;            
            Proxy.ProductListSearch(criteria,function(result){
                model.category=Producto.SEA;
                model.products=result;
                view.showProducts(); }
              );            
        },

        productDelete: function (target){
            carTable = target.parentNode.parentNode.parentNode.parentNode;
            model = retrieve(carTable.modelId);
            prod=model.get(target.rowIdx);
            Proxy.productDelete(prod,
                function(product){
                    window.alert(product.descripcion+" Borrado");
                    category = sessionStorage.getItem("category");
                    productListCategory(category);    
                });
        },

        productAdd: function (codigo){
                var product=this.model.products.find( function(p){return p.codigo===codigo;});
                this.model.cart.push(product);
                sessionStorage.setItem("Cart", JSON.stringify(this.model.cart,JsonUtils.replacer));
                this.view.showAddedMessage(product);
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
                document.getElementById("productsTableTitle").innerHTML= Producto.CATEGORIAS[this.model.category];
		var table = document.getElementById("productsTable");
		table.innerHTML="";
		for (i=0;i<model.products.length;i++){
		  showProduct(table,model.products[i]);
		}
	}
	function showProduct(table,product){
		var tr=document.createElement("tr");
		var c="<td>"+product.descripcion+"</td>"+
                        "<td > <img style='width:200px;' src='images/"+product.codigo+".png'></td>"+
                        "<td>"+product.precio+"</td>"+
                        "<td><button onClick='controller.productAdd(\""+product.codigo+"\");'>Agregar</button></td>";
		tr.innerHTML=c;
		table.appendChild(tr);
	}
        function showAddedMessage(product){
                document.getElementById('overlay').style.display="block";
                document.getElementById('agregado_descripcion').innerHTML=product.descripcion;
                document.getElementById('agregado_imagen').src="images/"+product.codigo+".png";
                document.getElementById('popup').style.display="block";   
        }
        
	document.addEventListener("DOMContentLoaded",pageLoad);
</script>
        
    </body>
</html>
