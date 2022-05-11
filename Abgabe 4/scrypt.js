/* Funktionalität MUST */



document.querySelector("#choice").onchange = function  () {
	let msg = document.querySelector("#choice").value;
 }

 submit.addEventListener("click", enterEvent);
 
function enterEvent(evt) {
    evt.preventDefault();
    createNewEventEntry();
}