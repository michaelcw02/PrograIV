var personas;
  var persona;
  function pageLoad(event){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");	
	cedula.addEventListener("focus",doFocus);
    cedula.addEventListener("blur",doBlur); 
	nombre.addEventListener("focus",doFocus);
    nombre.addEventListener("blur",doBlur); 
    var formulario=document.getElementById("formulario");
    formulario.addEventListener("submit",doValidate);
    var buscar = document.getElementById("find");
	personas = Storage.retrieve("personas");
    if (personas == null){
		personas=[];
		Storage.store("personas",personas);
	}
	listPersonas(personas);
  }
  function doFocus(event){
    event.target.classList.add("focus");
  }
  function doBlur(event){
    event.target.classList.remove("focus");
  }
  function doValidate(event){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	var error=false;
	
	cedula.classList.remove("invalid");
	if (cedula.value.length==0){
		cedula.classList.add("invalid");
		error=true;
	}

	nombre.classList.remove("invalid");
	if (nombre.value.length==0){
		nombre.classList.add("invalid");
		error=true;
	}

	sexoMasc.classList.remove("invalid");
	sexoFem.classList.remove("invalid");
	if ( (!sexoMasc.checked) && (!sexoFem.checked) ){
		sexoMasc.classList.add("invalid");
		sexoFem.classList.add("invalid");
		error=true;
	}
	
	nombre.classList.remove("invalid");
	if (nombre.value.length==0){
		nombre.classList.add("invalid");
		error=true;
	}
	
	if (error){event.preventDefault();}
  }
  function doSubmit(){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	var sexo=(sexoMasc.checked)? "M": "F";
	persona = new Persona(cedula.value,nombre.value,sexo);
	personas.push(persona);
	Storage.store("personas",personas);
	
	var listado=document.getElementById("listado");
	listPersona(listado,persona);
	
	window.alert("Data sent: "+persona.completo("-"));
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