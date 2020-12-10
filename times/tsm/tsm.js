var sobre1 = document.querySelector("#subtopic40")
var sobre2 = document.querySelector("#subtopic41")
var sobre3 = document.querySelector("#subtopic42")
var oculto = true
var sobretsm = document.querySelector("#sobretsm")
var linetsm = document.querySelector("#linetsm")
var titulotsm = document.querySelector("#titulotsm")

sobre1.onclick = function() {
    if (oculto == true){
        sobretsm.style.display = "block";
        oculto = false;
    }
    else {
        sobretsm.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linetsm.style.display = "block";
        oculto = false;
    }
    else {
        linetsm.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulotsm.style.display = "block";
        oculto = false;
    }
    else {
        titulotsm.style.display = "none";
        oculto = true;
    }
    
    }  

