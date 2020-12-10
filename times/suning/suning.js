var sobre1 = document.querySelector("#subtopic55")
var sobre2 = document.querySelector("#subtopic56")
var sobre3 = document.querySelector("#subtopic57")
var oculto = true
var sobresuning = document.querySelector("#sobresuning")
var linesuning = document.querySelector("#linesuning")
var titulosuning = document.querySelector("#titulosuning")

sobre1.onclick = function() {
    if (oculto == true){
        sobresuning.style.display = "block";
        oculto = false;
    }
    else {
        sobresuning.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linesuning.style.display = "block";
        oculto = false;
    }
    else {
        linesuning.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulosuning.style.display = "block";
        oculto = false;
    }
    else {
        titulosuning.style.display = "none";
        oculto = true;
    }
    
    }  

