var branco = document.querySelector(".branco")
var verde = document.querySelector(".verde")
var padrao = document.querySelector(".padrao")
var body = document.querySelector("body")

branco.onclick = function() {
	body.style.backgroundColor = "white";

}
verde.onclick = function() {
	body.style.backgroundColor = "green";

}
padrao.onclick = function() {
	body.style.backgroundColor = "#FF6347";

}