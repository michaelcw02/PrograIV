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
	var consultar=document.getElementById("consultar");	
	consultar.addEventListener("click",doQuery);
	personas = Storage.retrieve("personas");
    if (personas == null){
		personas=[];
		Storage.store("personas",personas);
	}
  }
  function doFocus(event){
    event.target.className="focus";
  }
  function doBlur(event){
    event.target.className="nofocus";
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
	window.alert("Data sent: "+persona.completo("-"));
    var formulario=document.getElementById("formulario");
    formulario.reset();	
  }
  function doQuery(){
    var cedula=document.getElementById("cedula");
	cedula.classList.remove("invalid");
	persona = personas.find(function(p){return p.cedula==cedula.value; });
    if (persona != null){
		showPersona(persona);
	}
	else{
		cedula.classList.add("invalid");	
	}
  }
 function showPersona(persona){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");
    var sexoMasc=document.getElementById("sexoMasc");	
    var sexoFem=document.getElementById("sexoFem");
	
	cedula.value = persona.cedula;
	nombre.value = persona.nombre;
	if(persona.sexo=="M"){
	  sexoMasc.checked=true;
	}
	else{
	  sexoFem.checked=true;
	}
}  
  
  
  document.addEventListener("DOMContentLoaded",pageLoad)