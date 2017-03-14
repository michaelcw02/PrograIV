  document.addEventListener("DOMContentLoaded", pageLoad)
  document.addEventListener("submit", submit)

function pageLoad(event){
    var cedula=document.getElementById("cedula"); 
    var nombre=document.getElementById("nombre");	
    cedula.addEventListener("focus",doFocus);
    cedula.addEventListener("blur",doBlur); 
    nombre.addEventListener("focus",doFocus);
    nombre.addEventListener("blur",doBlur);  	
}

function doFocus(event){
    event.target.className="focus";
}

function doBlur(event){
    event.target.className="nofocus";
}

function submit(event) {
    window.alert("is it here>")

}

function validaCampos(event) {
    var ced = document.getElementById("cedula");
    var nom = document.getElementById("nombre");
    var radios = document.getElementsByName("sexo");

  
}

function isRadioChecked(radios) {
    for (var i = 0; i < radios.length; i++)
        if(radios[i].checked)
            return true;    
    return false;
}
function isCedFilled(ced) {
    if(ced.value == null || ced.value == "")
        return false;
    return true;
}
function isNomFilled(nom) {
    if(nom.value == null || nom.value == "")
        return false;
    return true;
}