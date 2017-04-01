/**
 * Pop It Up library used for popups by Michael Chen W.
 * <p> michael.cw02@hotmail.com
 * <p> https://github.com/michaelcw02
 */

/**
 * This function have to be when the document loads.
 */
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
        closePopUP();		
}
function closePopUp() {
    document.getElementById("overlay").style.display = 'block';
	document.getElementById("popup").style.display = 'block';
}