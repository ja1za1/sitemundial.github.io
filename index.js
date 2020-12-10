var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var msg = document.querySelector("#msg")
var invalidonome = document.querySelector("#invalidonome")
var invalidoemail = document.querySelector("#invalidoemail")
var invalidomsg = document.querySelector("#invalidomsg")
var sucesso = document.querySelector("#sucesso")
var butenviar = document.querySelector("#enviar")



butenviar.onclick = function(e) {
    invalidonome.style.display = "none"
    invalidoemail.style.display = "none"
    invalidomsg.style.display = "none"
    sucesso.style.display = "none"
    e.preventDefault();
    if(nome.value.length > 15 || nome.value == "" || !nome.value.trim () ){
        invalidonome.style.display = "block";
        
    }
    

    if(email.value == "" || email.value.indexOf("@") ==-1 || email.value.indexOf(".") ==-1){
    	invalidoemail.style.display = "block";

    }
    if(msg.value == "" || !msg.value.trim ()){
    	invalidomsg.style.display = "block";
    }
    
    if(invalidonome.style.display == "none" && invalidoemail.style.display == "none" && invalidomsg.style.display == "none"){
    	sucesso.style.display = "block"
    }

      
        
}

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
