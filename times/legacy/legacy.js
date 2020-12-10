var sobre1 = document.querySelector("#subtopic7")
var sobre2 = document.querySelector("#subtopic8")
var sobre3 = document.querySelector("#subtopic9")
var oculto = true
var sobrelegacy = document.querySelector("#sobrelegacy")
var linelegacy = document.querySelector("#linelegacy")
var titulolegacy = document.querySelector("#titulolegacy")

sobre1.onclick = function() {
    if (oculto == true){
        sobrelegacy.style.display = "block";
        oculto = false;
    }
    else {
        sobrelegacy.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linelegacy.style.display = "block";
        oculto = false;
    }
    else {
        linelegacy.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulolegacy.style.display = "block";
        oculto = false;
    }
    else {
        titulolegacy.style.display = "none";
        oculto = true;
    }
    
    }  

