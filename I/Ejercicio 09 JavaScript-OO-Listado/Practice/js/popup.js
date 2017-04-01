/**
 * Pop It Up library used for popups by Michael Chen W.
 * <p> michael.cw02@hotmail.com
 * <p> https://github.com/michaelcw02
 */

/**
 * 
 */
function loadPopUp() {
	let btnAceptar = document.getElementById("popup-btn-aceptar");
	btnAceptar.addEventListener("click", () => {
		document.getElementById("overlay").style.display = 'none';
		document.getElementById("popup").style.display = 'none';		
	})
	
    let btnCancelar = document.getElementById("popup-btn-cancelar");
	btnCancelar.addEventListener("click", () => {
		document.getElementById("overlay").style.display = 'none';
		document.getElementById("popup").style.display = 'none';		
	})
}
function toPopUp(title = "TITLE", message = "MESSAGE") {
    document.getElementById("popup-title").innerHTML = title;
	document.getElementById("popup-message").innerHTML = message;
}
function showPopUp() {
    document.getElementById("overlay").style.display = 'block';
	document.getElementById("popup").style.display = 'block';
}

function loadPopUpAcceptButton( toDo = undefined, objectToDo = undefined) {
    let acceptBtn = document.getElementById("popup-btn-aceptar");
    document.getElementById('popup-btn-aceptar').addEventListener("click",
        function(event) {
            if(toDo !== undefined) {
                if(objectToDo !== undefined)
                    toDo(objectToDo);
                else
                    toDo();
            }
        }
    );
}
