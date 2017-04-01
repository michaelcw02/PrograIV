var personas;
var persona;
function pageLoad(event){
	addEventListeners();
	personas = Storage.retrieve("personas");
	if (personas == null){
		personas=[];
		Storage.store("personas",personas);
	}
	listPersonas(personas);
	loadPopUp();
}

function addEventListeners() {
	var cedula = document.getElementById("cedula"); 
	var nombre = document.getElementById("nombre");	
	var signs = document.getElementById("signs");
	var canton = document.getElementById("canton");
	var distrito = document.getElementById("distrito");
	var provincia = document.getElementById("provincia");
	
	cedula.addEventListener("focus",doFocus);
	cedula.addEventListener("blur",doBlur); 
	nombre.addEventListener("focus",doFocus);
	nombre.addEventListener("blur",doBlur); 
	signs.addEventListener("focus",doFocus);
	signs.addEventListener("blur",doBlur); 
	canton.addEventListener("focus",doFocus);
	canton.addEventListener("blur",doBlur); 
	distrito.addEventListener("focus",doFocus);
	distrito.addEventListener("blur",doBlur); 
	provincia.addEventListener("focus",doFocus);
	provincia.addEventListener("blur",doBlur); 

	var formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",doValidate);
	var buscar = document.getElementById("find");
	buscar.addEventListener("click", doFind);
}

function doFocus(event){
	event.target.classList.add("focus");
}
function doBlur(event){
	event.target.classList.remove("focus");
}

function validateInput(element) {
	element.classList.remove("invalid");
	if (element.value.length==0){
		element.classList.add("invalid");
		return true;
	}
}

function loadPopUp() {
	let button = document.getElementById("popup-button");
	button.addEventListener("click", () => {
		document.getElementById("overlay").style.display = 'none';
		document.getElementById("popup").style.display = 'none';		
	})
}
function toPopUp(title, message) {
		document.getElementById("popup-title").innerText = title;
		document.getElementById("popup-message").innerText = message;
		
		document.getElementById("overlay").style.display = 'block';
		document.getElementById("popup").style.display = 'block';
}

function doValidate(event){
	var cedula=document.getElementById("cedula"); 
  var nombre=document.getElementById("nombre");
  var sexoMasc=document.getElementById("sexoMasc");	
  var sexoFem=document.getElementById("sexoFem");
	var signs = document.getElementById("signs");
	var canton = document.getElementById("canton");
	var distrito = document.getElementById("distrito");
	var provincia = document.getElementById("provincia");
	var error = false;
	
	error = validateInput(cedula);
	error = validateInput(nombre);
	error = validateInput(signs);
	error = validateInput(canton);
	error = validateInput(distrito);
	error = validateInput(provincia);

	sexoMasc.classList.remove("invalid");
	sexoFem.classList.remove("invalid");
	if ( (!sexoMasc.checked) && (!sexoFem.checked) ){
		sexoMasc.classList.add("invalid");
		sexoFem.classList.add("invalid");
		error=true;
	}
	
	if (error){
		event.preventDefault();
	}
}
  function doFind(event) {
      var nameToFind = document.getElementById("inputBusqueda").value;
      listPersonas(filterName(nameToFind));
  }
  function filterName(name) {
      return personas.filter( (per) => per.nombre.toLowerCase().indexOf(name.toLowerCase()) > -1 );
  }
  function doSubmit(){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");
		var sexo=(sexoMasc.checked)? "M": "F";

		var signs = document.getElementById("signs").value;
		var canton = document.getElementById("canton").value;
		var distrito = document.getElementById("distrito").value;
		var provincia = document.getElementById("provincia").value;

		var direccion = new Direccion(signs, canton, distrito, provincia);

		persona = new Persona(cedula.value,nombre.value,sexo, direccion);
		console.log(persona.direccion);
		personas.push(persona);
		Storage.store("personas",personas);
	
		var listado=document.getElementById("listado");
		listPersona(listado,persona);
	
		toPopUp("Success!", "Data sent: " + persona.completo("-"));
    var formulario=document.getElementById("formulario");
    formulario.reset();	
  }
  function listPersonas(pers){
	var listado=document.getElementById("listado");
	listado.innerHTML="";
	for (i=0;i<pers.length;i++){
	  listPersona(listado,pers[i]);
	}
  }
  function listPersona(listado,per){
	var tr =document.createElement("tr");
	var td;
	td=document.createElement("td");
	td.appendChild(document.createTextNode(per.cedula));
	tr.appendChild(td);
	td =document.createElement("td");
	td.appendChild(document.createTextNode(per.nombre));
	tr.appendChild(td);
	td =document.createElement("td");
	var img = document.createElement("img");	
	switch(per.sexo){
	  case "M":
		img.src="images/male.png";
		break;
	  case "F":
		img.src="images/female.png";
		break;
	}
	img.width="30";
	img.height="30";
	td.appendChild(img);
	tr.appendChild(td);

	td=document.createElement("td");
	td.appendChild(document.createTextNode(per.direccion.canton + ", " + per.direccion.distrito + ", " + per.direccion.provincia));
	tr.appendChild(td);

	td= document.createElement("td");
    img= document.createElement("img");
    img.src="images/edit.png";
	img.title="Editar"
    img.addEventListener("click", function(e){doQuery(per);});
    td.appendChild(img);
    tr.appendChild(td);
	
    td= document.createElement("td");
    img= document.createElement("img");
    img.src="images/delete.png";
	img.title="Eliminar"
    img.addEventListener("click", function(e){doDelete(per);});
    td.appendChild(img);
    tr.appendChild(td);
	
	listado.appendChild(tr);  
  }
  function doDelete(per){
	if (!confirm("Esta Seguro?")) return;
	var index = personas.findIndex(function(x){return x.cedula==per.cedula; });
    if (index != -1){
	    personas.splice(index,1);
		Storage.store("personas",personas);
		listPersonas(personas);
	}
	
  }
  function doQuery(per){
	persona = personas.find(function(x){return x.cedula==per.cedula; });
    if (persona != null){
		showPersona(persona);
	}
  }
  function showPersona(per){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	
	cedula.value = per.cedula;
	nombre.value = per.nombre;
	if(per.sexo=="M"){
	  sexoMasc.checked=true;
	}
	else{
	  sexoFem.checked=true;
	}
}  
  
  document.addEventListener("DOMContentLoaded",pageLoad)